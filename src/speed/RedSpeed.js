import { useState,useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export const RedSpeed =()=>{
    const {blueChoiceId} =useParams()
    const {redChoiceId}=useParams()
    const [redChoice,setRed]=useState([])
    const {blueStrengthId}=useParams()
    const {redStrengthId}=useParams()
    const {blueSpeedId}=useParams()
    useEffect(
        ()=>{
             fetch(`http://localhost:8088/heros?typeId=2&teamId=${redChoiceId}`)
            .then(response => response.json())
            .then((teamArray)=>{
                setRed(teamArray)
            })
            
        },
        []
    )
    return<div className="selectScreen">
        <h1>Player Two Choose Your Speed Hero</h1>
        <article className="heroSelect">{
            redChoice.map(red=>{
                return<article><Link to={`/${blueChoiceId}/${redChoiceId}/${blueStrengthId}/${redStrengthId}/${blueSpeedId}/${red.id}/blueIntelligence`}>
                 <img className="heroPhoto" 
                src={red.photo}></img></Link></article>
            })
            }</article>
    </div>
}