import React from 'react'
import styles from "./Keyboard.module.css"
import { useState } from 'react';

export default function Keys({keys, setGuess, word}) {
    const [clicked,setClicked]=useState(false)
    return (
    <div className={styles.Keys} onClick={clicked?null:()=>{setGuess((pre)=>pre+keys.toLowerCase());setClicked(true)}} style={!clicked?null:word.toLowerCase().includes(keys.toLowerCase())?{backgroundColor:"green"}:{backgroundColor:"gray",color:"black"}}>
        {keys}
    </div>
    )
}
