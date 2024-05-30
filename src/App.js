import './app.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './features/HomePage/HomePage';

function App() {
  return (
    <Routes>
      <Route path='/' element = {<Navigate replace to='/home' />}/>
      <Route path='/home' element={<HomePage />} />
    </Routes>
    
  );
}

export default App;
