import {Route,Routes} from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./ApplicationViews.css"
import { BlueChoice } from "../selects/BlueChoice"
import { RedChoice } from "../selects/RedChoice"
import { BlueStrength } from "../strength/BlueStrength"
import { RedStrength } from "../strength/RedStrength"
import { BlueSpeed } from "../speed/BlueSpeed"
import { RedSpeed } from "../speed/RedSpeed"
import { BlueInt } from "../intelligence/BlueInt"
import { RedInt } from "../intelligence/RedInt"
import { BlueBal } from "../balanced/BlueBal"
import { RedBal } from "../balanced/RedBal"
import { Winner } from "../winner/Winner"
export const ApplicationViews =()=>{
const navigate =useNavigate()


    return (
        <Routes>
            <Route path ="/" element ={
                <>
                <div className ="startScreen">
                <button className ="startButton"onClick ={()=>navigate("/blueChoice")}>Start</button>
                </div>
                 </>
            }>

            </Route>
            <Route path ="blueChoice" element ={<BlueChoice/>} />
            <Route path =":blueChoiceId/redChoice" element={<RedChoice/>} />
            <Route path =":blueChoiceId/:redChoiceId/blueStrength" element={<BlueStrength/>} />
            <Route path =":blueChoiceId/:redChoiceId/:blueStrengthId/redStrength" element={<RedStrength/>} />
            <Route path =":blueChoiceId/:redChoiceId/:blueStrengthId/:redStrengthId/blueSpeed" 
            element={<BlueSpeed/>} />
             <Route path =":blueChoiceId/:redChoiceId/:blueStrengthId/:redStrengthId/:blueSpeedId/redSpeed" 
            element={<RedSpeed/>} />
             <Route path =":blueChoiceId/:redChoiceId/:blueStrengthId/:redStrengthId/:blueSpeedId/:redSpeedId/blueIntelligence" 
            element={<BlueInt/>} />
             <Route path =":blueChoiceId/:redChoiceId/:blueStrengthId/:redStrengthId/:blueSpeedId/:redSpeedId/:blueIntId/redIntelligence" 
            element={<RedInt/>} />
             <Route path =":blueChoiceId/:redChoiceId/:blueStrengthId/:redStrengthId/:blueSpeedId/:redSpeedId/:blueIntId/:redIntId/blueBalanced" 
            element={<BlueBal/>} />
             <Route path =":blueChoiceId/:redChoiceId/:blueStrengthId/:redStrengthId/:blueSpeedId/:redSpeedId/:blueIntId/:redIntId/:blueBalId/redBalanced" 
            element={<RedBal/>} />
             <Route path =":blueStrengthId/:redStrengthId/:blueSpeedId/:redSpeedId/:blueIntId/:redIntId/:blueBalId/:redBalId/winner" 
            element={<Winner/>} />
        </Routes>
    )
}