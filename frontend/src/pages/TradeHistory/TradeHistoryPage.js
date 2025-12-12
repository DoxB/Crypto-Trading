import "./TradeHistoryPage.css";
import { Link } from "react-router-dom";

function TradeHistoryPage() {
    return (
        <div className="history-container">

            {/* 탭 버튼 영역 */}
            <div className="history-tabs">
                <Link to="/mypage" className="tab-btn">내 정보</Link>
                <Link to="/history" className="tab-btn">주문내역</Link>

            </div>

            {/* 주문내역 박스 */}
            <div className="panel history-box">
                주문내역
            </div>

        </div>
    );
}

export default TradeHistoryPage;