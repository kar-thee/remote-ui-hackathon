import React, { useEffect, useState } from "react";
import UpBtn from "../assets/upBtn.png"
import Ellipse from "../assets/ellipse.png"
import LeftBtn from "../assets/leftBtn.png"
import RightBtn from "../assets/rightBtn.png"
import DownBtn from "../assets/downBtn.png"

import Brightness from "../assets/Brightness.png"
import Forward from "../assets/forward.png"
import FullScreen from "../assets/fullscreen.png"
import Refresh from "../assets/Refresh.png"
import Reverse from "../assets/reverse.png"
import Sound from "../assets/Sound.png"
import Subtitle from "../assets/Subtitle.png"
import BtnGridItem from "./BtnGridItem";

import io from 'socket.io-client';


const RemoteUi = ()=>{

    let btnGridItems = [RightBtn,Reverse,Forward,Refresh,Subtitle,Sound,Brightness,FullScreen]

    const [state,setState] = useState()
    const [inputText,setInputText] = useState("")

    useEffect(() => {
        var wsUri = "ws://18.234.171.50:3000";
        var websocket;
        websocket = io(wsUri, {
        transports: ["websocket"],
        });
        setState(websocket)
        websocket.on("connect", () => {
        console.log("CONNECTED");
        });
        websocket.on("connect_error", (error) => {
        console.log('ERROR: ' + error);
        });
        websocket.on("disconnect", (reason) => {
        console.log("Websocket DISCONNECTED" + reason);
        });
      }, []);


    const emitChanges = (value)=>{
        console.log("emitChanges")
        //37, 38, 39, and 40
        //left,up,right,down
        let evObj = {
            up: "38",
            down:"40",
            left:"37",
            right:"39",
            enter:"13"
        }
        // let textValue = {
        //     up: "↑",
        //     down:"↓",
        //     left:"←",
        //     right:"→"
        // }
        
        setTimeout(function () {
            state && state.emit("send_message", { 'code': evObj[value], 'keytext': "" });
            let x = { 'code': evObj[value], 'keytext': ""};
            console.log(x);
          }, 10);
    }

    const handleTextChange = (ev)=>{
        setInputText(ev.target.value)
            state && state.emit("send_message", { 'code': ev.keyCode, 'keytext': inputText });
            let x = { 'code': ev.keyCode, 'keytext': inputText};
            console.log(x);
    }

    return(
        <>

        <div>
            <input className="searchInput" type="text" id="textInput" onKeyDown={(ev)=>handleTextChange(ev)} placeholder="Type here" style={{width:"80%",height: "42px",fontSize: "18px"}}/>
        </div>

        {/* remote keys */}
        <div className="btn-ui">
            <div className="row btn-up">
            <button type="button" onClick={()=>emitChanges("up")}>
                <img className="btn" src={UpBtn}/>
            </button>
            </div>

            <div className="btn-row row">
                <div className="btn-left">
                    <button type="button" onClick={()=>emitChanges("left")}>
                        <img className="btn" src={LeftBtn}/>
                    </button>
                </div>
                <div>
                    <button type="button" onClick={()=>emitChanges("enter")}>
                        <img className="btn-ellipse" src={Ellipse}/>
                        {/* <div className="btn-ellipse">
                        <div className="ok-text">OK</div>
                        </div> */}
                    </button>
                </div>
                <div className="btn-right">
                    <button type="button" onClick={()=>emitChanges("right")}>
                        <img className="btn" src={RightBtn}/>
                    </button>
                    
                </div>
            </div>

            <div className="row">
                    <button type="button" onClick={()=>emitChanges("down")}>
                        <img className="btn btn-down" src={DownBtn}/>
                    </button>
               
            </div>
        </div>


        {/* btn grid */}
        <div className="btn-grid">
            <div className="btn-grid-container">
            {
                btnGridItems.map((item,index)=>{
                       return <BtnGridItem btnSrc={item} key={index}/>
                })
            }
                
                {/* <img src={RightBtn} className="btn-grid-btn"/>
                <img src={Reverse} className="btn-grid-btn"/>
                <img src={Forward} className="btn-grid-btn"/>
                <img src={Refresh} className="btn-grid-btn"/>
                <img src={Subtitle} className="btn-grid-btn"/>
                <img src={Sound} className="btn-grid-btn"/>
                <img src={Brightness} className="btn-grid-btn"/>
                <img src={FullScreen} className="btn-grid-btn"/> */}
            </div>
        </div>
        </>
    )
}

export default RemoteUi