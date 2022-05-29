import './App.css'
import { useState } from 'react'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'

const arrayColors = [
  '#EF2B9E', '#E5DB66', '#F982FA', '#11A6D1',
  '#B5E795', '#75CCB9', '#CFCF40', '#5E2305',
  '#323ADA', '#F0A065', '#A51465', '#399ACA',
  '#003E41', '#0B8A4C', '#079033', '#2B4BA7',
  '#EAC634', '#360DCA', '#62526C', '#CB3054',
  '#DA954D', '#013D1A', '#4A5F0B', '#076178'
]

function App() {

  const randomArrayIndex = array => {
    return Math.floor(Math.random() * array.length)
  }

  const randomArrayElement = array =>{
     const i = randomArrayIndex(array)
     return array[i]
  }

  const [quoteRandom, setQuoteRandom] = useState(randomArrayElement(quotes))
  const [colorRandom, setColorRandom] = useState(randomArrayElement(arrayColors))

  const button = () => {
    setQuoteRandom(randomArrayElement(quotes))
    setColorRandom(randomArrayElement(arrayColors))
  }
  
  let appColor = {
    backgroundColor: colorRandom
  }
  console.log(appColor)
  return (
    <div style={appColor} className="App">
      <QuoteBox
        quoteRandom={quoteRandom}
        colorRandom={colorRandom}
        button={button}
      />
    </div>
  )
}

export default App
