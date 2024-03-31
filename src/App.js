import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';

function App() {

  const dispatch = useDispatch()
  const count = useSelector(state=>state.count)
  
  const increase = () =>{
    dispatch({type:'INCREMENT',payload:{num:5}})
  }
  const decrease = () =>{
    dispatch({type:'DECREMENT',payload:{num:1}})
  }
  const login = () =>{
    dispatch({type:"LOGIN", payload:{id:"noona", pw:'123'}})
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <div>
        <button onClick={increase}>+5</button>
        <button onClick={decrease}>-1</button>
        <button onClick={login}>로그인</button>
      </div>
      <Box/>
    </div>
  );
}

export default App;

