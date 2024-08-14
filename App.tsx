import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './components/LoginRegister/Login';
import { Register } from './components/LoginRegister/Register';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS globally
import { AddCar } from './components/Car/AddCar';
import { UserContainer } from './components/User/UserContainer';
import { AddUser } from './components/UserFeature/AddUser';
import { ResolveReimbursement } from './components/UserFeature/ResolveReimbursement';
import { Reimbursement } from './components/ReimbursementComponents/Reimbursement';
import { ReimbursementContainer } from './components/ReimbursementComponents/ReimbursementContainer';
import { PendingReimbursementContainer } from './components/ReimbursementComponents/PendingReimbursementContainer';
import { PendingReimbursement } from './components/ReimbursementComponents/PendingReimbursement';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<UserContainer />} />
          <Route path="/addcar" element={<AddCar />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/resolveuser" element={<ResolveReimbursement />} />
          <Route path="/reimbursements" element={<ReimbursementContainer />} />
          <Route path="/pendingreimbursements" element={<PendingReimbursementContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
