import React from "react";
import './App.scss';
import { Routes, Route } from "react-router-dom";
import { Albums } from './albums';
import { NoMatch } from './404';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Albums />}>
          <Route path="albums/" element={<Albums />} />
          <Route path="albums/:id" element={<Albums />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
  );
}


