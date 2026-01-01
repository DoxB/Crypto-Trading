package com.crpyto_trading.demo.infra.redis;

import com.crpyto_trading.demo.service.PriceStreamService;
import org.springframework.data.redis.connection.Message;
import org.springframework.data.redis.connection.MessageListener;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;

@Component
public class RedisPriceSubscriber implements MessageListener {

    private final PriceStreamService priceStreamService;

    public RedisPriceSubscriber(PriceStreamService priceStreamService) {
        this.priceStreamService = priceStreamService;
    }

    @Override
    public void onMessage(Message message, byte[] pattern) {
        String payload = new String(message.getBody(), StandardCharsets.UTF_8);
        String channel = new String(message.getChannel(), StandardCharsets.UTF_8);

        // 받아온 메시지를 처리 (Service에 처리 로직 구현)
        priceStreamService.onPriceMessage(channel, payload);
    }
}