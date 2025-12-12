import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import Header from './components/Header';
import JoinPage from './pages/Join/JoinPage';
import CoinsPage from './pages/Coins/CoinsPage';
import OrderPage from './pages/Order/OrderPage';
import TransferPage from './pages/Transfer/TransferPage';
import TradeHistoryPage from './pages/TradeHistory/TradeHistoryPage';
import MyInfoPage from './pages/MyInfo/MyInfoPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/coins" element={<CoinsPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/transfer" element={<TransferPage />} />
            <Route path="/history" element={<TradeHistoryPage />} />
            <Route path="/mypage" element={<MyInfoPage />} />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
