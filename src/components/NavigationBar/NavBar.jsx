import React from 'react';
import styles from './NavBar.module.css';
import userIcon from '../../images/user.svg';
import timeIcon from '../../images/time.svg';
import projectIcon from '../../images/project.svg';
import skillIcon from '../../images/skill.svg';
import resumeIcon from '../../images/resume.svg';
import connectIcon from '../../images/connect.svg';

function NavBar() {
  return (
    <nav className={styles.NavBar}>
      <a href="#about" className={styles.NavLink}>
        <img src={userIcon} alt="About Me" />
        <span>About Me</span>
      </a>
      <a href="#skills" className={styles.NavLink}>
        <img src={skillIcon} alt="Skills" />
        <span>Skills</span>
      </a>
      
      <a href="#projects" className={styles.NavLink}>
        <img src={projectIcon} alt="Projects" />
        <span>Projects</span>
      </a>
      <a href="#timeline" className={styles.NavLink}>
        <img src={timeIcon} alt="Timeline" />
        <span>Timeline</span>
      </a>
      <a href="#resume" className={styles.NavLink}>
        <img src={resumeIcon} alt="Resume" />
        <span>Resume</span>
      </a>
      <a href="#connect" className={styles.NavLink}>
        <img src={connectIcon} alt="Let's Connect" />
        <span>Let's Connect</span>
      </a>
    </nav>
  );
}

export default NavBar;
