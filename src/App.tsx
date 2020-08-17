import React, { useState, useEffect } from 'react';
import './App.css';

import ImageComponent, { IImageProps } from './components/image';
import CustomHeader from './components/header';

import { data } from "./data"
import MovieList from './components/movie-list';
import { IMovie } from './components/movie';
import Button from 'react-bootstrap/Button';
import axios from "axios";

// jsx element


console.log(data)
const images: Array<any> = [
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGnMVTv0j0SVGZtdxSAh2aulvySNcgLHoqwg&usqp=CAU", height: 200, width: 300 },
    { src: "https://media.wired.com/photos/5c6750d23e8add2cdb91724f/125:94/w_2393,h_1800,c_limit/shark-551025353.jpg", height: 300, width: 500 },
    { src: "", height: 200, width: 300 }
]

// create function element
function App() {
    const [movies, setMovies] = useState(data)
    // const [getter, setter] = useState(Initial State)

    useEffect(() => {
        async function getCountries() {
            const result = await axios.get("countries url");
            return result;
        }
        getCountries()
    }, [])

    function clearMovies() {
        setMovies([])
    }
    function addMovie() {
        setMovies([...movies, data[0]]) //example to show state - data[0] = from FORM
    }
    console.log("App rendered")
    return <div>
        <CustomHeader style={{ color: "green" }} text={"Movies"} />
        <Button onClick={clearMovies} > clear Movies</Button>

        <Button onClick={addMovie} > Add movie</Button>
        <MovieList noDataMessage="No Data for you firend" movies={moviesAdapter(movies)} />

    </div>
}


function moviesAdapter(movies: Array<any>): Array<IMovie> {
    return movies.map((movie: any) => {
        const { Title, Year, rank, Poster, imdbID, Type } = movie;
        return { baseAdditionalInfoUrl: "http://imdb.com/title", title: Title, year: Year, poster: Poster, type: Type, id: imdbID, rate: rank }
    })
}



interface IProps {
    images: Array<IImageProps>
}
function ImageList(props: IProps): any {
    const { images } = props
    return <div>
        {images.map((imgProps: any) => (<ImageComponent {...imgProps} url={imgProps.src} />))}
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
