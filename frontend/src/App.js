import './App.css';
import Header from './components/Header';

function App() {
    return (
        <div className="App">
            <Header />

            <div className="content">
                <div className="box">비트코인 시세</div>
                <div className="box">이더리움 시세</div>
                <div className="box large">수익률 랭킹</div>
                <div className="box">나의 자산정보</div>
            </div>
        </div>
    );
}

export default App;
