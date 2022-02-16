import React, {useState} from "react";
import CounterBtn from "./viewComponent/Add_counter";


export default function Games() {
    const [count, setCount] = useState(0);

    document.onkeydown = function(e){
        if(e.key == 'ArrowUp') {
            calcAction_sum(1);
        }
        else if (e.key == 'ArrowDown'){
            calcAction_sub(1);
        }
        else if (e.key == 'ArrowLeft'){
            calcAction_sub(10);
        }
        else if (e.key == 'ArrowRight'){
            calcAction_sum(10);
        }
    }

    const calcAction_sum = (num: number)=> {
        if(count > 999){
            setCount(1000);
        }else{
            setCount(count + num);
        }
    }

    const calcAction_sub = (num: number)=> {
        if(count <= 0){
            setCount(0);
        }else{
            setCount(count - num);
        }
    }
    return <div>
        <div>
            <h2>pressed Arrow key Or click button</h2>
            <div className="count">
                <h3>Count: <span>{count}</span></h3>
            </div>
            <div className="buttons">
                <CounterBtn title={"-"} action={calcAction_sub} />
                <CounterBtn title={"+"} action={calcAction_sum} />
                {/*<Button title={"*"} action={calcAction_mul} />*/}
                {/*<Button title={"/"} action={calcAction_div} />*/}
            </div>
            <div>
                <progress value={count} max={"1000"} ></progress>
            </div>
        </div>
    </div>
}