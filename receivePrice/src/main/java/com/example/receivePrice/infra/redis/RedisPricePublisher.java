package com.example.receivePrice.infra.redis;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;
import tools.jackson.databind.ObjectMapper;

import java.util.Map;

@Component
public class RedisPricePublisher {
    private final RedisTemplate<String, String> redisTemplate;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public RedisPricePublisher(RedisTemplate<String, String> redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    public void publish(String symbol, String price, String ts) throws Exception {
        String channel = "price:" + symbol;

        Map<String, String> payload = Map.of(
                "symbol", symbol,
                "price", price,
                "ts", ts
        );

        redisTemplate.convertAndSend(
                channel,
                objectMapper.writeValueAsString(payload)
        );
    }

}
