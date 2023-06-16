import "./Selects.css"
import { useState,useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {Link } from "react-router-dom"
export const BlueChoice =()=>{
    const [marvel,setMarvel] =useState({})
    const [dc,setDc] =useState({})
    const [shonen,setShonen] =useState({})

    useEffect(
        ()=>{
            fetch(`http://localhost:8088/teams?id=1`)
            .then(response => response.json())
            .then((data)=>{
                const singleTeam =data[0]
                setDc(singleTeam)
            })
        },
        []
    )
    useEffect(
        ()=>{
            fetch(`http://localhost:8088/teams?id=2`)
            .then(response => response.json())
            .then((data)=>{
                const singleTeam =data[0]
                setMarvel(singleTeam)
            })
        },
        []
    )
    useEffect(
        ()=>{
            fetch(`http://localhost:8088/teams?id=3`)
            .then(response => response.json())
            .then((data)=>{
                const singleTeam =data[0]
                setShonen(singleTeam)
            })
        },
        []
    )
    return<>
    <div className="selectScreen">
        <h1>Player One Choose Your Team</h1>
        <article><Link to={`/${dc.id}/redChoice`}><img className="selectPhoto"src ={dc.photo}></img></Link></article>
        <article><Link to={`/${marvel.id}/redChoice`}><img className="selectPhoto"src ={marvel.photo}></img></Link></article>
        <article><Link to={`/${shonen.id}/redChoice`}><img className="selectPhoto"src ={shonen.photo}></img></Link></article>
    </div>
    </>
}
