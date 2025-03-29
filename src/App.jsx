import { useState } from "react";
import ResumeForm from "./ResumeForm";
import ResumePreview from "./ResumePreview";
import "./App.css";
function App() {
  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    linkedIn: "",
    github: "",
    phoneNum: "",
   
    education: {
      school: "",
      city: "",
      state: "",
      gradDate: "",
      levelOfStudy: "",
      areaOfStudy: "",
      GPA: "",
      RelevantCW: "",
    },

    techSkills: {
      langsAndFrames: "",
      programmingSkills: "",
    },

    jobTitle: "",
    experience: "",
    education: "",
    skills: "",
  });

  
  const [projects, setProjects] = useState([]);
  const [workExp, setWorkExp] = useState([]);
  const [campusInvolvement, setCampusInvolvement] = useState([]);

  return (
    <div className="app-container">
      <ResumeForm resumeData={resumeData} setResumeData={setResumeData} projects={projects} setProjects={setProjects} workExp = {workExp} setWorkExp={setWorkExp} campusInvolvement = {campusInvolvement} setCampusInvolvement = {setCampusInvolvement} />
      <ResumePreview resumeData={resumeData} projects={projects} workExp = {workExp} campusInvolvement = {campusInvolvement}/>
    </div>
  );
}

export default App;
