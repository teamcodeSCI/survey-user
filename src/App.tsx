import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './layouts/Main';
import Feedback from './pages/Feedback';
import Survey from './pages/Survey';
import Ending from './pages/Ending';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/home" element={<Home />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/ending" element={<Ending />} />
        <Route path="/" element={<Navigate to={'/feedback'} />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
