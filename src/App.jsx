import { Routes, Route } from 'react-router-dom';

import Home from './Component/Routes/Home/Home-routes';
import Navigation from './Component/Routes/Navigation/Navigation-Item';
import SignIn from './Component/Routes/Sign-In/SignInComponent';
const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;