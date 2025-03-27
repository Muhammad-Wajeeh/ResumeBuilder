import "./Resume.css";

function ResumeHeader({ HeaderName }) {
  return (
    <div className="HeaderContent">
      <h3 className="Header">{HeaderName}</h3>
      <hr className="line" width="100%" size="2"></hr>
    </div>
  );
}

function ResumePreview({ resumeData, projects }) {
  return (
    <div className="sheet">
      <div className="mainHeader">
        <h1>{resumeData.name || "Your Name"}</h1>
      </div>

      <ResumeHeader HeaderName={"Education"} />
      <div className="Education">
        <div className="firstLine">
          <div className="left">
            <p id="school">{resumeData.school},</p>
            <p>{resumeData.city},</p>
            <p>{resumeData.state}</p>
          </div>
          <div>
            <p>{resumeData.gradDate}</p>
          </div>
        </div>

        <div className="secondLine">
          <p>{resumeData.levelOfStudy},</p>
          <p>{resumeData.areaOfStudy},</p>
          <p>{resumeData.GPA} GPA</p>
        </div>

        <div className="thirdLine">
          <p>
            <span class="bold-some">Relevant Coursework: </span>
            {resumeData.RelevantCW}
          </p>
        </div>
      </div>

      <ResumeHeader HeaderName={"Technical Skills"} />
      <div className="technicalSkills">
        <ul>
          <li>Languages & Frameworks: {resumeData.langsAndFrames}</li>
          <li>Programming Skills: {resumeData.programmingSkills}</li>
        </ul>
      </div>

      <ResumeHeader HeaderName={"Project Experience"} />
      <div>
        {projects.map((proj, index) => (
          <div className="projects">
            <div className="firstLine">
              <div className="left">
                <p id="projectName">{proj.name},</p>
                <p>{proj.org}</p>
              </div>
              <div className="right">
                <p>{proj.date}</p>
              </div>
            </div>
            <div className="secondLine">
              <p>{proj.position}</p>
            </div>
            <div className="thirdLine">
              <ul>
                <li>{proj.content}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResumePreview;
