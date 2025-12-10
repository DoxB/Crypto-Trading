import { Link } from "react-router-dom";
import "./Header.css";

function Header() {

    return (
        <header className="header">
            <div className="header-left">
                <Link to="/main" className="menu-item">메인페이지</Link>
            </div>

            <nav className="header-center">
                <Link to="/search" className="menu-button">종목 검색</Link>
                <Link to="/order" className="menu-button">주문</Link>
                <Link to="/transfer" className="menu-button">이체</Link>
            </nav>

            <div className="header-right">
                <Link to="/mypage" className="menu-button">마이페이지</Link>
                <Link to="/login" className="menu-button">로그인/로그아웃</Link>
            </div>
        </header>
    );
}

export default Header;