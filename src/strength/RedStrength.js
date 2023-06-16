import { useState,useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import "./Strength.css"
export const RedStrength =()=>{
    const {blueChoiceId} =useParams()
    const {redChoiceId}=useParams()
    const [redChoice,setRed]=useState([])
    const {blueStrengthId} = useParams()
    useEffect(
        ()=>{
             fetch(`http://localhost:8088/heros?typeId=1&teamId=${redChoiceId}`)
            .then(response => response.json())
            .then((teamArray)=>{
                setRed(teamArray)
            })
            
        },
        []
    )
    return<div className="selectScreen">
        <h1>Player Two Choose Your Strength Hero</h1>
        <article className="heroSelect">{
            redChoice.map(red=>{
                return<article><Link to={`/${blueChoiceId}/${redChoiceId}/${blueStrengthId}/${red.id}/blueSpeed`}>
                    <img className="heroPhoto" src={red.photo}></img></Link></article>
            })
            }</article>
    </div>
}