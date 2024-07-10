import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Views/Home/Home';
import Inscription from './Views/Inscription/Inscription';



function App() {


  return ( 
  <>
<BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/inscription' element={<Inscription/>}/>
      
    </Routes>
  </BrowserRouter>
  </>
    
  )
}

export default App
