import React from "react";
import memedata from "../memedata";


let url
function getmemeimg() {
    const memesarray=memedata.data.memes
    const randomnum=Math.floor(Math.random() * memesarray.length)
    url=memesarray[randomnum].url
    console.log(url)
}

export default function Meme() {
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form-inp"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form-inp"
                />
                <button 
                    className="form-btn"
                    onClick={getmemeimg}
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}