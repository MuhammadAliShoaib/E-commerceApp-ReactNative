import {useContext, useState, useEffect} from 'react';
import UserContext from './store/userContext/userContext';
import BottomNavigation from './config/navigation/bottomNavigation';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {addAllItems} from './config/redux/reducer/productsSlice';
import StackNavigation from './config/navigation/stackNavigation';

function App() {
  const ctx = useContext(UserContext);

  return (
    <>
      {/* {!ctx.Login && <StackNavigation />}
      {ctx.Login && <BottomNavigation />} */}
      <BottomNavigation />
    </>
  );
}

export default App;
