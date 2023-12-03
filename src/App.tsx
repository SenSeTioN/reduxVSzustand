import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { AppDispatch, RootState, fetchToDo, increment } from './stores/redux.store'
import { useCounterZustand } from './stores/zustand.store'

function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const title = useSelector((state: RootState) => state.counter.title)
  const dispatch = useDispatch<AppDispatch>()

  const {
    value: countZustand,
    increment: incrementZustand,
    title: titleZustand,
    fetchToDo: fetchToDoZustand,
  } = useCounterZustand()

  return (
    <>
      <button onClick={() => dispatch(increment())}>count is {count}</button>
      <button onClick={() => dispatch(fetchToDo())}>{title}</button>
      <button onClick={() => incrementZustand()}>countZustand is {countZustand}</button>
      <button onClick={() => fetchToDoZustand()}>{titleZustand}</button>
    </>
  )
}

export default App
