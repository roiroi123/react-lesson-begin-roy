import React,{ useState }  from "react";
import Button from 'react-bootstrap/Button';

interface IProps{
    style?: any
}


export default function Configuration({ style = { display: "none" } }: IProps){
    
    
    const [BGColor, setBGColor] = useState("white")
    return <div style={style}>
        <input onChange={(e:any)=> setBGColor(e.target.value)} ></input>
        <Button onClick={()=>{changeBGC(BGColor);
        }}>Change BGC (insert valid color)</Button>
        </div>
}
function changeBGC(Bgc:string) {
    const root:any = document.getElementById("root")
    
    console.log(root);
    root.style.backgroundColor = Bgc
    
}