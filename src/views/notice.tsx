import React, { useState } from "react";
import styled from "styled-components";
import {useAsync} from "react-async";
import axios from "axios";

const NoticeHeader = styled.header`
    color: Blue;
    font-size: 20px;
    padding-bottom: 20px;
    background: skyblue;
`
const DataSide = styled.table`    
    td {
        padding: 5px;
        border: 1px solid #FFF;    
    }
`

const loadData = async function(){
    const url = "http://www.moncoca.com/api/trans/chart/1/50";
    const data = await fetch(url)

    return data.json()
}

// const repackageTag = function(val: object){
//     return <tr>
//         <td>{val.rounds}</td>
//         <td>{val.time}</td>
//         <td>{val.open}</td>
//         <td>{val.high}</td>
//         <td>{val.Low}</td>
//     </tr>
// }

export default function Notice() {
    const { data } = useAsync( { promiseFn: loadData } )

    if (data){
        // @ts-ignore
        let tagData = data.map( ({close, high, low, open, rounds, time}: object)=>
            <tr key={rounds}>
                <td>{rounds}</td>
                <td>{time}</td>
                <td>{open}</td>
                <td>{high}</td>
                <td>{low}</td>
                <td>{close}</td>
            </tr>
        )

        return (
            <div>
                <NoticeHeader>공지사항 리스트 입니당</NoticeHeader>
                <DataSide>
                    <tbody>{tagData}</tbody>
                </DataSide>
            </div>

        )
    }
    return null
}