import Admin from './admin';
import Signin from './signin';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import UserPanel from './Userpanel';
import AdminPanel from './Adminpanel';
import Availability from './availability';
import Setting from './settings';
import Edit from './edit';
import Record from './record';

function App() {
  return (
      
      <>
     
      <Routes>    
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/admin' element={<Admin/>} />    
      <Route path='/userpanel' element={<UserPanel/>}/>
      <Route path='/adminpanel' element={<AdminPanel/>}/>
      <Route path='/availability' element={<Availability/>}/>
      <Route path='/settings' element={<Setting/>}/>
      <Route path='/edit-info' element={<Edit/>}/>
      <Route path='/record' element={<Record/>}/>
      </Routes>
      </>
   
  );
}

export default App;
