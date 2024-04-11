
import './App.css';
import Messanger from './components/messanger';
import {GoogleOAuthProvider} from "@react-oauth/google";
import attendImage from './components/attend.png'; 
import  AccountProvider from './context/AccountProvider';
function App() {
  const clientId='330510413981-tu4rvf7tplkbaasnlj9qt741iaq4j0jd.apps.googleusercontent.com';
  return (
    <div className="App">
    <GoogleOAuthProvider clientId={clientId}>
    <AccountProvider>
    <div className="container" style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', backgroundColor: 'black',overflow: 'hidden'}}>
      <div className="image no-gutters" style={{ width: '50%', height: '100vh', backgroundImage: `url(${attendImage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
      <div className="login no-gutters" style={{ width: '50%', height: '100vh', padding: '20px', backgroundColor: 'black' }}>
      <Messanger/>
      </div>
    </div>
    </AccountProvider>
    
   </GoogleOAuthProvider>
    </div>
  );
}

export default App;
