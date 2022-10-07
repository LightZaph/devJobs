import './App.css';
import Header from './components/Header/Header';
import JobLists from './components/Jobs/JobLists';
import JobDetails from './components/Job-details/JobDetails';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/Jobs" />} />
        <Route path="/Jobs" element={<JobLists />} />
        <Route path="/Jobs/:position" element={<JobDetails />} />
      </Routes>
    </div>
  );
}

export default App;
