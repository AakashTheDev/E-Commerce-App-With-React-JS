import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import ContactUs from './ContactUs';
import AddNewProducts from './AddNewProducts';
import Header from './Header';
import './index.css';
import ViewMore from './ViewMore';
import Update from './Update';
import Authentication from './Authentication';
import Delete from './Delete';



function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/ContactUs' element={<ContactUs />} />
          <Route path='/AddNewProducts' element={<AddNewProducts />} />
          <Route path='/ViewMore/:id' element={<ViewMore/>}/>
          <Route path='/Update/:id' element={<Update/>}/>
          <Route path='/Delete/:id' element={<Delete/>}/>
        </Routes>
      </Router>
    </>
  )
}


export default App;
