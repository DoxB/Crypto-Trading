package com.example.receivePrice.infra.websocket.bybit;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.client.WebSocketClient;
import org.springframework.web.socket.client.standard.StandardWebSocketClient;

@Component
public class BybitWebSocketClient {
    private static final String BYBIT_WS_URL = "wss://stream.bybit.com/v5/public/linear";
    private final WebSocketClient webSocketClient = new StandardWebSocketClient();
    private final BybitWebSocketHandler handler;

    public BybitWebSocketClient(BybitWebSocketHandler handler) {
        this.handler = handler;
    }

    @PostConstruct
    public void connect() {
        webSocketClient.execute(handler, BYBIT_WS_URL);
        System.out.println("Connecting to Bybit WebSocket...");
    }
}
