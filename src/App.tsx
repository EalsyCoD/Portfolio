import React from 'react';
import { useDispatch } from 'react-redux';
import CardsList from './components/CardsList';
import Header from './components/Header';
import { setCards } from './ducks/actions/CardsAction';

const App = (): JSX.Element => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(setCards())
  }, [dispatch])
  return (
    <React.Fragment>
      <Header />
      <CardsList />
    </React.Fragment>
  )
}

export default App;
