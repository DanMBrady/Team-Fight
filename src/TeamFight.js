import {Route,Routes} from "react-router-dom"
import { Start } from "./start/Start"
import './App.css';
import { ApplicationViews } from "./views/ApplicationViews";

export const TeamFight=() =>{
  return <Routes>
    

    <Route path="*" element={
      <>
      
      <ApplicationViews/>
      </>
    } />
  </Routes>
}


