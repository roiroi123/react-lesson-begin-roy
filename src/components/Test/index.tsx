import React, {useState} from 'react'

export default function Test(props:any) {
    const [inpValue,valSet] = useState("")
    const [h1Value, h1Set] = useState("")
    const [elemnt, elemntSet] = useState("")
    
    function setter (e:any) {
        const {target} = e
        const {value} = target
         valSet(value)
    }

    function returnH1() {
    return <h1>{inpValue}</h1>
    }
    return <div>
       { returnH1()}
    <h1>{h1Value}</h1>
        <input type="text" onChange ={(e)=>setter(e)}/>
        <button onClick = {()=>h1Set(inpValue)}>press</button>
        <button onClick = {()=>returnH1()}>press2</button>
    </div>
    
}