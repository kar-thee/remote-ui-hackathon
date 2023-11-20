import React from "react";
import UpBtn from "../assets/upBtn.png"
import Ellipse from "../assets/ellipse.png"
import LeftBtn from "../assets/leftBtn.png"
import RightBtn from "../assets/rightBtn.png"
import DownBtn from "../assets/downBtn.png"

const RemoteUi = ()=>{
    return(
        <>
        <div className="btn-ui">
            {/* <div className="vertical-bar">

            </div>

            <div className="horizontal-bar">

            </div> */}
            <div className="row">
                <img className="btn" src={UpBtn}/>
            </div>

            <div className="btn-row row">
                <div>
                    <img className="btn" src={LeftBtn}/>
                </div>
                <div>
                    <img className="btn-ellipse" src={Ellipse}/>
                </div>
                <div>
                    <img className="btn" src={RightBtn}/>
                </div>
            </div>

            <div className="row">
                <img className="btn" src={DownBtn}/>
            </div>
        </div>


        {/* btn grid */}
        <div className="btn-grid">
            <div>
                <img src={RightBtn} className="btn-grid-btn"/>
                <img src={RightBtn} className="btn-grid-btn"/>
                <img src={RightBtn} className="btn-grid-btn"/>
                <img src={RightBtn} className="btn-grid-btn"/>
                <img src={RightBtn} className="btn-grid-btn"/>
                <img src={RightBtn} className="btn-grid-btn"/>
                <img src={RightBtn} className="btn-grid-btn"/>
                <img src={RightBtn} className="btn-grid-btn"/>
            </div>
        </div>
        </>
    )
}

export default RemoteUi