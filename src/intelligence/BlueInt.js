import { useState,useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
export const BlueInt =()=>{
    const {blueChoiceId} =useParams()
    const {redChoiceId}=useParams()
    const [blueChoice,setBlue]=useState([])
    const {blueStrengthId}=useParams()
    const {redStrengthId}=useParams()
    const {blueSpeedId}=useParams()
    const {redSpeedId}=useParams()
    useEffect(
        ()=>{
             fetch(`http://localhost:8088/heros?typeId=3&teamId=${blueChoiceId}`)
            .then(response => response.json())
            .then((teamArray)=>{
                setBlue(teamArray)
            })
            
        },
        []
    )
    return <div className="selectScreen">
        <h1>Player One Choose Your Intelligence Hero</h1>
        <article className="heroSelect">{
            blueChoice.map(blue=>{
                return<article><Link to={`/${blueChoiceId}/${redChoiceId}/${blueStrengthId}/${redStrengthId}/${blueSpeedId}/${redSpeedId}/${blue.id}/redIntelligence`}>
                 <img className="heroPhoto" 
                src={blue.photo}></img></Link></article>
            })
            }</article>
    </div>
}