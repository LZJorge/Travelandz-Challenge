import Router from './router';
import 'react-toastify/dist/ReactToastify.min.css'
import './App.css'
import { ToastContainer } from 'react-toastify';

const App = () => {
    return (
        <>
          <Router />

          <ToastContainer 
            position="top-center"
            autoClose={1000}
            hideProgressBar={true}
            closeOnClick
          />
        </>
    )
}

export default App