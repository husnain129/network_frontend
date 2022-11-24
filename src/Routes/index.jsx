import React from 'react'
import Register from '../Views/Register'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from '../Views/Login';
import Home from '../Views/Home';
import Courses from '../Views/Courses.jsx';

const RoutesList = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/courses" element={<Courses />} />

                <Route path="*" element={<Navigate to={"/login"} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesList