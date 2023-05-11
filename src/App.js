import logo from './logo.svg';
import './App.css';
import EmployeeList from './components/EmployeeList';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Employee from './components/Employee';
import { AddEmployee } from './components/AddEmployee';

function App() {
  return (
    <div>
      <Router>
    
      <Header/>
      <div className='container'>
        <Routes>
          <Route path='/' exact element={<EmployeeList/>}></Route>
          <Route path='/emp' element={<EmployeeList/>}></Route>
          <Route path='emp/add-emp' element={<AddEmployee/>}></Route>
          <Route path='/edit-employee/:id' element={<AddEmployee/>}></Route>
        </Routes>
       
      </div>
      <Footer/>
      </Router> 
     

      
      
    </div>
  );
}

export default App;
