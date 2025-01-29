import React from 'react';
import Main from './Main';
import AlberteAge from './Components/Alberte/AlberteAge'
import 'bootstrap/dist/css/bootstrap.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DueDateTimer from './Components/DueDateCounter/DueDateTimer';
import NoPage from './Components/PageNotMapped/NoPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route >
          <Route path="/" element={<Navigate to="/pipling"/>} />
          <Route path="/pipling" element={<DueDateTimer />} />
          <Route path="/alberte" element={<AlberteAge />} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

/*
ReactDOM.render(
  <React.StrictMode >

    <Main/>

  </React.StrictMode>,
  document.getElementById('root')
);
*/