import { Link } from 'react-router-dom';
const BanBe = () => {
    const friends = [
        {
            id : 1,
            name : 'Dat',
            age : 26,
        },
        {
            id : 2,
            name : 'Thanh',
            age : 21,
        },
        {
            id : 3,
            name : 'Tu',
            age : 23,
        },
    ]
    console.log("data",friends)
    return (
        <div className="content_banbe">
                <ul className="navBar_banbe">
                    <li>
                        <Link to="/banbe/friend/123">dat</Link>
                    </li>
                    <li>
                        <Link to="/banbe/friend/456">Hien</Link>
                    </li>
                    <li>
                        <Link to="/banbe/friend/789">Thu</Link>
                    </li>
                </ul>
                {/* <Routes>
                    <Route path='/banbe/friend/123' element={<Friend />} />
                </Routes> */}

        </div>
    )
}

export default BanBe