import React from "react"


const BtnGridItem = ({btnSrc})=>{
    const handleClick = ()=>{
        console.log("grid click")
    }
    return(
        <>
        <button type="button" onClick={handleClick}>
            <img src={btnSrc} className="btn-grid-btn"/>
        </button>
        
        </>
    )
}

export default BtnGridItem