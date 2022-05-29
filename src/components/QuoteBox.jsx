import React from 'react'

const QuoteBox = ({quoteRandom, colorRandom, button}) => {
  
  return (
    <article style={{color: colorRandom}} className='quoteBox'>
      <div className='quoteBox__quote'>
        <i class='bx bxs-quote-left' ></i>
        <h2>{quoteRandom.quote}</h2>
      </div>
      <div className='quoteBox__rigth'>
        <h3><i>{quoteRandom.author}</i></h3>
        <button style={{backgroundColor: colorRandom}} onClick={button}><b>&#62;</b></button>
      </div>
    </article>
  )
}

export default QuoteBox