import { useState,useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import "./Strength.css"
export const BlueStrength =()=>{
    const {blueChoiceId} =useParams()
    const {redChoiceId}=useParams()
    const [blueChoice,setBlue]=useState([])
    useEffect(
        ()=>{
             fetch(`http://localhost:8088/heros?typeId=1&teamId=${blueChoiceId}`)
            .then(response => response.json())
            .then((teamArray)=>{
                setBlue(teamArray)
            })
            
        },
        []
    )
    return<div className="selectScreen">
      
        <h1>Player One Choose Your Strength Hero</h1>
        <article className="heroSelect">{
            blueChoice.map(blue=>{
                return<article><Link to={`/${blueChoiceId}/${redChoiceId}/${blue.id}/redStrength`}><img className="heroPhoto" src={blue.photo}></img></Link></article>
            })
            }</article>
    </div>
}