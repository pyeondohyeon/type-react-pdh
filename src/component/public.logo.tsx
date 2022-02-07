import React from "react";
import "../images/logo.svg"
import styled from "styled-components";

const LogoStyled = styled.a`
    display: flex;
    justify-contents: center;
    align-items: center;
`

const Logo = () => {
    return <>
        <LogoStyled href={"/"}>
            <img src="logo.svg" alt={"logo"} />
        </LogoStyled>
    </>
}

export default Logo