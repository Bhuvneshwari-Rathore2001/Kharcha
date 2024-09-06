import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Calendar from './pages/Calendar';
import Filter from './pages/Filter';
import Insight from './pages/Insight';
import Login from './pages/Login';
import Register from './pages/Register';
import Reset from './pages/Reset';
import Settings from './pages/Settings';
import Subscription from './pages/Subscription';
import Transaction from './pages/Transaction';

const AppRoute = () => {
  
  return (


    <Router>
      <div className='flex h-screen'>
        <Sidebar />
        <div className='flex flex-col flex-1 bg-[rgba(0,0,0,0.9)] h-full'>
          <Header />
          <Routes>
            {/* Routes for dashboard */}

            
              <Route exact path='/' element={<Insight />}></Route>
              <Route path='/transaction' element={<Transaction />}></Route>
              <Route path='/subscription' element={<Subscription />}></Route>
              <Route path='/calendar' element={<Calendar />}></Route>
              <Route path='/filter' element={<Filter />}></Route>
              <Route path='/settings' element={<Settings />}></Route>
            
          </Routes>

          {/* <Main className='overflow-y-hidden' /> */}
        </div>
      </div>

      <Routes>
        {/* Routes for authentication */}
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reset' element={<Reset />} />
      </Routes>
    </Router>
  );
};
export default AppRoute;
