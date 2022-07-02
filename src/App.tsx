import './App.scss';
import Header from './components/Header/Header';
import { MyThemeContext, themes } from './contexts/theme-context';
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Data from './components/Data/Data';
import Blogs from './components/Blogs/Blogs';
import DataForm from './components/DataForm/DataForm';
import { UserContext, UserContextType } from './contexts/user-context';
import { useEffect, useState } from 'react';
import UserService from './services/user.service';
import Blog from './components/Blog/Blog';
import Consultants from './components/Consultants/Consultants';
import Consultant from './components/Consultant/Consultant';

function App() {
  const [userObj, setUserObj] = useState<null | UserContextType>(null);

  useEffect(() => {
    async function getUserObj() {
      setUserObj(await UserService.GetUserDetails('team404', 'password'));
    }
    getUserObj();
  }, [setUserObj])

  return (
    <ErrorBoundary>
      <Router>
      <MyThemeContext.Provider value={themes.dark}>
        <UserContext.Provider value={userObj}>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/data' element={<Data />}>
            <Route path='form' element={<DataForm />}></Route>
          </Route>
          <Route path='/blogs' element={<Blogs />}>
            <Route path=':blogId' element={<Blog />}></Route>
          </Route>
          <Route path='/consultants' element={<Consultants />}>
            <Route path=':consultantId' element={<Consultant />}></Route>
          </Route>
          <Route path='*' element={<h2>Nothing Here Mate</h2>}></Route>
        </Routes>
        </UserContext.Provider>
      </MyThemeContext.Provider>
      
    </Router>
    </ErrorBoundary>
  );
}

export default App;
