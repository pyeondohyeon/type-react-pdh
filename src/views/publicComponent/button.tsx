import React, { Component } from 'react';
import styled from "styled-components";

const BtnStyled = styled.a`
    @include flex-set(center, center);
`

const Btn = (props: any)=> {
    let { line, color, url, txt } = props;
    let btnClassname = "btn btn-" + (line ? line + "-" : "") + color;
    if(!txt){
        txt = "버튼"
    }

    return <BtnStyled href={url} className={btnClassname}>{txt}</BtnStyled>;
};

export default Btn;