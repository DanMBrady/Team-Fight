import { useState,useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export const BlueSpeed =()=>{
    const {blueChoiceId} =useParams()
    const {redChoiceId}=useParams()
    const [blueChoice,setBlue]=useState([])
    const {blueStrengthId}=useParams()
    const {redStrengthId}=useParams()
    useEffect(
        ()=>{
             fetch(`http://localhost:8088/heros?typeId=2&teamId=${blueChoiceId}`)
            .then(response => response.json())
            .then((teamArray)=>{
                setBlue(teamArray)
            })
            
        },
        []
    )
    return<div className="selectScreen">
        <h1>Player One Choose Your Speed Hero</h1>
        <article className="heroSelect">{
            blueChoice.map(blue=>{
                return<article><Link to={`/${blueChoiceId}/${redChoiceId}/${blueStrengthId}/${redStrengthId}/${blue.id}/redSpeed`}>
                 <img className="heroPhoto" 
                src={blue.photo}></img></Link></article>
            })
            }</article>
    </div>
}
