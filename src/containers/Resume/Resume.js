import { forwardRef, useEffect, useState } from 'react';
import educationLogo from '../../assets/images/education.svg';
import interestsLogo from '../../assets/images/interests.svg';
import programmingSkillsLogo from '../../assets/images/programming-skills.svg';
import projectsLogo from '../../assets/images/projects.svg';
import workHistoryLogo from '../../assets/images/work-history.svg';
import ProgrammingSkills from '../../components/ProgrammingSkills/ProgrammingSkills';
import ResumeHeading from '../../components/ResumeHeading/ResumeHeading';
import ResumeSegment from '../../components/ResumeSegment/ResumeSegment';
import ScreenHeading from '../../components/ScreenHeading/ScreenHeading';
import { db, doc, getDoc } from '../../firebase';
import { useCarousel } from '../../hooks/useCarousel';
import './Resume.css';

const Resume = forwardRef((props, ref) => {
  const { selectedSegmentId, setSelectedSegmentId, carousalOffsetStyle } =
    useCarousel();

  const [education, setEducation] = useState([]);
  const [workHistory, setWorkHistory] = useState([]);
  const [programmingSkills, setProgrammingSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [interests, setInterests] = useState([]);

  useEffect(() => {
    (async () => {
      const docRef = doc(db, 'portfolio', 'resume');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setEducation(docSnap.data().education.reverse());
        setWorkHistory(docSnap.data().workHistory.reverse());
        setProgrammingSkills(docSnap.data().programmingSkills);
        setProjects(docSnap.data().projects.reverse());
        setInterests(docSnap.data().interests);
      }
    })();
  }, []);

  return (
    <section className="resume-container" ref={ref}>
      <div className="resume-content">
        <ScreenHeading title="Resume" subHeading="My formal Bio Details" />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">
                <ResumeSegment
                  label="Education"
                  logoSrc={educationLogo}
                  id={0}
                  selectedSegmentId={selectedSegmentId}
                  setSelectedSegmentId={setSelectedSegmentId}
                />
                <ResumeSegment
                  label="Work History"
                  logoSrc={workHistoryLogo}
                  id={1}
                  selectedSegmentId={selectedSegmentId}
                  setSelectedSegmentId={setSelectedSegmentId}
                />
                <ResumeSegment
                  label="Programming Skills"
                  logoSrc={programmingSkillsLogo}
                  id={2}
                  selectedSegmentId={selectedSegmentId}
                  setSelectedSegmentId={setSelectedSegmentId}
                />
                <ResumeSegment
                  label="Projects"
                  logoSrc={projectsLogo}
                  id={3}
                  selectedSegmentId={selectedSegmentId}
                  setSelectedSegmentId={setSelectedSegmentId}
                />
                <ResumeSegment
                  label="Interests"
                  logoSrc={interestsLogo}
                  id={4}
                  selectedSegmentId={selectedSegmentId}
                  setSelectedSegmentId={setSelectedSegmentId}
                />
              </div>
            </div>
          </div>

          <div className="resume-bullet-details">
            <div
              style={carousalOffsetStyle}
              className="resume-details-carousal"
            >
              <div className="resume-screen-container" key="education">
                {education.map(
                  ({ id, heading, subHeading, fromDate, toDate }) => (
                    <ResumeHeading
                      key={id}
                      heading={heading}
                      subHeading={subHeading}
                      fromDate={fromDate}
                      toDate={toDate}
                    />
                  )
                )}
              </div>

              <div className="resume-screen-container" key="work-experience">
                {workHistory.map(
                  ({
                    id,
                    heading,
                    subHeading,
                    fromDate,
                    toDate,
                    description
                  }) => (
                    <div key={id}>
                      <ResumeHeading
                        heading={heading}
                        subHeading={subHeading}
                        fromDate={fromDate}
                        toDate={toDate}
                      />
                      <div className="experience-description">
                        <span className="resume-description-text">
                          {description}
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>

              <div
                className="resume-screen-container programming-skills-container"
                key="programming-skills"
              >
                {programmingSkills.map(({ id, skill, ratingPercentage }) => (
                  <ProgrammingSkills
                    key={id}
                    skill={skill}
                    ratingPercentage={ratingPercentage}
                  />
                ))}
              </div>

              <div className="resume-screen-container" key="projects">
                {projects.map(
                  ({
                    id,
                    heading,
                    fromDate,
                    toDate,
                    link,
                    description,
                    subHeading
                  }) => (
                    <ResumeHeading
                      key={id}
                      heading={heading}
                      fromDate={fromDate}
                      toDate={toDate}
                      link={link}
                      description={description}
                      subHeading={subHeading}
                    />
                  )
                )}
              </div>

              <div className="resume-screen-container" key="interests">
                {interests.map(({ id, heading, description }) => (
                  <ResumeHeading
                    key={id}
                    heading={heading}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Resume;
