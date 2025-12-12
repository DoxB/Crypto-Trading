import "./CoinsPage.css";

function CoinsPage() {
    return (
        <div className="coins-container">
            <div className="coins-left">

                <label className="coins-label">검색창</label>
                <input type="text" className="coins-search" placeholder="종목을 검색하세요" />

                <label className="coins-label">종목리스트</label>
                <div className="coins-list-box">
                    {/* 종목 리스트 데이터 렌더링 자리 */}
                </div>

            </div>

            <div className="coins-right">
                <div className="coins-favorite-box">
                    관심종목
                </div>
            </div>
        </div>
    );
}

export default CoinsPage;
