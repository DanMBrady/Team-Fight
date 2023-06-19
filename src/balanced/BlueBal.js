import { useState,useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export const BlueBal =()=>{
    const {blueChoiceId} =useParams()
    const {redChoiceId}=useParams()
    const [blueChoice,setBlue]=useState([])
    const {blueStrengthId}=useParams()
    const {redStrengthId}=useParams()
    const {blueSpeedId}=useParams()
    const {redSpeedId}=useParams()
    const {blueIntId}=useParams()
    const {redIntId}=useParams()
    useEffect(
        ()=>{
             fetch(`http://localhost:8088/heros?typeId=4&teamId=${blueChoiceId}`)
            .then(response => response.json())
            .then((teamArray)=>{
                setBlue(teamArray)
            })
            
        },
        []
    )
    return <div className="selectScreen">
        <h1>Player One Choose Your Balanced Hero</h1>
        <article className="heroSelect">{
            blueChoice.map(blue=>{
                return<article><Link to={`/${blueChoiceId}/${redChoiceId}/${blueStrengthId}/${redStrengthId}/${blueSpeedId}/${redSpeedId}/${blueIntId}/${redIntId}/${blue.id}/redBalanced`}>
                 <img className="heroPhoto" 
                src={blue.photo}></img></Link></article>
            })
            }</article>
    </div>
}