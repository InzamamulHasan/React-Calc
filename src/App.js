import React,{useState} from "react";
import "./App.css"
;
let App=()=>{
    let [result,setResult]=useState("");
    let [num1,setNum1]=useState("");
    let [num2,setNum2]=useState("");
    let [succ,setSucc]=useState("");
    let [colors,setColors]=useState("");
    function add(){
        if(isNaN(num1)){
            return;
        }else if(isNaN(num2)){
            return;
        }
        if(num1===""){
            return;
        }else if(num2===""){
            return;
        }
        setResult(`Result = ${Number(num1)+Number(num2)}`);
        setSucc("Succes : Your result is shown abobe")
        setColors("green");
    }
    function sub(){
        if(isNaN(num1)){
            return;
        }else if(isNaN(num2)){
            return;
        }
        if(num1===""){
            return;
        }else if(num2===""){
            return;
        }
        setResult(`Result = ${Number(num1)-Number(num2)}`);
        setSucc("Succes : Your result is shown abobe")
        setColors("green");
    }
    function mul(){
        if(isNaN(num1)){
            return;
        }else if(isNaN(num2)){
            return;
        }
        if(num1===""){
            return;
        }else if(num2===""){
            return;
        }
        setResult(`Result = ${Number(num1)*Number(num2)}`);
        setSucc("Succes : Your result is shown abobe")
        setColors("green");
    }
    function divide(){
        if(isNaN(num1)){
            return;
        }else if(isNaN(num2)){
            return;
        }
        if(num1===""){
            return;
        }else if(num2===""){
            return;
        }
        setResult(`Result = ${Number(num1)/Number(num2)}`);
        setSucc("Succes : Your result is shown above")
        setColors("green");
    }
    function valid(){
        
        if(num1===""){
            setColors("red");
            setSucc("Error : Num1 cannot be empty")
            return;
        }else if(num2===""){
            setColors("red");
            setSucc("Error : Num2 cannot be empty")
            return;
        }
        if(isNaN(num1)){
            setColors("red");
            setSucc("Enter number");
            return;
        }else if(isNaN(num2)){
            setColors("red");
            setSucc("Enter number");
            return;
        }
    }
    return(
      <div className="container">
        <div className="calc">
            <div className="heading"><h1>React Calculator</h1></div>
            <div>
                <input type="text" placeholder="Num1" onChange={(e)=>setNum1(e.target.value)}/>
            </div>
            <div>
            <input type="text" placeholder="Num2" onChange={(e)=>setNum2(e.target.value)}/>
            </div>
            <div class="operator">
                <button onClick={()=>{
                    valid();
                    add();

                }}>+</button>
                <button
                onClick={()=>{
                    valid();
                    sub()}}
                    >-</button>
                <button className="multiple"
                 onClick={()=>{
                    valid();
                    mul()}}
                >*</button>
                <button
                 onClick={()=>{
                    valid();
                    divide()}}
                >/</button>
            </div>
            <div className="res">{result}</div>
            <div style={{color:colors}}>{succ}</div>
        </div>
        </div>
    )
    }
    export default App;