import { useState } from "react";
import ResumeForm from "./ResumeForm";
import ResumePreview from "./ResumePreview";
import Toolbar from "./Toolbar";
import "./App.css";
function App() {
  const [resumeData, setResumeData] = useState({
    name: "",
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

  return (
    <div className="app-container">
      <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
      <ResumePreview resumeData={resumeData} />
    </div>
  );
}

export default App;
