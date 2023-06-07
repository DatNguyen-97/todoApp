import { Link, Outlet } from "react-router-dom"
import './css/GioiThieu.css'

function GioiThieu() {
    return (
        <div className="content">
            <ul className="navBar_about">
                <li>
                    <Link to="/gioithieu/item1">Tong quan</Link>
                </li>
                <li>
                    <Link to="/gioithieu/item2">Cong viec va hoc van</Link>
                </li>
                <li>
                    <Link to="/gioithieu/item3">Noi tung song</Link>
                </li>
            </ul>
            <div className="detail">
                <Outlet />
            </div>

        </div>

    )
}

export default GioiThieu