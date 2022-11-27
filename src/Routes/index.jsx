import React from 'react'
import Register from '../Views/Register'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from '../Views/Login';
import Home from '../Views/Home';
import Courses from '../Views/Courses.jsx';
import CourseDetail from '../Views/CourseDetail.jsx';
import Profile from '../Views/Profile.jsx';
import Detail from '../Views/Detail.jsx';
import FindWork from '../Components/FindWork';
import HireDevelopers from '../Components/HireDevelopers';
import JobDetail from '../Components/JobDetail.jsx';
import CreateJob from '../Components/CreateJob.jsx';
import UploadPortfolio from '../Components/UploadPortfolio';
import Community from '../Components/Community.jsx';
import QuestionDetail from '../Components/QuestionDetail.jsx';
import AskQuestion from '../Components/AskQuestion.jsx';
import MyJobs from '../Components/MyJobs.jsx';
import Verify from '../Components/Verify.jsx';

const RoutesList = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/course-detail" element={<CourseDetail />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/find-work" element={<FindWork />} />
                <Route path="/hire-developers" element={<HireDevelopers />} />
                <Route path="/job-detail" element={<JobDetail />} />
                <Route path="/create-job" element={<CreateJob />} />
                <Route path="/upload-portfolio" element={<UploadPortfolio />} />
                <Route path="/community" element={<Community />} />
                <Route path="/question-detail" element={<QuestionDetail />} />
                <Route path="/ask-question" element={<AskQuestion />} />
                <Route path="/my-jobs" element={<MyJobs />} />
                <Route path="/verify" element={<Verify />} />

                <Route path="*" element={<Navigate to={"/login"} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesList