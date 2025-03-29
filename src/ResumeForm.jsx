import React, { useState, useRef } from "react";
import { Project } from "./projectClass.jsx";
import { Work } from "./workClass.jsx";
import { Campus } from "./campusClass.jsx";

function ResumeForm({
  resumeData,
  setResumeData,
  projects,
  setProjects,
  workExp,
  setWorkExp,
  campusInvolvement,
  setCampusInvolvement,
}) {
  var projectCounter = useRef(0);
  var workCounter = useRef(0);
  var campusInvolvementCounter = useRef(0);

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = value;
    setProjects(updatedProjects);
  };

  const handleWorkChange = (index, field, value) => {
    const updatedWork = [...workExp];
    updatedWork[index][field] = value;
    setWorkExp(updatedWork);
  };

  const handleCampusChange = (index, field, value) => {
    const updatedCampus = [...campusInvolvement];
    updatedCampus[index][field] = value;
    setCampusInvolvement(updatedCampus);
  };

  function handleChange(e) {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
  }

  const addNewProject = () => {
    projectCounter.current += 1;
    setProjects([...projects, new Project()]);
  };

  const remNewProject = () => {
    const updatedProjects = [...projects];
    updatedProjects.pop();
    setProjects(updatedProjects);
  };

  const addNewWork = () => {
    workCounter.current += 1;
    setWorkExp([...workExp, new Work()]);
  };

  const remNewWork = () => {
    const updatedWork = [...workExp];
    updatedWork.pop();
    setWorkExp(updatedWork);
  };

  const addNewCampusExp = () => {
    campusInvolvementCounter.current += 1;
    setCampusInvolvement([...campusInvolvement, new Campus()]);
  };

  const remNewCampusExp = () => {
    const updatedCampusInvolvement = [...campusInvolvement];
    updatedCampusInvolvement.pop();
    setCampusInvolvement(updatedCampusInvolvement);
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
        <summary>➕ Contact Info</summary>
        <textarea
          name="email"
          placeholder="Email"
          value={resumeData.email}
          onChange={handleChange}
        />
        <textarea
          name="linkedIn"
          placeholder="LinkedIn"
          value={resumeData.linkedIn}
          onChange={handleChange}
        />
        <textarea
          name="github"
          placeholder="GitHub"
          value={resumeData.github}
          onChange={handleChange}
        />
        <textarea
          name="phoneNum"
          placeholder="Phone Number"
          value={resumeData.phoneNum}
          onChange={handleChange}
        />
      </details>

      <details>
        <summary>➕ Education</summary>
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
        <summary>➕Technical Skills</summary>
        <textarea
          name="langsAndFrames"
          placeholder="Languages & Frameworks"
          value={resumeData.education.langsAndFrames}
          onChange={handleChange}
        />
        <textarea
          name="programmingSkills"
          placeholder="Languages and Frameworks"
          value={resumeData.education.programmingSkills}
          onChange={handleChange}
        />
      </details>

      <details>
        <summary>➕ Project Experience</summary>
        <button onClick={addNewProject}>Add Project</button>
        <button onClick={remNewProject}>Remove Project</button>

        {projects.map((proj, index) => (
          <details className="indented-section" key={index}>
            <summary>➕ Project {index + 1}</summary>
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
              value={proj.position}
              onChange={(e) =>
                handleProjectChange(index, "position", e.target.value)
              }
            />
            <textarea
              placeholder="Achievements/Responsibilites"
              value={proj.content1}
              onChange={(e) =>
                handleProjectChange(index, "content1", e.target.value)
              }
            />
            <textarea
              placeholder="Achievements/Responsibilites"
              value={proj.content2}
              onChange={(e) =>
                handleProjectChange(index, "content2", e.target.value)
              }
            />
            <textarea
              placeholder="Achievements/Responsibilites"
              value={proj.content3}
              onChange={(e) =>
                handleProjectChange(index, "content3", e.target.value)
              }
            />
          </details>
        ))}
      </details>

      <details>
        <summary>➕ Work Experience</summary>
        <button onClick={addNewWork}>Add Work Experience</button>
        <button onClick={remNewWork}>Remove Work Experience</button>

        {workExp.map((work, index) => (
          <details className="indented-section" key={index}>
            <summary>➕ Work Experience {index + 1}</summary>
            <textarea
              placeholder="Company"
              value={work.company}
              onChange={(e) =>
                handleWorkChange(index, "company", e.target.value)
              }
            />
            <textarea
              placeholder="Location"
              value={work.location}
              onChange={(e) =>
                handleWorkChange(index, "location", e.target.value)
              }
            />
            <textarea
              placeholder="Date"
              value={work.date}
              onChange={(e) => handleWorkChange(index, "date", e.target.value)}
            />
            <textarea
              placeholder="Position"
              value={work.position}
              onChange={(e) =>
                handleWorkChange(index, "position", e.target.value)
              }
            />
            <textarea
              placeholder="Achievements/Responsibilites"
              value={work.content1}
              onChange={(e) =>
                handleWorkChange(index, "content1", e.target.value)
              }
            />
            <textarea
              placeholder="Achievements/Responsibilites"
              value={work.content2}
              onChange={(e) =>
                handleWorkChange(index, "content2", e.target.value)
              }
            />
            <textarea
              placeholder="Achievements/Responsibilites"
              value={work.content3}
              onChange={(e) =>
                handleWorkChange(index, "content3", e.target.value)
              }
            />
          </details>
        ))}
      </details>

      <details>
        <summary>➕ Campus Involvement</summary>
        <button onClick={addNewCampusExp}>
          Add Campus Involvement Experience
        </button>
        <button onClick={remNewCampusExp}>
          Remove Campus Involvement Experience
        </button>

        {campusInvolvement.map((campusInvolvementExperience, index) => (
          <details className="indented-section" key={index}>
            <summary>➕ Campus Experience {index + 1}</summary>
            <textarea
              placeholder="Organization"
              value={campusInvolvementExperience.org}
              onChange={(e) => handleCampusChange(index, "org", e.target.value)}
            />
            <textarea
              placeholder="School"
              value={campusInvolvementExperience.school}
              onChange={(e) =>
                handleCampusChange(index, "school", e.target.value)
              }
            />
            <textarea
              placeholder="Location"
              value={campusInvolvementExperience.location}
              onChange={(e) =>
                handleCampusChange(index, "location", e.target.value)
              }
            />
            <textarea
              placeholder="Date"
              value={campusInvolvementExperience.date}
              onChange={(e) =>
                handleCampusChange(index, "date", e.target.value)
              }
            />
            <textarea
              placeholder="Position"
              value={campusInvolvementExperience.position}
              onChange={(e) =>
                handleCampusChange(index, "position", e.target.value)
              }
            />
            <textarea
              placeholder="Achievements/Responsibilites"
              value={campusInvolvementExperience.content1}
              onChange={(e) =>
                handleCampusChange(index, "content1", e.target.value)
              }
            />
            <textarea
              placeholder="Achievements/Responsibilites"
              value={campusInvolvementExperience.content2}
              onChange={(e) =>
                handleCampusChange(index, "content2", e.target.value)
              }
            />
            <textarea
              placeholder="Achievements/Responsibilites"
              value={campusInvolvementExperience.content3}
              onChange={(e) =>
                handleCampusChange(index, "content3", e.target.value)
              }
            />
          </details>
        ))}
      </details>
    </div>
  );
}

export default ResumeForm;
