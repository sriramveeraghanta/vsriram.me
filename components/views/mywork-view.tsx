import React, { FC } from 'react';
// react icons
import { FaPhoenixFramework, FaNodeJs } from 'react-icons/fa';
import { SiNextDotJs, SiDjango, SiNuxtDotJs, SiVueDotJs, SiGithub } from 'react-icons/si';

const MyWorkView: FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h3 className="text-center">Projects</h3>

        <article className="work-item">
          <h5 className="text-primary">LiberoMeet</h5>
          <p className="mb-1">
            It is a video conferencing application using webrtc. Creating events and meetings around
            the conference rooms. It is a fully functional virtual meeting tool like GoogleMeet and
            Zoom with features like chat, notes and whiteboard inside the video room.
          </p>
          <p className="mb-1">
            <span className="text-bold text-info">Technologies Used: </span>
            <FaPhoenixFramework /> Phoenix, <SiNextDotJs /> NextJS.
          </p>
          <p className="mb-1">
            <span className="text-bold text-info">Team Details: </span>
            Product Designer, Team lead and Engineering Lead, with a team of 6 members.
          </p>
          <p className="mb-1">
            <span className="text-bold text-info">References: </span>
            <a href="https://liberomeet.io/" target="_blank" rel="noreferrer">
              https://liberomeet.io/
            </a>
          </p>
        </article>

        <article className="work-item">
          <h5 className="text-primary">{`AssetMatch - L'oreal Paris`}</h5>
          <p className="mb-1">
            An image matching application using google vision api. Designed a frontend application
            to upload image assets to match over the web using vision apis. Displaying results in
            the user dashboard with the data retrieved from vision api.
          </p>
          <p className="mb-1">
            <span className="text-bold text-info">Technologies Used: </span>
            <SiDjango /> Django, <SiNextDotJs /> NextJS.
          </p>
          <p className="mb-1">
            <span className="text-bold text-info">Team Details: </span>
            Project Architect and Developer working alone.
          </p>
          {/* <p className="mb-1">
            <span className="text-bold text-info">References: </span>
            <a href="https://liberomeet.io/">https://liberomeet.io/</a>
          </p> */}
        </article>

        <article className="work-item">
          <h5 className="text-primary">KeatsApp</h5>
          <p className="mb-1">
            An interactive learning application for kids to learn to programme. Creating a learning
            environment for kids with attractive challenges using different learning methods.
          </p>
          <p className="mb-1">
            <span className="text-bold text-info">Technologies Used: </span>
            <SiDjango /> Django, <SiNuxtDotJs /> NuxtJS.
          </p>
          <p className="mb-1">
            <span className="text-bold text-info">Team Details: </span>
            Head of Engineering with a team of 4
          </p>
          <p className="mb-1">
            <span className="text-bold text-info">References: </span>
            <a href="https://keats.app/" target="_blank" rel="noreferrer">
              https://keats.app/
            </a>
          </p>
        </article>

        <article className="work-item">
          <h5 className="text-primary">SATnPaper</h5>
          <p className="mb-1">
            SATnPaper is a premium online platform for Indian students aspiring for undergraduate
            admissions to US colleges by training them for the ACT and SAT exam using mock tests.
          </p>
          <p className="mb-1">
            <span className="text-bold text-info">Technologies Used: </span>
            <SiDjango /> Django, <SiVueDotJs /> VueJS.
          </p>
          <p className="mb-1">
            <span className="text-bold text-info">Team Details: </span>
            Head of Engineering with a team of 2
          </p>
          <p className="mb-1">
            <span className="text-bold text-info">References: </span>
            <a href="https://satnpaper.com/" target="_blank" rel="noreferrer">
              https://satnpaper.com/
            </a>
          </p>
        </article>

        <article className="work-item">
          <h5 className="text-primary">Crate</h5>
          <p className="mb-1">
            Providing interface and secure permission for users to access files locally using a
            local server that was deployed and tested in college. Working on converting this project
            into an NPM module for better accessibility.
          </p>
          <p className="mb-1">
            <span className="text-bold text-info">Technologies Used: </span>
            <FaNodeJs /> NodeJS.
          </p>
          <p className="mb-1">
            <span className="text-bold text-info">Team Details: </span>
            Team lead (academic project with a team of 4)
          </p>
          <p className="mb-1">
            <span className="text-bold text-info">References: </span>
            <a href="https://github.com/sriramveeraghanta/crate" target="_blank" rel="noreferrer">
              <SiGithub /> Github
            </a>
          </p>
        </article>

        <h3 className="text-center mt-4 mb-4">Things I Build For Fun</h3>

        <article className="work-item">
          <h5 className="text-primary">Collabcode</h5>
          <p className="mb-1">
            Collaborative online text editor with syntax highlighter. Each user is provided with a
            random workspace that can be shared with others for collaboration. Currently refactoring
            the project Conflict Free Replicated Data Types.
          </p>
          <p className="mb-1">
            <span className="text-bold text-info">Technologies Used: </span>
            <FaNodeJs /> NodeJS.
          </p>
          <p className="mb-1">
            <span className="text-bold text-info">References: </span>
            <a
              href="https://github.com/sriramveeraghanta/collabcode"
              target="_blank"
              rel="noreferrer"
            >
              <SiGithub /> Github
            </a>
          </p>
        </article>
      </div>
    </section>
  );
};

export default MyWorkView;
