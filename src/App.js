import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import MainPage from './Components/MainPage/MainPage';
import LoginDoctor from './Components/LoginDoc/LoginDoctor';
import LoginPatient from './Components/LoginPat/LoginPatient';
import Doctor from './Components/Doctor/Doctor';
import PatientDetails from './Components/Doctor/PatientDetails'
import Consultation from './Components/Doctor/Consultation/Consultation'
import Prescription from './Components/Doctor/Prescription/Prescription';
import SignUp from './Components/SignupDoc/SignUpdoc';
import SignUpPat from './Components/SignupPat/SignUpPat.js';
import Patient from './Components/Patient/Patient.js';
import Main from './Components/Patient/Profile/Main.js';
import Appointment from './Components/Patient/Appointment/Appointment.js';



function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/SignUpDoc' element={<SignUp />}/>
            <Route path='/SignUpPat' element={<SignUpPat />} />
            <Route path='/LoginDoctor' element={<LoginDoctor />}/>
            <Route path='/LoginPatient' element={<LoginPatient />}/>
            <Route path='/Doctor' element={<Doctor />}/>
            <Route path='/PatientDetails' element={<PatientDetails />}/>
            <Route path='/Consultation' element={<Consultation />}/>
            <Route path='/Prescription' element={<Prescription />}/>
            <Route path='/Patient' element={<Patient />}/>
            <Route path='/Main' element={<Main />}/>
            <Route path='/Appointment' element={<Appointment />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
