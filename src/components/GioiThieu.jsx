import { Link, Route, Routes } from "react-router-dom"
import Item1 from "./Item1"
import Item2 from "./Item2"
import Item3 from "./Item3"
import './css/GioiThieu.css'


function GioiThieu() {
    return (
        <div className="content">
            <ul className="navBar_about">
                <li>
                    <Link to="/item1">Tong quan</Link>
                </li>
                <li>
                    <Link to="/item2">Cong viec va hoc van</Link>
                </li>
                <li>
                    <Link to="/item3">Noi tung song</Link>
                </li>
            </ul>
            <div className="detail">
                <Routes>
                    <Route path='item1' element={<Item1 />} />
                </Routes>
                <Routes>
                    <Route path='item2' element={<Item2 />} />
                </Routes>
                <Routes>
                    <Route path='item3' element={<Item3 />} />
                </Routes>
            </div>
            </div>

    )
}

export default GioiThieu