import { useState } from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { Main } from './components/Main/Main';
import { Star } from './components/Star/Star';
import { Text } from './components/Text/Text';
import { Thanks } from './components/Thanks/Thanks';

function App() {

  const buttonArr = [
    {
      value: 1,
      isClicked: false
    },
    {
      value: 2,
      isClicked: true
    },
    {
      value: 3,
      isClicked: false
    },
    {
      value: 4,
      isClicked: false
    },
    {
      value: 5,
      isClicked: false
    }
  ]

  const [isActive, setIsActive] = useState(false)
  const [rate, setRate] = useState()

  const handleClick = (e) => {
    setRate(e.value)
  }



  return (
    <div className="app">
      <div className='card'>
        <Star />
        <Text
          title={'How did we do?'}
          desc={'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!'}
        />
        <div style={{
          display: 'flex',
          gap: "17px",
          margin: "24px 24px 24px 24px"
        }}>
          {buttonArr.map((elem) => {
            return <Button active={elem.isClicked} onClick={() => handleClick(elem)} value={elem.value} />
          })}
        </div>
        <div>
          <button className='submit'>Sumbit</button>
        </div>

      </div>

    </div>
  );
}

export default App;
