import "./OrderPage.css";

function OrderPage() {
    return (
        <div className="order-container">

            {/* 좌측 : 관심종목 */}
            <div className="order-left">
                <div className="panel interest-panel">
                    관심종목
                </div>
            </div>

            {/* 중앙 : 종목정보 -> 차트 -> 포지션 */}
            <div className="order-center">

                {/* 종목정보 + 수량 */}
                <div className="panel center-top">
                    <div className="info-grid">
                        <div className="info-label">종목정보</div>
                        <div className="info-label">수량</div>
                    </div>
                </div>

                {/* 차트 영역 */}
                <div className="panel chart-panel">
                    차트
                </div>

                {/* 보유 포지션 */}
                <div className="panel position-panel">
                    포지션
                </div>
            </div>

            {/* 우측 : 주문창 */}
            <div className="order-right">
                <div className="panel order-panel">
                    주문창
                </div>
            </div>

        </div>
    );
}

export default OrderPage;
