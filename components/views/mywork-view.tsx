import React, { FC } from 'react';
// react icons
import { FaPhoenixFramework, FaNodeJs, FaJava } from 'react-icons/fa';
import {
  SiNextDotJs,
  SiDjango,
  SiNuxtDotJs,
  SiVueDotJs,
  SiGithub,
  SiAndroidstudio
} from 'react-icons/si';

const MyWorkView: FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h3 className="text-center">Projects</h3>

        <article className="work-item">
          <h5 className="text-primary">LiberoMeet</h5>
          <p className="mb-1">
            LiberoMeet is a video conferencing application using <b>WEBRTC</b>. Enables users to
            create events and meetings in the conference rooms. This is a fully functional virtual
            meeting tool like GoogleMeet and Zoom with features like chat, notes and whiteboard
            inside the video room.
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
            AssetMatch is an image matching application using Google vision API. Designed a
            front-end application to upload image assets to match over the web using vision APIs.
            User dashboard shows the matching results from the data retrieved.
          </p>
          <p className="mb-1">
            <span className="text-bold text-info">Technologies Used: </span>
            <SiDjango /> Django, <SiNextDotJs /> NextJS.
          </p>
          <p className="mb-1">
            <span className="text-bold text-info">Team Details: </span>
            Project Architect and Developer working alone.
          </p>
        </article>

        <article className="work-item">
          <h5 className="text-primary">KeatsApp</h5>
          <p className="mb-1">
            KeatsApp is an interactive learning application for kids to learn programming. It
            provides an intuitive learning environment for kids with attractive challenges using
            different learning methods.
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
            SATnPaper is a premium online platform for Indian students aspiring undergraduate
            admissions to US colleges by training them for the ACT and SAT exams using mock tests.
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
            Crate provides user interface and secure permissions for the users to access files
            locally using a local server that was deployed and tested in the college. Currently
            working on converting this project into an NPM module for better accessibility.
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
            separate workspace that can be shared with others for collaboration.
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

        <article className="work-item">
          <h5 className="text-primary">Github Clone Android App</h5>
          <p className="mb-1">
            An Android Application using Github APIs. It enables to find the Github users using
            their username and retrieve their profile, list of repositories owned and starred
            repositories. Implemented a tab layout to display and recycler view for rendering the
            repository cards list.
          </p>
          <p className="mb-1">
            <span className="text-bold text-info">Technologies Used: </span>
            <FaJava /> Java, <SiAndroidstudio /> Android Studio
          </p>
          <p className="mb-1">
            <span className="text-bold text-info">References: </span>
            <a
              href="https://github.com/sriramveeraghanta/github-clone-android"
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
