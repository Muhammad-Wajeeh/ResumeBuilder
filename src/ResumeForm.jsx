import React, { useState, useRef } from "react";

function ResumeForm({ resumeData, setResumeData }) {

  var projectCounter = useRef(0);
  const [project, setProject] = useState([]);
  const [projectContent, setProjectContent] = useState({
    projectName: "",
    projectOrg: "",
    projectDate: "",
    projectPosition: "",
    projectContent: "",
  });

  
  function handleChange(e) {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
  }
  
  function handleProjectChange(e) {
    setProjectContent({ ...projectContent, [e.target.name]: e.target.value });
  }

  function AddNewProjectHelper({ projectContent, projectCount }) {
    return (
      <>
        <details>
          <summary>Project {projectCount}</summary>
          <textarea
            name="projectName"
            placeholder="Project Name"
            value={projectContent.projectName}
            onChange={handleProjectChange}
          />
        </details>
      </>
    );
  }


  function addNewProject() {
    projectCounter.current += 1;
    setProject([
      ...project,
      <AddNewProjectHelper
        projectContent={projectContent}
        projectCount={projectCounter.current}
      />,
    ]);
  }

  function remNewProject() {
    const updatedProjects = [...project];
    updatedProjects.pop();
    setProject(updatedProjects);
  }



  return (
    <div className="resume-form">
      <h2>Enter Resume Details</h2>
      <textarea
        name="name"
        placeholder="Your Name"
        value={resumeData.name}
        onChange={handleChange}
      />
      <details>
        <summary>Education</summary>
        <textarea
          name="school"
          placeholder="Your School"
          value={resumeData.education.school}
          onChange={handleChange}
        />
        <textarea
          name="city"
          placeholder="City"
          value={resumeData.education.city}
          onChange={handleChange}
        />
        <textarea
          name="state"
          placeholder="State"
          value={resumeData.education.state}
          onChange={handleChange}
        />
        <textarea
          name="gradDate"
          placeholder="Grade Date"
          value={resumeData.education.gradDate}
          onChange={handleChange}
        />
        <textarea
          name="levelOfStudy"
          placeholder="Level of education recieved"
          value={resumeData.education.levelOfStudy}
          onChange={handleChange}
        />
        <textarea
          name="areaOfStudy"
          placeholder="Area of education"
          value={resumeData.education.areaOfStudy}
          onChange={handleChange}
        />
        <textarea
          name="GPA"
          placeholder="GPA"
          value={resumeData.education.GPA}
          onChange={handleChange}
        />
        <textarea
          name="RelevantCW"
          placeholder="Any Relevant Coursework"
          value={resumeData.education.RelevantCW}
          onChange={handleChange}
        />
      </details>

      <details>
        <summary>Technical Skills</summary>
        <textarea
          name="langsAndFrames"
          placeholder="Languages & Frameworks"
          value={resumeData.education.school}
          onChange={handleChange}
        />
        <textarea
          name="programmingSkills"
          placeholder="Programming Skills"
          value={resumeData.education.city}
          onChange={handleChange}
        />
      </details>
      <details>
        <summary>Project Experience</summary>
        <button onClick={addNewProject}>Add Project</button>
        <button onClick={remNewProject}>Remove Project</button>
        {project}
      </details>
    </div>
  );
}

export default ResumeForm;
