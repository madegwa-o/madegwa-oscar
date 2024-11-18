
import './App.css';
import NavBar from "./components/NavigationBar/NavBar";
import MyProfile from "./components/Profile/MyProfile";
import Skills from "./components/Skills/Skills";
import TechStack from "./components/TechStack/TechStack";
import TimeLine from "./components/TimeLine/TimeLine";
import HireMe from "./components/HireMe/HireMe";
import LetsConnect from "./components/LetsConnect/LetsConnect";

function App() {
  return (
      <>
        <NavBar/>
        <section id="about">
          <MyProfile />
        </section>
        <section id="skills">
          <Skills/>
        </section>
        <section id="projects">
          <TechStack/>
        </section>
        <section id="timeline">
          <TimeLine/>
        </section>
        <section id="resume">
          <HireMe/>
        </section>
        <section id="connect">
          <LetsConnect/>
        </section>
      </>
  );
}

export default App;
