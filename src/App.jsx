import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Inicio from './Pages/Inicio/Inicio';
import Login from './Pages/Login/Login.jsx';
import Register from  './Pages/Register/Index.jsx';
import Home from './Pages/Home/Home.jsx';


function App() {
  // <BrowserRouter>
  //     <CartContextProvider>
  //       <>
  //         <NavBar />
  //         <Routes>
  //           <Route path="/" element={<LandingPage />} />
  //           <Route path="/login" element={<Login />} />
  //           <Route path="/registro" element={<Registro />} />
  //           <Route path="/resetPassword" element={<ResetPassword />} />
  //           <Route path="/confirmPassword" element={<ConfirmPassword />} />
  //           <Route path="/turno" element={<TurnoOnLine />} />
  //           <Route path="/seccion" element={<Seccion />} />
  //           {/* aca se va a poner la ruta al login y el componente de login, el componente pruba es solo para probar */}
  //           <Route path="/turnos-especialidad" element={<TurnoEspecialidad />} />

  //           <Route path="/fecha-turno/:medId" element={<FechaTurno />} />
            
  //           <Route path="/admin" element={<AdminDashboard></AdminDashboard>}/>
  //           <Route path="/doctor/create" element={<RegisterDoctor/>}/>
  //           <Route path="/doctor/edit/:medId/" element={<EditDoctor/>}/>
  //           <Route path="/doctor/:medId" element={<DoctorCard/>}/>

  //           <Route path="/loginStaff" element={<LoginStaff/>}/>

  //           {/* <PruebaRutas/> */}
  //         </Routes>
  //       </>
  //     </CartContextProvider>
  //   </BrowserRouter>
  
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={ <Inicio /> }></Route>
          <Route path='/login' element={ <Login /> }></Route>
          <Route path='/register' element={ <Register /> }></Route>
          <Route path='/home' element={ <Home /> }></Route>

          

      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
