import React from "react";
import './App.scss';
import { Routes, Route } from "react-router-dom";
import { Albums } from './albums';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Albums />}>
          <Route path="albums/" element={<Albums />} />
          <Route path="albums/:id" element={<Albums />} />
        </Route>
      </Routes>
  );
}


