package com.example.receivePrice.infra.websocket.bybit;

import com.example.receivePrice.infra.redis.RedisPricePublisher;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

import java.util.List;
import java.util.Map;

@Component
public class BybitWebSocketHandler extends TextWebSocketHandler {
    private final ObjectMapper objectMapper = new ObjectMapper();
    private final RedisPricePublisher publisher;

    public BybitWebSocketHandler(RedisPricePublisher publisher) {
        this.publisher = publisher;
    }

    // 소켓 연결 이후 서버에 보낼 메세지
    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        // subscribe 메세지 (소켓 구독 방법: 문서 참조)
        Map<String, Object> subscribeMsg = Map.of(
                "op", "subscribe",
                "args", List.of("tickers.BTCUSDT", "tickers.ETHUSDT")
        );
        // 연결된 소켓에 메세지 보내기
        session.sendMessage(
                new TextMessage(objectMapper.writeValueAsString(subscribeMsg))
        );
        System.out.println("Subscribed to BTCUSDT, ETHUSDT ticker");
    }

    // 수신 받은 메세지 가공
    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) {
        try {
            JsonNode root = objectMapper.readTree(message.getPayload());

            // 0. ts 노드 확인
            JsonNode timeNode = root.get("ts");
            if (timeNode == null) return;
            String receiveTime = timeNode.asString();

            // 1. data 노드 없으면 무시
            JsonNode dataNode = root.get("data");
            if (dataNode == null) return;

            // 2. symbol
            JsonNode symbolNode = dataNode.get("symbol");
            if (symbolNode == null) return;
            String symbol = symbolNode.asString();

            // 3. lastPrice
            JsonNode lastPriceNode = dataNode.get("lastPrice");
            if (lastPriceNode == null) return;
            String lastPrice = lastPriceNode.asString();

            System.out.println("symbol=" + symbol + ", price=" + lastPrice + ", time=" + receiveTime);

            // Redis publish
            publisher.publish(symbol, lastPrice, receiveTime);


        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void handleTransportError(WebSocketSession session, Throwable exception) {
        System.err.println("WebSocket error: " + exception.getMessage());
    }
}
