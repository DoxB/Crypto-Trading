import { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import "./App.css";

function App() {
  const [btcPrice, setBtcPrice] = useState("-");
  const [ethPrice, setEthPrice] = useState("-");

  useEffect(() => {
    const client = new Client({
      webSocketFactory: () => new SockJS("http://localhost:8080/ws"),
      reconnectDelay: 5000,

      onConnect: () => {
        // BTC 구독
        client.subscribe("/topic/price/BTCUSDT", (message) => {
            const data = JSON.parse(message.body);
            setBtcPrice(data.price);
        });

        // ETH 구독
        client.subscribe("/topic/price/ETHUSDT", (message) => {
            const data = JSON.parse(message.body);
            setEthPrice(data.price);
        });
      },
    });

    client.activate();

    return () => {
        client.deactivate();
    };
  }, []);

  return (
    <div className="App">
        <div className="content">
            <div className="box">
                <h3>비트코인 시세</h3>
                <p>{btcPrice} USDT</p>
            </div>

            <div className="box">
                <h3>이더리움 시세</h3>
                <p>{ethPrice} USDT</p>
            </div>

            <div className="box asset-box">나의 자산정보</div>
            <div className="box large">수익률 랭킹</div>
        </div>
    </div>
  );
}

export default App;
