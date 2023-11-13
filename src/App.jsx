import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dialer
 from './Dialer';
 import Home from './Home';
 import Footer from './Footer';

const App = () => {
  return (
  <div>
      <Router>

<Routes>
<Route path="/" element={<Home />} />
<Route path="/Dialer" element={<Dialer />} />
</Routes>


   
 </Router>

 <Footer/>
  </div>

  )
}

export default App