import React from "react";


interface IPropsCustomeHeader {
    text: string
}

export default function CustomHeader({ text }: IPropsCustomeHeader) {
    return <h1> {text} </h1>
}