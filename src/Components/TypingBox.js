import {AllInclusiveSharp} from '@mui/icons-material'
import React,{createRef,useEffect,useMemo,useRef,useState} from 'react'

var randomWords=require('random-words')
const TypingBox = () => {
    const inputRef=useRef(null);
    const [wordsArray,setWordsArray]=useState(()=>{
        return randomWords(50)
    });
    // const [currWordIndex,setCurrWordIndex]=useState(0)
    // const [currCharIndex,setCurrCharIndex]=useState(0)
    // const wordsSpanRef=useMemo(()=>{
    //     return Array(wordsArray.length).fill(0).map(i=>createRef(null))
    // },[wordsArray])
  
    // const handleUserInput=(e)=>{
    //     const allCurrChars=wordsSpanRef[currWordIndex].current.childNodes;
    //     if(e.keyCode===32){
    //         //logic for space
    //         if(allCurrChars.length<=currCharIndex){
    //             //remove cursor from last place in a word
    //             allCurrChars[currCharIndex-1].classList.remove('current-right');
    //         }
    //         else{
    //             //remove cursor from in between of the word
    //             allCurrChars[currCharIndex].classList.remove('current')
    //         }
    //     }
    // }
    return (
    <div>
      <div className='type-box'>
        <div className='words'>
            {
                wordsArray.map(word=>{
                    return <span className='word'>
                      {  word.split('').map(char=>{
                        return <span >{char}</span>
                        
                      })}
                    </span>
                })
            }
        </div>
      </div>
    </div>
  )
}

export default TypingBox
