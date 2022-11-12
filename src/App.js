import { useState } from 'react';
import './App.css';
import { Button } from './components/Button/Button';
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

  const [show, setShow] = useState(true)
  const [rate, setRate] = useState()

  const handleClick = (e) => {
    setRate(e.value)
  }
  const handleShow = () => {
    { rate && setShow(false) }
  }



  return (

    <div className="app">
      {show ? <div className='card'>
        <Star />
        <Text
          title={'How did we do?'}
          desc={'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!'}
        />
        <div style={{
          display: 'flex',
          gap: "17px",
          margin: "32px 32px 20px 32px"
        }}>
          {buttonArr.map((elem) => {
            return <Button active={elem.isClicked} onClick={() => handleClick(elem)} value={elem.value} />
          })}
        </div>
        <div>
          <button className='submit' onClick={handleShow}>Sumbit</button>
        </div>
      </div> :
        <div className='card'>
          <Thanks rate={rate} />
        </div>}
    </div>
  );
}

export default App;
