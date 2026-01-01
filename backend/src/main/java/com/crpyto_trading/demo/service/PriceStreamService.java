package com.crpyto_trading.demo.service;

import com.crpyto_trading.demo.infra.websocket.outbound.PriceWebSocketPublisher;
import org.springframework.stereotype.Service;

@Service
public class PriceStreamService {

    private final PriceWebSocketPublisher publisher;

    public PriceStreamService(PriceWebSocketPublisher publisher) {
        this.publisher = publisher;
    }

    public void onPriceMessage(String channel, String payloadJson) {
        // channel: price:BTCUSDT
        String symbol = extractSymbol(channel);
        publisher.publish(symbol, payloadJson);
    }

    private String extractSymbol(String channel) {
        // "price:BTCUSDT" → "BTCUSDT"
        int idx = channel.indexOf(':');
        return (idx > -1) ? channel.substring(idx + 1) : channel;
    }
}
