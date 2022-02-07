import React from "react";
import styled from "styled-components";

const StyledNotice = styled.header`
    color: Blue;
    font-size: 20px;
    padding-bottom: 20px;
    background: skyblue;
`


const Notice = () => {
    return <StyledNotice>공지사항 리스트 입니당</StyledNotice>
}

export default Notice