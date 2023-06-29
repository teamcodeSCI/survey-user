import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './layouts/Main';
import Feedback from './pages/Feedback';
import Survey from './pages/Survey';
import Ending from './pages/Ending';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/ending" element={<Ending />} />
        <Route path="/" element={<Navigate to={'/feedback'} />} />
      </Route>
      <Route path="*" element={'Page not found'} />
    </Routes>
  );
}

export default App;
