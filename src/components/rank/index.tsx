import React from "react"
import { Star } from 'react-bootstrap-icons';


interface IProps {
    stars: number
}

export default function Rank(props: IProps) {

    const numberOfStars = new Array(props.stars).fill(true, 0)
    return <div>
        {numberOfStars.map(() => <Star />)}
    </div>
} 