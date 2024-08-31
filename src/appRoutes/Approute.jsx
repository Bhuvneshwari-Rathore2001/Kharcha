import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Insight from '../components/dashboard/Insight';
import Transaction from '../components/dashboard/Transaction';
import Subscription from '../components/dashboard/Subscription';
import Calendar from '../components/dashboard/Calendar';
import Settings from '../components/dashboard/Settings';
import Filter from '../components/dashboard/Filter';
import Register from '../components/authentication/Register';
import Login from '../components/authentication/Login';
import Reset from '../components/authentication/Reset';

const Approute = () => {
  return (
    <Router>
      <Routes>
        {/* Routes for dashboard */}

        <Route exact path='/' element={<Insight />}></Route>
        <Route path='/transaction' element={<Transaction/>}></Route>
        <Route path='/subscription' element={<Subscription />}></Route>
        <Route path='/calendar' element={<Calendar />}></Route>
        <Route path='/filter' element={<Filter />}></Route>
        <Route path='/settings' element={<Settings />}></Route>

        {/* Routes for authentication */}
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reset' element={<Reset />} />
      </Routes>
    </Router>
  );
};
export default Approute;
