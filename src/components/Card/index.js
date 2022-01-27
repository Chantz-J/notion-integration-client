import React from "react";
import { CardLink, ArticleSec, StyledH1 } from "../Commons";

export default function Card({ header, para, time}){
    return (
        <CardLink>
            <ArticleSec>
                <StyledH1>{header}</StyledH1>
                <p>{para}</p>
                <time>{time}</time>
            </ArticleSec>
        </CardLink>
    )
}