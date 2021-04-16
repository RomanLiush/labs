import React from 'react';

import './header.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={'header'}>
            <Link to='/laba1' className="header_item"><span>Laboratorna #1</span></Link>
            <Link to='/laba2' className="header_item"><span>Laboratorna #2</span></Link>
            <Link to='/laba3' className="header_item"><span>Laboratorna #3</span></Link>
            <Link to='/laba4' className="header_item"><span>Laboratorna #4</span></Link>
            <Link to='/laba5' className="header_item"><span>Laboratorna #5</span></Link>
            <Link to='/laba6' className="header_item"><span>Laboratorna #6</span></Link>
            <Link to='/laba7' className="header_item"><span>Laboratorna #7</span></Link>
            <Link to='/laba8' className="header_item"><span>Laboratorna #8</span></Link>
            <Link to='/laba9' className="header_item"><span>Laboratorna #9</span></Link>

            <Link to='/task1' className="header_item"><span>Task #1</span></Link>
            <Link to='/task2' className="header_item"><span>Task #2</span></Link>
            <Link to='/task3' className="header_item"><span>Task #3</span></Link>
        </div>
    )
}

export default Header
