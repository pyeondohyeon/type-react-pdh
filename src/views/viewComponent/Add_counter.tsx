import React from "react";
import styled from "styled-components";
import '/src/refer/css/color.scss'

const CounterStyled = styled.button`
    width: 90px;
    height: 30px;
    background: skyblue;
    cursor: pointer;
    
    &:hover {
        background-color: pink;
    }
`

export default function CounterBtn(props: any) {
    let { action, title, color } = props;
    return <CounterStyled
                className={'font-red'}
                onClick={action}
                color={color}
            >{title}</CounterStyled>;
}