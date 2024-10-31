import React from "react";
import memedata from "../memedata";



export default function Meme() {
const [memeImg, setImg]=React.useState('')

function getmemeimg() {
    
    const memesarray=memedata.data.memes
    const randomnum=Math.floor(Math.random() * memesarray.length)
    const rand=memesarray[randomnum].url
    setImg(rand)
}


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
            <img src={memeImg} className="meme-img"/>
        </main>
    )
}