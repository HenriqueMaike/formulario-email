import { ToastContainer } from 'react-toastify';
import RoutesApp from './Routes'

import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <div className="App">
        <RoutesApp/>
        <ToastContainer/>
    </div>
  );
}

export default App;