/* eslint-disable react/prop-types */
import Logo from "../../../src/assets/images/Logo.svg";
import HomeIcon from "../../../src/assets/images/HomeIcon.svg";
import InfoIcon from "../../../src/assets/images/InfoIcon.svg";
import MailIcon from "../../../src/assets/images/MailIcon.svg";
import ProjectsIcon from "../../../src/assets/images/ProjectsIcon.svg";
import SkillsIcon from "../../../src/assets/images/SkillsIcon.svg";
import "./sidebar.scss";
import ProfileImage from "../../assets/images/Profile.png";

function SideBar({handleDisplayHome}) {
  return (
    <div className="sidebar">
      <img src={Logo} alt="codeLogo" className="logo" />
      <div className="options">
        <img src={HomeIcon} alt="HomeIcon" className="icons" onClick={()=>handleDisplayHome()} />
        <img src={InfoIcon} alt="InfoIcon" className="icons" />
        <img src={SkillsIcon} alt="SkillsIcon" className="icons" />
        <img src={ProjectsIcon} alt="ProjectsIcon" className="icons" />
        <img src={MailIcon} alt="MailIcon" className="icons" />
      </div>
      <div className="profile">
        <img src={ProfileImage} alt="ProfileImage" className="profileImage" />
      </div>
    </div>
  );
}

export default SideBar;
