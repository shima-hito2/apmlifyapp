import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import TestA from './TestA.js';
import TestB from './TestB.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/apmlifyapp/' element={<TestA />} />
        <Route exact path='/apmlifyapp/b' element={<TestB />} />
        {/* <Route path='/login' component={Login} />
      <Route path='/todo' component={TodoList} /> */}
      </Routes><br/>
      <Link to='/apmlifyapp/'>Aに</Link><br/>
      <Link to='/apmlifyapp/b'>Bに</Link>
    </BrowserRouter>
  );
}

export default App;
