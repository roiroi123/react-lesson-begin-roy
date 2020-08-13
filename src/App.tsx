import React from 'react';
import './App.css';

import ImageComponent from './components/image';
import CustomHeader from './components/header';

// jsx element
const header = <h1> This is my first React element  </h1>

// create function element
function App() {

    return <div>
        <CustomHeader text={"Main Page"} />
        <Details />
        <div>
            <ImageComponent url={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGnMVTv0j0SVGZtdxSAh2aulvySNcgLHoqwg&usqp=CAU"} width={600} height={400} />
            <ImageComponent url={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGnMVTv0j0SVGZtdxSAh2aulvySNcgLHoqwg&usqp=CAU"} width={600} height={400} />
            <ImageComponent url={""} width={600} height={400} />
        </div>
        <CustomHeader text={"Reports Page"} />
    </div>
}



function Details() {
    return <span> Details component </span>
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
