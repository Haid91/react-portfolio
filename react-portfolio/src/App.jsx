import { Outlet } from 'react-router-dom';
import Header from '../Component/Header';


function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Header/>
      <Outlet />
    </>
  );
}

export default App;



 