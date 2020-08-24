import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/esm/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Rank from "../rank";

import Form from "react-bootstrap/Form";



interface IProps {
  newMovie: Function;
}
export default function AddMovie(props: IProps) {
  const { newMovie } = props;
  const numOfStarsArr = new Array(5).fill(true, 0);
  
  const [formDisplay, setformDisplay] = useState("none");
  
  const movie:any = {
    Title: "",
    Poster: "",
    rank: 0,
    imdbID: "",
    Year: "",
    Type: "",
  };
  const [movieAttr, setMovieAttr] = useState(movie);
  
  const style = {
    display: `${formDisplay}`,
  };
  
  function handleInputChange(e: any) {
    const { target } = e;
    const { name, value } = target;
    setMovieAttr({ ...movieAttr, [name]: value });
  }
  console.log(movieAttr)
  function handleSubmit(e: any) {
    if (movieAttr.Title === "" && movieAttr.Poster === "" && movieAttr.imdbID === "" && movieAttr.Type === "" &&movieAttr.Year === ""  ) {
      alert("Please Insert All Inputs")
      return
      
      
    }
    e.preventDefault();
    newMovie(movieAttr);
    setMovieAttr(movie);
  }
  function handleSelect(e: any) {
    setMovieAttr({ ...movieAttr, rank: Number(e) });
  }
  
 
  return (
    <div>
      <Button
        onClick={() => {
          
          setformDisplay("inline");
        }}
        onDoubleClick = {()=>{
          setformDisplay("none")
        }}
      >
        Show Add Movie
      </Button>
      <div id="formovie" style={{ backgroundColor: "lightgrey" }}>
        <Form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          style={style}
        >
          <Col>
            <Form.Label>Movie Name</Form.Label>
            <Form.Control
              onChange={handleInputChange}
              placeholder="insert name of the movie"
              name={"Title"}
            />
          </Col>
          <Col>
            <Form.Label>poster</Form.Label>
            <Form.Control
              onChange={handleInputChange}
              placeholder="insert the url photo"
              name={"Poster"}
            />
          </Col>
          <Col>
            <Form.Label>IMDb ID</Form.Label>
            <Form.Control
              onChange={handleInputChange}
              placeholder="insertthe imdb ID"
              name={"imdbID"}
            />
          </Col>
          <Col>
            <Form.Label>Type</Form.Label>
            <Form.Control
              onChange={handleInputChange}
              placeholder="insert the Type movie"
              name={"Type"}
            />
          </Col>

          <Col>
            <Form.Label>Movie release date</Form.Label>
            <Form.Control
              onChange={handleInputChange}
              placeholder="insert the movie release date"
              name={"Year"}
              
            />
          </Col>
          <Col>
            <Form.Label>Rate The Movie</Form.Label>
            <Dropdown className={"d-block w-100"}>
              <Dropdown.Toggle className={"w-100"} variant="secondary">
                Rate By Star
              </Dropdown.Toggle>
              <Dropdown.Menu className={"w-100"}>
                {numOfStarsArr.map((_, i) => {
                  return (
                    <Dropdown.Item
                      onSelect={(e: any) => {
                        handleSelect(e);
                      }}
                      value={i + 1}
                      eventKey={`${i + 1}`}
                    >
                      <Rank stars={i + 1} />
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Button type={"submit"} >
            Add movie
          </Button>

        </Form>
      </div>
    </div>
  );
}
