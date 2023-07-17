import { Routes, Route } from 'react-router-dom';
import Home from './Component/Routes/Home-routes';
function App() {
  
  return (
    <Routes>
       <Route path='/' index element={<Home/>}>

       </Route>
    </Routes>
  );
}
export default App;
