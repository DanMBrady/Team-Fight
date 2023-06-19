import { useState,useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
export const RedInt=()=>{
    const {blueChoiceId} =useParams()
    const {redChoiceId}=useParams()
    const [redChoice,setRed]=useState([])
    const {blueStrengthId}=useParams()
    const {redStrengthId}=useParams()
    const {blueSpeedId}=useParams()
    const {redSpeedId}=useParams()
    const {blueIntId}=useParams()
    useEffect(
        ()=>{
             fetch(`http://localhost:8088/heros?typeId=3&teamId=${redChoiceId}`)
            .then(response => response.json())
            .then((teamArray)=>{
                setRed(teamArray)
            })
            
        },
        []
    )
    return<div className="selectScreen">
        <h1>Player Two Choose Your Intelligence Hero</h1>
        <article className="heroSelect">{
            redChoice.map(red=>{
                return<article><Link to={`/${blueChoiceId}/${redChoiceId}/${blueStrengthId}/${redStrengthId}/${blueSpeedId}/${redSpeedId}/${blueIntId}/${red.id}/blueBalanced`}>
                 <img className="heroPhoto" 
                src={red.photo}></img></Link></article>
            })
            }</article>
    </div>
}