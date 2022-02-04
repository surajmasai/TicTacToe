// import logo from './logo.svg';

import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="heading">TIC TAC TOE</h1>
      <Board></Board>
    </div>
  );
}

function Board() {

  const [marks, setMarks] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0,]);

  const [player, setPlayer] = useState(1);

  useEffect(() => {
    const combination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let c of combination) {

      if (marks[c[0]] === 1 && marks[c[1]] === 1 && marks[c[2]] === 1) {
        alert("player 1 wins");
        window.location.reload();
      }


      if (marks[c[0]] === 2 && marks[c[1]] === 2 && marks[c[2]] === 2) {
        alert("player 2 wins");
        window.location.reload();
      }

    }
  })

  const changeMark = (i) => {

    const m = [...marks];

    if (m[i] === 0) {

      m[i] = player;
      setMarks(m);
      setPlayer(player === 1 ? 2 : 1);

    } else {
      alert("please click on empty box");
    }


  }

  function refreshPage() {
    window.location.reload();
  }

  return (
    <>
      <div className="Board">
        <div>
          <Block mark={marks[0]} position={0} changeMark={changeMark}></Block>
          <Block mark={marks[1]} position={1} changeMark={changeMark}></Block>
          <Block mark={marks[2]} position={2} changeMark={changeMark}></Block>
        </div>
        <div>
          <Block mark={marks[3]} position={3} changeMark={changeMark}></Block>
          <Block mark={marks[4]} position={4} changeMark={changeMark}></Block>
          <Block mark={marks[5]} position={5} changeMark={changeMark}></Block>
        </div>
        <div>
          <Block mark={marks[6]} position={6} changeMark={changeMark}></Block>
          <Block mark={marks[7]} position={7} changeMark={changeMark}></Block>
          <Block mark={marks[8]} position={8} changeMark={changeMark}></Block>
        </div>
      </div >
      <div className="row">
        <button onClick={refreshPage}>Play Again</button>
      </div>
    </>

  )

}

function Block({ mark, changeMark, position }) {
  return (
    <div className={`Block mark${mark}`}
      onClick={e => changeMark(position)}></div>
  )
}

export default App;
