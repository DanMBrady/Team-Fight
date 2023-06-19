import { useState,useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import "./Winner.css"
export const Winner =()=>{
    const {blueStrengthId}=useParams()
    const {redStrengthId}=useParams()
    const {blueSpeedId}=useParams()
    const {redSpeedId}=useParams()
    const {blueIntId}=useParams()
    const {redIntId}=useParams()
    const {blueBalId}=useParams()
    const {redBalId}=useParams()
    const [blueTeam,setBlue]=useState([])
    const [redTeam,setRed]=useState([])
    const navigate=useNavigate()
    useEffect(
        ()=>{
             fetch(`http://localhost:8088/heros?id=${blueStrengthId}&id=${blueSpeedId}&id=${blueIntId}&id=${blueBalId}`)
            .then(response => response.json())
            .then((teamArray)=>{
                setBlue(teamArray)
            })
            
        },
        []
    )
    
    useEffect(
        ()=>{
             fetch(`http://localhost:8088/heros?id=${redStrengthId}&id=${redSpeedId}&id=${redIntId}&id=${redBalId}`)
            .then(response => response.json())
            .then((teamArray)=>{
                setRed(teamArray)
            })
            
        },
        []
    )
        let blueScore=0
        let redScore=0
        for(const blue of blueTeam){
            blueScore += blue.strength
            
        }

        for (const red of redTeam){
            redScore += red.strength
          
        }
    return <div className="selectScreen">
        
        {
            (blueScore > redScore) ? <div><div className="winnerCenter"><h1>Player One's Team Won</h1></div>
            <article className="winnerSelect">{
            blueTeam.map(blue=>{
                return<article key={blue.id}>
                   <section><img className="winnerPhoto" src={blue.photo}></img></section>
                </article>
            })
            } 
            </article>
            <article className="loserSelect">{
            redTeam.map(red=>{
                return<article key={red.id}>
                   <section><img className="loserPhoto" src={red.photo}></img></section>
                </article>
            })
            }
            </article>
            </div>
             : ""
        }
        {
            (redScore > blueScore) ? <div>
               <div className="winnerCenter"> <h1>Player Two's Team Won</h1></div>
                <article className="winnerSelect">{
            redTeam.map(red=>{
                return<article key={red.id}>
                   <section><img className="winnerPhoto" src={red.photo}></img></section>
                </article>
            })
            }
            </article>
            <article className="loserSelect">{
            blueTeam.map(blue=>{
                return<article key={blue.id}>
                   <section><img className="loserPhoto" src={blue.photo}></img></section>
                </article>
            })
            } 
            </article>
            </div>
         : ""
        }
        {
            (blueScore === redScore) ? <div><div className="winnerCenter"><h1>You Guys Tied</h1></div>
             <article className="winnerSelect">{
            blueTeam.map(blue=>{
                return<article key={blue.id}>
                   <section><img className="loserPhoto" src={blue.photo}></img></section>
                </article>
            })
            } 
            </article>
            <article className="winnerSelect">{
            redTeam.map(red=>{
                return<article key={red.id}>
                   <section><img className="loserPhoto" src={red.photo}></img></section>
                </article>
            })
            }
            </article>
            </div> : ""
        }  
        <div className="buttonContainer"><button className ="playAgainButton"onClick ={()=>navigate("/")}>Home</button>
        <button className ="playAgainButton"onClick ={()=>navigate("/blueChoice")}>Play Again</button></div>
    </div>
}