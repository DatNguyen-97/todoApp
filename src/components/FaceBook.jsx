import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import BaiViet from './BaiViet';
import BanBe from './BanBe';
import Friend from './Friend';
import GioiThieu from './GioiThieu';
import Item1 from './Item1';
import Item2 from './Item2';
import Item3 from './Item3';
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
                    <Route path='/' element={<BaiViet />} />
                </Routes>
                <Routes>
                    <Route path='/gioithieu' element={<GioiThieu />}>
                        <Route path='item1' element={<Item1 />} />
                        <Route path='item2' element={<Item2 />} />
                        <Route path='item3' element={<Item3 />} />
                    </Route>
                </Routes>
                <Routes>
                    <Route path='/banbe' element ={<BanBe />} >
                        <Route path='friend/:id' element={<Friend />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default FaceBook;