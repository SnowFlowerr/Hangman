import React, { useEffect, useState } from 'react'
import styles from "./Home.module.css"
import Keyboard from './keyboard/Keyboard'
import axios from "axios"


export default function Home() {
    const [word, setWord]=useState("")
    const [guess, setGuess]=useState("")
    const [wrong, setWrong]=useState(0)
    const [win, setWin]=useState(false)
    const [lose, setLose]=useState(false)

    useEffect(()=>{
        if(word){
            let right=0;
                    for(let i=0; i<guess.length; i++){
                    if(word.toLowerCase().includes(guess.charAt(i))){
                        right++;
                    }
            }
            let wrong=guess.length-right;
            setWrong(wrong)
            if(wrong>=6){
                setLose(true)
            }
            else if(right===word.length){
                setWin(true)
            }
        }
        else{
            getWords()
        }
    },[guess])
    async function getWords() {
        try {
            const w = await axios.get('https://random-word-api.vercel.app/api?words=1&length=5')
            setWord(w.data[0])
        }
        catch (err) {
            console.log("err")
        }
    }
    function handleRestart() {
        window.location.reload()
    }

    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <div className={styles.hangman}>
                    <div className={styles.bar}>
                    </div>
                    <div className={styles.main}>
                        <div className={styles.rod}></div>
                        <div className={styles.body}>
                            <div className={styles.rope}></div>
                            <div className={styles.head} style={wrong>=1 ? {opacity:"1"}:{}}></div>
                            <div className={styles.torso}>
                                <div style={wrong>=4 ? {opacity:"1"}:{}}></div>
                                <div style={wrong>=2 ? {opacity:"1"}:{}}></div>
                                <div style={wrong>=3 ? {opacity:"1"}:{}}></div>
                            </div>
                            <div className={styles.legs}>
                                <div style={wrong>=6 ? {opacity:"1"}:{}}></div>
                                <div style={wrong>=5 ? {opacity:"1"}:{}}></div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.bottom}>
                    </div>
                </div>
                <div className={styles.blanks}>
                    {
                        word.split("").map((letter, ind)=>
                            <div className={styles.blank} key={ind}>{guess.includes(letter)&& letter}</div>
                        )
                    }
                </div>
                <div className={styles.keyboard}>
                    <Keyboard setGuess={setGuess} guess={guess} word={word}></Keyboard>
                </div>
                {win || lose && <div className={styles.result}>
                    <>
                    {win && "You Win"}{lose && <div>{word}<br />You Lose</div>} <br />
                    <button className={styles.restart} onClick={handleRestart}>Restart</button>
                    </>
                </div>}
            </div>
        </div>
    )
}
