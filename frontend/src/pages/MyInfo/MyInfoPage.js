import "./MyInfoPage.css";
import { Link } from "react-router-dom";

function MyInfoPage() {
    return (
        <div className="mypage-container">

            {/* 탭 버튼 영역 */}
            <div className="mypage-tabs">
                <Link to="/mypage" className="tab-btn">내 정보</Link>
                <Link to="/history" className="tab-btn">주문내역</Link>
            </div>

            {/* 좌우 레이아웃 */}
            <div className="mypage-content">

                {/* 왼쪽: 사용자 정보 입력 */}
                <div className="mypage-left">

                    <label className="mypage-label">이메일</label>
                    <input type="text" className="mypage-input" />

                    <label className="mypage-label">닉네임</label>
                    <input type="text" className="mypage-input" />

                    <button className="mypage-btn">수정하기</button>
                </div>

                {/* 오른쪽: 자산정보 */}
                <div className="panel mypage-asset-box">
                    자산정보
                </div>

            </div>
        </div>
    );
}

export default MyInfoPage;
