import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Inicio from './Pages/Inicio/Inicio';
import Login from './Pages/Login/Login.jsx';
import Register from  './Pages/Register/Index.jsx';
import Home from './Pages/Home/Home.jsx';
import Takes from './Pages/takes/FormularioDeTarea.jsx';
import Page404 from './Pages/Page404.jsx';
import { TareasProvider } from './Components/ContextTeareas';


function App() {  
  return (
    <>
    <BrowserRouter>
        <TareasProvider>
      <Routes>
          <Route path='/' element={ <Inicio /> } exact></Route>
          <Route path='/login' element={ <Login /> } exact></Route>
          <Route path='/register' element={ <Register /> } exact></Route>
          <Route path='/home' element={ <Home /> } exact></Route>
          <Route path='/takes' element={ <Takes /> } exact></Route>
          <Route path='*' element={<Page404/>} exact></Route>
      </Routes>
          </TareasProvider>
    
    </BrowserRouter>
    </>
  )
}

export default App
