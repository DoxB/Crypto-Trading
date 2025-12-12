import './LoginPage.css'
import { Link } from'react-router-dom';

function LoginPage() {

    return (
        <div className="login-container">
            <h2 className="login-title">로그인</h2>

            <div className="login-form">
                <label className="login-label">이메일</label>
                <input type="text" className="login-input" />

                <label className="login-label">비밀번호</label>
                <input type="password" className="login-input" />

                <button className="login-btn">로그인</button>
                <Link to="/join"><button className="signup-btn">회원가입</button></Link>

            </div>
        </div>
    );
}

export default LoginPage;