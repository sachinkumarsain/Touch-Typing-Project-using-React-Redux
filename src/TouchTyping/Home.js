import React, { useEffect } from 'react'
import "./Home.css"
import { useDispatch, useSelector } from 'react-redux'
import { getRandomSentence, setInputValue, setIsCorrect, setKeyCount,setDeleteData } from "./Slice"

function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.touchType
  })
  dispatch(setIsCorrect())
  console.log(data.keyCount)
  useEffect(() => {
    dispatch(getRandomSentence())
  }, [])


  return (
    <>
      <section className='section-home'>
        <div className=' home-page'>
          <h1 className='heading'>Touch Typing</h1>
          <h2 className='second-h'>Type the sentence below:</h2>
          <h2
          className='sentence'
            style={{
              color: data.isCorrect ? "green" : "red",
              animationName:data.isCorrect ? " ":"sent",
              border: data.isCorrect ? " ": "1.5px solid red"
              
            }}
          >{data.randomSentence}</h2>
          <input
            type='text'
            placeholder='Start Typing'
            id='text'
            value={data.inputValue}
            onChange={(e) => dispatch(setInputValue(e.target.value))}
            onKeyUp={() => dispatch(setKeyCount())}
          ></input>
          {
            data.keyCounted ?
              <div className='final-output'
              >
                <h1 className='keycount'>keyCount: {data.keyCount}</h1>
                <h2 className='accuracy'>accuracy: {data.accuracy}%</h2>
                <button onClick={()=>dispatch(setDeleteData())}>Delete</button>
              </div> : ""
          }
        </div>
      </section>
    </>
  )
}

export default Home