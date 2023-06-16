import { useState,useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
export const RedChoice=()=>{
    const {blueChoiceId} =useParams()
    const [choices,setChoices] =useState([])
    useEffect(
        ()=>{
             fetch(`http://localhost:8088/teams?id_ne=${blueChoiceId}`)
            .then(response => response.json())
            .then((teamArray)=>{
                setChoices(teamArray)
            })
            
        },
        []
    )
    return<div className="selectScreen">
        <h1>Player Two Choose Your Team</h1>
        <article className="redTeamTop">{
            choices.map(choice=>{
                return<article><Link to={`/${blueChoiceId}/${choice.id}/blueStrength`}><img className="selectPhoto"src ={choice.photo}></img></Link></article>
            })
            }</article>
    </div>
}