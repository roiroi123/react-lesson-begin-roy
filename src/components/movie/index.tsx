import React from "react"
import "./index.css";
import css from "./style.module.css";

export interface IMovie {
    title: string
    poster: string
    year: string,
    type: string,
    rate: number
}
export default function Movie(props: IMovie) {
    return <div className={css.customColor}>
        <span> {props.title || "No Title"} </span>
    </div>
}  