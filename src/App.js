
import './App.css';
import List from './components/List'
import ApplicationForm from './components/ApplicationForm';

import Product from './components/Product';


function App() {
  return (
    <div className="App">
         <h2 style={{background:'black', color:'white'}}>1.List Task</h2>
         <List/>
      <h2 style={{background:'black', color:'white', marginTop:'10px'}}>2.Application form Task</h2>
     <ApplicationForm></ApplicationForm>
     <h2 style={{background:'black', color:'white', marginTop:'10px'}}>2.Product Task</h2>
     <Product></Product>

     
     

  
    
    </div>
  );
}

export default App;
