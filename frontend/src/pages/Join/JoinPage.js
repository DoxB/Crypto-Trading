import "./JoinPage.css";
import { useState } from "react";

function JoinPage() {
    const [isCodeSent, setIsCodeSent] = useState(false);

    const sendCode = () => {
        setIsCodeSent(true);
        // 실제 API 호출 자리
    };

    return (
        <div className="signup-container">
            <h2 className="signup-title">회원가입</h2>

            <div className="signup-form">

                {/* 이메일 */}
                <label className="signup-label">이메일</label>
                <div className="email-row">
                    <input type="text" className="signup-input" placeholder="example@email.com" />
                    <button className="email-send-btn" onClick={sendCode}>
                        인증요청
                    </button>
                </div>

                {/* 인증번호 입력 (인증요청 이후에만 표시) */}
                {isCodeSent && (
                    <>
                        <label className="signup-label">인증번호</label>
                        <div className="email-row">
                            <input type="text" className="signup-input" placeholder="6자리 코드 입력" />
                            <button className="email-check-btn">
                                확인
                            </button>
                        </div>
                    </>
                )}

                {/* 비밀번호 */}
                <label className="signup-label">비밀번호</label>
                <input type="password" className="signup-input" />

                <label className="signup-label">비밀번호 확인</label>
                <input type="password" className="signup-input" />

                {/* 닉네임 */}
                <label className="signup-label">닉네임</label>
                <input type="text" className="signup-input" />

                {/* 가입 버튼 */}
                <button className="signup-btn-primary">회원가입</button>
            </div>
        </div>
    );
}

export default JoinPage;
