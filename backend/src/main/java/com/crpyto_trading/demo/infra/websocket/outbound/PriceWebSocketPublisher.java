package com.crpyto_trading.demo.infra.websocket.outbound;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

@Component
public class PriceWebSocketPublisher {

    private final SimpMessagingTemplate messagingTemplate;

    public PriceWebSocketPublisher(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    public void publish(String symbol, String payloadJson) {
        // 예: /topic/price/BTCUSDT
        messagingTemplate.convertAndSend("/topic/price/" + symbol, payloadJson);
    }
}
