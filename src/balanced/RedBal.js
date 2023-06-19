import { useState,useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
export const RedBal =()=>{
    const {blueChoiceId} =useParams()
    const {redChoiceId}=useParams()
    const [redChoice,setRed]=useState([])
    const {blueStrengthId}=useParams()
    const {redStrengthId}=useParams()
    const {blueSpeedId}=useParams()
    const {redSpeedId}=useParams()
    const {blueIntId}=useParams()
    const {redIntId}=useParams()
    const {blueBalId}=useParams()
    useEffect(
        ()=>{
             fetch(`http://localhost:8088/heros?typeId=4&teamId=${redChoiceId}`)
            .then(response => response.json())
            .then((teamArray)=>{
                setRed(teamArray)
            })
            
        },
        []
    )
    return <div className="selectScreen">
        <h1>Player Two Choose Your Balanced Hero</h1>
        <article className="heroSelect">{
            redChoice.map(red=>{
                return<article><Link to={`/${blueStrengthId}/${redStrengthId}/${blueSpeedId}/${redSpeedId}/${blueIntId}/${redIntId}/${blueBalId}/${red.id}/winner`}>
                 <img className="heroPhoto" 
                src={red.photo}></img></Link></article>
            })
            }</article>
    </div>
}