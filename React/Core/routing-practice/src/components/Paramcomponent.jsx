import React from 'react'
import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom';

const Paramcomponent  = (props) => {
    const {word,color,bgCol} = useParams();
    console.log('word:', word, 'color:', color, 'bgCol:', bgCol);

    return (
      <div>
           {
                //This method returns a boolean based on whether the argument is a number
                isNaN(word)?  //If word param isn't a number:
                <div style={
                    //If color param exists, then style this element with the values passed in
                    color 
                    ? {color: color, backgroundColor: bgCol}
                    :null
                }>
                    <h1>This is a word: {word}</h1>
                </div>
                : //If the word param IS a number:
                <h1>
                    This is a number: {word}
                </h1>
            }
        <Link to={"/home"}>Go Home</Link> 
      </div>
    );
  }

export default Paramcomponent