import React from 'react'
import { useState } from 'react';
import './HandT.css'

let myVar, myId;
const HandT = () => {
    const [dropDownValue, setDropDownValue] = useState("");
    const chnageHandler = (e) => {
        myVar = e.target.value;
    }

    const clickButtonHandler = () => {
        if (!document.getElementById("deopDown").selectedIndex) {
            alert("Please select the value");
        } else {
            if (myVar === dropDownValue) {
                let myP = document.createElement(`p`);
                myP.innerHTML = dropDownValue;
                document.getElementById(myId).appendChild(myP);
            }
            else {
                let myP = document.createElement(`p`);
                myP.innerHTML = myVar;
                let div = document.createElement(`div`);
                myId = Math.random().toString();
                div.id = myId;
                document.getElementById("subContainerDiv").appendChild(div);
                document.getElementById(myId).appendChild(myP);
            }

            setDropDownValue(myVar);
            document.getElementById("deopDown").selectedIndex = 0;
        }
    }
    return (
        <div className="container">
            <select onChange={chnageHandler} id="deopDown">
                <option value="--select--">--select--</option>
                <option value="H">H</option>
                <option value="T">T</option>
            </select>
            <button onClick={clickButtonHandler} className="submit">Submit</button>
            <div id="subContainerDiv" className='subDiv'>
            </div>
        </div>
    );
}

export default HandT;
