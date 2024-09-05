import React from 'react';
import Header from './Components/Headers';

function App() {
  return (
    <div>
      <Header />
      {/* Other components and content */}
      <main>
        <h1>Welcome to KP Enggs</h1>
      </main>
    </div>
  );
}

export default App;

// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import HomePage from './Components/HomePage';
// import Footers from './Components/Footers';
// import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//   <Routes>
//     <Route path='/' element={<HomePage/>}/>
//     <Route path='/foot' element={<Footers/>}/>
//   </Routes>
//   )
// }

// export default App;
