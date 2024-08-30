import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/login' element={<SignIn/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
