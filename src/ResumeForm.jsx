import React, { useState, useRef } from "react";
import { Project } from "./projectClass.jsx";

function ResumeForm({ resumeData, setResumeData, projects, setProjects }) {
  var projectCounter = useRef(0);

  const handleProjectChange = (index, field, value) => {
    const updated = [...projects];
    updated[index][field] = value;
    setProjects(updated);
  };

  function handleChange(e) {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
  }


  const addNewProject = () => {
    projectCounter.current += 1;
    setProjects([...projects, new Project()]);
  };

  const remNewProject = () => {
    const updated = [...projects];
    updated.pop();
    setProjects(updated);
  };

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

      <details open>
        <summary>Project Experience</summary>
        <button onClick={addNewProject}>Add Project</button>
        <button onClick={remNewProject}>Remove Project</button>

        {projects.map((proj, index) => (
          <details key={index}>
            <summary>Project {index + 1}</summary>
            <textarea
              placeholder="Project Name"
              value={proj.name}
              onChange={(e) =>
                handleProjectChange(index, "name", e.target.value)
              }
            />
            <textarea
              placeholder="Organization"
              value={proj.org}
              onChange={(e) =>
                handleProjectChange(index, "org", e.target.value)
              }
            />
            <textarea
              placeholder="Date"
              value={proj.date}
              onChange={(e) =>
                handleProjectChange(index, "date", e.target.value)
              }
            />
             <textarea
              placeholder="Position"
              value={proj.position }
              onChange={(e) =>
                handleProjectChange(index, "position", e.target.value)
              }
            />
             <textarea
              placeholder="Achievements/Responsibilites"
              value={proj.content}
              onChange={(e) =>
                handleProjectChange(index, "content", e.target.value)
              }
            />
            
          </details>
        ))}
      </details>
    </div>
  );
}

export default ResumeForm;
