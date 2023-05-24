import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import BaiViet from './BaiViet';
import BanBe from './BanBe';
import GioiThieu from './GioiThieu';
import './css/FaceBook.css';
const FaceBook = () => {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <ul className='navBar'>
                    <li>
                        <Link to="/">Bai Viet</Link>
                    </li>
                    <li>
                        <Link to="/gioithieu">Gioi Thieu</Link>
                    </li>
                    <li>
                        <Link to="/banbe">Ban Be</Link>
                    </li>
                </ul>
                <Routes>
                    <Route path='' element={<BaiViet />} />
                </Routes>
                <Routes>
                    <Route path='gioithieu' element={<GioiThieu />} />
                </Routes>
                <Routes>
                    <Route path='banbe' element={<BanBe />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default FaceBook;