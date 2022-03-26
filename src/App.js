import EmployeesList from './components/employees-list/employees-list';
import MainContent from './components/main-content/main-content';
import { fetchData } from './store/ticketSlice';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';


function App() {
  const dispatch = useDispatch()
  const {chosen} = useSelector(state => state.data)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  return (
    <div className="App">
      <h1 className='main--title'>Tickets</h1>
      <hr />

      <div className="container">
        <div className='side--bar'>
          <input className='search--panel' type="text" />
          <EmployeesList />
        </div>
        <div className='ticket--selected'>
          {chosen === null && <h1>No ticket selected</h1>}
          {chosen !== null && <MainContent />}
        </div>

        
      </div>
    </div>
  );
}

export default App;
