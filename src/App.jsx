import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import quote from './components/quote.json'
import QuoteBox from './components/QuoteBox '
import FootCard from './components/FootCard'

function App() {
  const randomIndex = Math.floor(Math.random()* quote.length)
  const [index, setIndex] = useState(randomIndex)
  
  const changeQuote = () => {
    setIndex(randomIndex)
  }  

  const colors = [
    "#845ec2",
    "#ffc75f",
    "#008f7a",
    "#c34a36",
    "#926c00",
    "#296073",
  ];
  const randomColors = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[randomColors]}`

  return (
    <div className="App">
      <div className='quote-box'>
      <QuoteBox 
        index={quote[randomIndex].quote}
        color={colors[randomColors]}
        />
      <FootCard
       change={changeQuote}
       author={quote[randomIndex].author}
       color={colors[randomColors]}
       />
      </div>
    </div>
  )
}

export default App
