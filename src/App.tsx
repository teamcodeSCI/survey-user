import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './layouts/Main';
import Feedback from './pages/Feedback';
import Survey from './pages/Survey';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/survey" element={<Survey />} />
      </Route>
      <Route path="*" element={'Page not found'} />
    </Routes>
  );
}

export default App;
