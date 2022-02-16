import React, { useState } from "react";
import Btn from "./publicComponent/button";


export default function Main() {
    return (
        <>
            <div>
                <Btn color={'red'} txt={"홈"} url={"/"}/>
                <Btn color={'blue'} txt={"공지사항"} url={"/Notice"}/>
                <Btn color={'green'} txt={"게임"} url={"/Games"}/>
            </div>
            <div>
                <Btn line={"outline"} color={'red'} />
                <Btn line={"outline"} color={'blue'} />
                <Btn line={"outline"} color={'green'} />
            </div>
        </>
    );
}