import React from "react";
import Styled from "styled-components";

const NavStyled = Styled.nav`
    > ul {
        display: flex;
        align-items: center;
        grid-gap: 10px;    
    }
`

const HaderNav = ()=> {
    return <NavStyled>
        <ul>
            <li><a href="/">메인</a></li>
            <li><a href="/Notice">공지사항</a></li>
            <li><a href="/Games">게임</a></li>
        </ul>
    </NavStyled>
}


export default HaderNav;