import React from 'react'
import styles from "./Keyboard.module.css"
import Keys from './Keys'

export default function Keyboard({setGuess,guess,word}) {
    const letterA = "QWERTYUIOP"
    const letterB = "ASDFGHJKL"
    const letterC = "ZXCVBNM"
    return (
        <div className={styles.Keyboard}>
            <div className={styles.keyboardRow}>
                {
                    letterA.split("").map((letter, index) =>
                        <Keys key={index} keys={letter} setGuess={setGuess} word={word}></Keys>
                    )
                }
            </div>
            <div className={styles.keyboardRow}>
                {
                    letterB.split("").map((letter, index) =>
                        <Keys key={index} keys={letter} setGuess={setGuess} word={word}></Keys>
                    )
                }
            </div>
            <div className={styles.keyboardRow}>
                {
                    letterC.split("").map((letter, index) =>
                        <Keys key={index} keys={letter} setGuess={setGuess} word={word}></Keys>
                    )
                }
            </div>
        </div>
    )
}
