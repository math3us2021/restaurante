import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './page/Home/index';
import Create from './page/Create/index';
import Edit from './page/Edit/index';
import User from './page/User/index';



export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/user" element={<User />} />
    </Routes>
  </BrowserRouter>
  );
}