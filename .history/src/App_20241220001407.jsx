import { Outlet } from 'react-router-dom';
import Header from './Components/Header';

impor

function App() {

  return (
    <>
        <Header />
        <main>
          <Outlet />
        </main>
    </>
  );
}

export default App
