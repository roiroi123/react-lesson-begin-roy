import React from 'react';
import './App.css';

// jsx element
const header = <h1> This is my first React element  </h1>

// create function element
function App() {

    return <div>
        <CustomHeader text={"Main Page"} />
        <Details />
        <div>
            <MainPage />
            <MainPage />
            <MainPage />
            <MainPage />
        </div>
        <CustomHeader text={"Reports Page"} />
    </div>
}
interface IPropsCustomeHeader {
    text: string
}
function CustomHeader({ text }: IPropsCustomeHeader) {
    return <h1> {text} </h1>
}


function Details() {
    return <span> Details component </span>
}

function MainPage() {
    return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGnMVTv0j0SVGZtdxSAh2aulvySNcgLHoqwg&usqp=CAU" alt="" />
}



// return <React.Fragment>
// <h1> aaa</h1>
// <h1> aaa</h1>
// </React.Fragment>


//also works
// function App2() {
//     return header
// }

export default App;
