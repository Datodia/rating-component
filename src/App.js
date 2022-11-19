import { useState } from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { Star } from './components/Star/Star';
import { Text } from './components/Text/Text';
import { Thanks } from './components/Thanks/Thanks';

function App() {

  const buttonArr = [1, 2, 3, 4, 5]
  const [active, setActive] = useState()
  const [show, setShow] = useState(true)
  const [rate, setRate] = useState()

  const handleClick = (e) => {
    setRate(e)
    setActive(e)
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
            return <Button active={active} onClick={() => handleClick(elem)} value={elem} />
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
