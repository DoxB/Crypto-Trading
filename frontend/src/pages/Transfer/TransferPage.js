import "./TransferPage.css";
import { useState } from "react";

function TransferPage() {
    const [isCodeSent, setIsCodeSent] = useState(false);

    return (
        <div className="transfer-container">

            <div className="transfer-left">
                <div className="panel asset-panel">자산현황</div>

                <label className="transfer-label">받는 사람 계좌</label>
                <input className="transfer-input" type="text" />

                <label className="transfer-label">보낼 금액</label>
                <input className="transfer-input" type="text" />

                <label className="transfer-label">인증번호</label>

                <div className="transfer-row">
                    <input
                        className="transfer-input"
                        type="text"
                        disabled={!isCodeSent}   // 인증번호 입력은 인증요청 후만 가능
                        placeholder={
                            isCodeSent
                                ? "인증번호를 입력하세요"
                                : "인증요청 버튼을 눌러주세요"
                        }
                    />

                    <button
                        className="btn-secondary"
                        onClick={() => setIsCodeSent(true)}
                    >
                        {isCodeSent ? "재전송" : "인증"}
                    </button>
                </div>

                <button className="btn-primary submit-btn">이체</button>
            </div>

            <div className="transfer-right">
                <div className="panel history-panel">이체내역</div>
            </div>

        </div>
    );
}

export default TransferPage;
