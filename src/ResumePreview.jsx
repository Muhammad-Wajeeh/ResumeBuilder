import "./Resume.css";


function ResumeHeader({ HeaderName }) {
  return (
    <div className="HeaderContent">
      <h3 className="Header">{HeaderName}</h3>
      <hr className="line" width="100%" size="2"></hr>
    </div>
  );
}

function ResumePreview({ resumeData, projects, workExp, campusInvolvement}) {
  return (
    <div className="sheet">
      <div className="mainHeader">
        <h1>{resumeData.name || "Your Name"}</h1>
      </div>

    <div className="contactInfo">
      <a>{resumeData.email}  </a>
      <a>{resumeData.linkedIn} </a>
      <a>{resumeData.github} </a>
      <a>{resumeData.phoneNum}</a>
    </div>

      <ResumeHeader HeaderName={"Education"} />
      <div className="Education">
        <div className="firstLine">
          <div className="left">
            <p id="school">{resumeData.school}</p>
            <p>{resumeData.city}</p>
            <p>{resumeData.state}</p>
          </div>
          <div>
            <p>{resumeData.gradDate}</p>
          </div>
        </div>

        <div className="secondLine">
          <p>{resumeData.levelOfStudy}</p>
          <p>{resumeData.areaOfStudy}</p>
          <p>{resumeData.GPA}</p>
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
                <p id="projectName">{proj.name}</p>
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
                <li>{proj.content1}</li>
                <li>{proj.content2}</li>
                <li>{proj.content3}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      <ResumeHeader HeaderName={"Work Experience"} />
      <div>
        {workExp.map((work, index) => (
          <div className="projects">
            <div className="firstLine">
              <div className="left">
                <p id="projectName">{work.company}</p>
                <p>{work.location}</p>
              </div>
              <div className="right">
                <p>{work.date}</p>
              </div>
            </div>
            <div className="secondLine">
              <p>{work.position}</p>
            </div>
            <div className="thirdLine">
              <ul>
                <li>{work.content1}</li>
                <li>{work.content2}</li>
                <li>{work.content3}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      <ResumeHeader HeaderName={"Campus Involvement"} />
      <div>
        {campusInvolvement.map((campusInvolvement, index) => (
          <div className="projects">
            <div className="firstLine">
              <div className="left">
                <p id="projectName">{campusInvolvement.org}</p>
                <p id="projectName">{campusInvolvement.school}</p>
                <p>{campusInvolvement.location}</p>
              </div>
              <div className="right">
                <p>{campusInvolvement.date}</p>
              </div>
            </div>
            <div className="secondLine">
              <p>{campusInvolvement.position}</p>
            </div>
            <div className="thirdLine">
              <ul>
                <li>{campusInvolvement.content1}</li>
                <li>{campusInvolvement.content2}</li>
                <li>{campusInvolvement.content3}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResumePreview;
