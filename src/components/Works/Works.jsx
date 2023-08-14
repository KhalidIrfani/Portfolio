import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import linked from "../../img/linked.png";
import git from "../../img/git.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
            Gaining experience through freelancing on platforms like Fiverr and <br /> collaborating with
            
            various clients, along with contributing to different software  <br /> houses, has been immensely             
            enriching. This journey has <br /> provided me with a wealth of practical insights and learnings, 
  
            significantly <br />  augmenting my expertise in real-world scenarios. This hands-on exposure has
            <br />
            been invaluable in expanding my knowledge and proficiency within the industry.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="">
            <a className="w-secCircle" href="https://www.upwork.com/freelancers/~0120f6c0ea94789f8a"><img src={Upwork} alt="" /></a>
          </div>
          <div className="">
            <a className="w-secCircle" href="https://www.fiverr.com/mkiachannel?up_rollout=true"><img src={Fiverr} alt="" /></a>
          </div>
          <div className="">
        <a href="https://www.linkedin.com/in/khalid-irfani-145321205/" className="w-secCircle"> <img src={linked} alt="" height={50}/></a>   
          </div>
          <div >
            <a href="https://github.com/KhalidIrfani" className="w-secCircle"><img src={git} alt="" height={40}/></a>
          </div>
          <div >
            <a href="https://www.facebook.com/irfani481" className="w-secCircle"><img src={Facebook} alt="" /></a>
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
