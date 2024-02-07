import React from "react";
import {dummy} from '../movieDummy'
import Movie from "../components/Movie";

export default function Movies() {
    return (
        <div>
            <div className="app-container">
                {dummy.results.map((item) => {
                    return (
                        <Movie 
                        title = {item.title} 
                        poster_path = {item.poster_path}
                        vote_average = {item.vote_average + '점'}
                        />
                    )
                })}
            </div>
        </div>
    )
}