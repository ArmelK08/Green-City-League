import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Views/Home/Home';
import Inscription from './Views/Inscription/Inscription';
import InscriptionTable from './Views/admin/InscriptionTable';



function App() {


  return ( 
  <>
<BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/inscription' element={<Inscription/>}/>
      <Route path='/admin' element={<InscriptionTable/>}/>
      
    </Routes>
  </BrowserRouter>
  </>
    
  )
}

export default App
