import logo from "./images/logo.png";
import React from "react";
import home from "./images/home.png";
import about from "./images/user.png";
import projects from "./images/programming.png";
import contact from "./images/phone-contact.png";
import linkedIn from "./images/linkedin.png";
import github from "./images/github-white.png";
import "./blocks/App.scss";
import whiterabbit from "./vendor/fonts/whitrabt.ttf";
import profile from "./images/jess-pic.jpg";
import heart from "./images/heart.svg";
import resumecv from "./images/resume-and-cv.png";
import resume from "./vendor/document/Jess_Dowd_resume.pdf";
import webpage from "./images/webpage.png";
import code from "./images/programming-code-signs.png";
import demo from "./images/play-button (1).png";

import html from "./images/html (2).png";
import css from "./images/css.png";
import js from "./images/javascript.png";
import jsx from "./images/jsx.png";
import react from "./images/react.png";
import sass from "./images/sass.png";
import json from "./images/json-file.png";
import api from "./images/browser.png";

import location from "./images/pin.png";
import phone from "./images/smartphone.png";
import email from "./images/at (1).png";

function App() {
  return (
    <div className="App">
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <header className="App-header">
        <img className="logo" src={logo} alt="page logo" />
      </header>

      <body className="App-body">


        <div className="intro">
          <a id="intro"></a>
          <h1 className="wrapper wordCarousel title">

            <div className="typing-demo">
              Hi! I'm Jess. A
            </div>

            <div>
              <ul className="flip4">
                <li>Software Engineer</li>
                <li>React Specialist</li>
                <li>Front End Web Developer</li>
                <li></li>
              </ul>
            </div>

          </h1>
        </div>

        <div className="about">

          <div className="container">
            <a id="about"></a>
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="our-team">

                  <div className="picture">
                    <img className="img-fluid" src={profile} />
                  </div>

                  <div className="team-content">
                    <h3 className="name">First and foremost, I love writing code. Ever since writing my first app in JavaScript and manipulating it to produce the desired output, I have been obsessed with the idea of using software to solve practical problems. Software engineering is a never-ending puzzle that I am passionately engaged in solving. I believe in the power of programming to transform and improve the lives of people around the world.
                      Web development calls to all my passions; it incorporates creativity and problem solving and I"m allowed to break it to improve the code (in a separate Git branch, of course). I love applying responsive design principles and watching my web pages shrink into mobile screens and still look amazing. It"s oddly satisfying. I think in a way I"m kind of like those web pages; I"m moldable, but I still keep my creative flair intact.
                      Even when I leave the office, I tend to continue writing code at home. Working freelance, I design, build, and maintain websites for small businesses.</h3>
                    <br />
                    <h4 className="name"> I am a Finance Major with a background in eCommerce and I find an interesting crossover between my software and my business experience. Both pursuits challenge so many aspects of the intellect: creativity, organization, sequential processing, problem-solving. This is what keeps me up at night, a never-ending thirst to create beautiful, powerful things and share them with the world.
                      My specialties include Front-End development, React, JSX, CSS, quickly learning new skills and languages, problem-solving, domain-driven design, responsive design principles, website optimization, and BEM methods of organizing code. I"m still enthusiastically learning any other programming languages, frameworks, or principles I can integrate into the coding web in my head.</h4>
                  </div>

                  <ul className="social">
                    <li>  <a href="https://github.com/Jess-Dowd" className="menu-item profile-menu" target="_blank">
                      <img src={github} className="fa fa-font fa-2x q"></img>
                      <span className="nav-text w">
                        GitHub
                      </span>
                    </a></li>
                    <li> <a href="https://www.linkedin.com/in/jessdoesreact/" className="menu-item" target="_blank">
                      <img src={linkedIn} className="fa fa-bar-chart-o fa-2x q"></img>
                      <span className="nav-text w">
                        LinkedIn
                      </span>
                    </a></li>
                    <li> <a href={resume} className="menu-item" target="_blank">
                      <img src={resumecv} className="fa fa-bar-chart-o fa-2x q"></img>
                      <span className="nav-text w">
                        Resume
                      </span>
                    </a></li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="projects">


          <div class="wrapperr">
            <div class="card">
              <a id="projects"></a>
              <input type="checkbox" id="card1" class="more" aria-hidden="true" />
              <div class="content">
                <div class="front" >
                  <div class="inner">
                    <h2>Around The U.S</h2>
                    <label for="card1" class="button" aria-hidden="true">
                      Details
                    </label>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <div class="info">
                      <a className="projectss" href="https://jess-dowd.github.io/Around_The_U.S/" target='_blank'>
                        <img className="project_link" src={webpage} />
                        <div class="icon">
                          <i class="fas fa-users"></i>
                          <span>Website</span>
                        </div>
                      </a>
                    </div>
                    <div class="info">
                      <a className="projectss" href="https://github.com/Jess-Dowd/Around_The_U.S" target='_blank'>
                        <img className="project_link" src={code} />
                        <div class="icon">
                          <i class="fas fa-users"></i>
                          <span>Code</span>
                        </div>
                      </a>
                    </div>
                    <div class="info">
                      <a className="projectss" href="https://github.com/Jess-Dowd/Around_The_U.S/blob/main/README.md" target='_blank'>
                        <img className="project_link" src={demo} />
                        <div class="icon">
                          <i class="fas fa-users"></i>
                          <span>Demo</span>
                        </div>
                      </a>
                    </div>
                    <div class="description">
                      <p>A responsive website using HTML5, CSS3 (flexbox, grid, BEM), built following to design mokup in Figma. JavaScript is used to add functionality to Form Fields in a Popup Box and save the edited values.</p>
                      <br/>
                      <p>Form Popup Modal: editing profile information, adding/deleting cards with images and titles unsing a link to photo and Forms are validated using javascript. Image popup for each card with Delete and Like button.</p>
                      <br/>
                   <p>Stack: HTML5, CSS3, flexbox, grid layout, BEM, Media queries, transition, JavaScript, DOM, Debugging Git, Figma, Form validation, OOP, Webpack</p>
                    </div>
                    <div class="location">
                      <img className="stack" src={html} />
                      <img className="stack" src={js} />
                      <img className="stack" src={css} />
                      <img className="stack" src={json} />
                      <img className="stack" src={api} />
                    </div>
                    <div class="price"></div>
                    <label for="card1" class="button return" aria-hidden="true">
                      <i class="fas fa-arrow-left"></i>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <a ></a>
              <input type="checkbox" id="card2" class="more" aria-hidden="true" />
              <div class="content">
                <div class="front" >
                  <div class="inner">
                    <h2>Around The U.S - React</h2>
                    <label for="card2" class="button" aria-hidden="true">
                      Details
                    </label>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <div class="info">
                      <a className="projectss" href="https://jess-dowd.github.io/around-react/" target='_blank'>
                        <img className="project_link" src={webpage} />
                        <div class="icon">
                          <i class="fas fa-users"></i>
                          <span>Website</span>
                        </div>
                      </a>
                    </div>
                    <div class="info">
                      <a className="projectss" href="https://github.com/Jess-Dowd/around-react" target='_blank'>
                        <img className="project_link" src={code} />
                        <div class="icon">
                          <i class="fas fa-users"></i>
                          <span>Code</span>
                        </div>
                      </a>
                    </div>
                    <div class="info">
                      <a className="projectss" href="https://github.com/Jess-Dowd/around-react/blob/main/README.md" target='_blank'>
                        <img className="project_link" src={demo} />
                        <div class="icon">
                          <i class="fas fa-users"></i>
                          <span>Demo</span>
                        </div>
                      </a>
                    </div>
                    <div class="description">
                    <p>The previous project takes the one before from vanilla JS to React using the Create React App. The React Framework is used to add functionality to Form Fields in a Popup Box and save the edited values. Used BEM methodology with a nested file structure.</p>
                      <br/>
                      <p>A responsive website using HTML5, CSS3 (flexbox, grid, BEM), JavaScript, built following the design mokup in Figma. This adaptive page includes form validation, interactive popups, fade-in and fade-out animations, functional like and delete buttons, modular JavaScript, and Object Oriented JS design.</p>
                      <br/>
                   <p>Stack: HTML5, CSS3, flexbox, grid layout, BEM, Media queries, transition, JavaScript/JSX, DOM, Debugging Git, Git/Github, Figma, Form validation, OOP, Webpack, NPM, React, React components, React hooks</p>
                    </div>
                    <div class="location">
                      <img className="stack" src={react} />
                      <img className="stack" src={jsx} />
                      <img className="stack" src={css} />
                      <img className="stack" src={json} />
                      <img className="stack" src={api} />
                    </div> <div class="price"></div>
                    <label for="card2" class="button return" aria-hidden="true">
                      <i class="fas fa-arrow-left"></i>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <input type="checkbox" id="card3" class="more" aria-hidden="true" />
              <div class="content">
                <div class="front" >
                  <div class="inner">
                    <h2>Portfolio Website - Jess Dowd</h2>
                    <label for="card3" class="button" aria-hidden="true">
                      Details
                    </label>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <div class="info">
                      <a className="projectss" href="https://jess-dowd.github.io/Jess_Dowd_Portfolio/" target='_blank'>
                        <img className="project_link" src={webpage} />
                        <div class="icon">
                          <i class="fas fa-users"></i>
                          <span>Website</span>
                        </div>
                      </a>
                    </div>
                    <div class="info">
                      <a className="projectss" href="https://github.com/Jess-Dowd/Jess_Dowd_Portfolio" target='_blank'>
                        <img className="project_link" src={code} />
                        <div class="icon">
                          <i class="fas fa-users"></i>
                          <span>Code</span>
                        </div>
                      </a>
                    </div>
                    <div class="info">
                      <a className="projectss" href="https://github.com/Jess-Dowd/Jess_Dowd_Portfolio/blob/main/README.md" target='_blank'>
                        <img className="project_link" src={demo} />
                        <div class="icon">
                          <i class="fas fa-users"></i>
                          <span>Demo</span>
                        </div>
                      </a>
                    </div>
                    <div class="description">
                      <p>--section under contruction--</p>
                      <p>--section under contruction--</p>
                    </div>
                    <div class="location">
                      <img className="stack" src={react} />
                      <img className="stack" src={jsx} />
                      <img className="stack" src={sass} />
                      <img className="stack" src={json} />

                    </div><div class="price"></div>
                    <label for="card3" class="button return" aria-hidden="true">
                      <i class="fas fa-arrow-left"></i>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <input type="checkbox" id="card4" class="more" aria-hidden="true" />
              <div class="content">
                <div class="front" >
                  <div class="inner">
                    <h2>From Portland to Portland</h2>
                    <label for="card4" class="button" aria-hidden="true">
                      Details
                    </label>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <div class="info">
                      <a className="projectss" href="https://jess-dowd.github.io/From_Portland_to_Portland/" target='_blank'>
                        <img className="project_link" src={webpage} />
                        <div class="icon">
                          <i class="fas fa-users"></i>
                          <span>Website</span>
                        </div>
                      </a>
                    </div>
                    <div class="info">
                      <a className="projectss" href="https://github.com/Jess-Dowd/From_Portland_to_Portland" target='_blank'>
                        <img className="project_link" src={code} />
                        <div class="icon">
                          <i class="fas fa-users"></i>
                          <span>Code</span>
                        </div>
                      </a>
                    </div>
                    <div class="description">
                    <p>This is my portfolio website. Take a look to get to knowe a little more about me, to see some of my past work, and find my contact info if you would like to chat, or work together!</p>
                      <br/>
                      <p>stack: React, JSX, SASS</p>
                   
                    </div>
                    <div class="location">
                      <img className="stack" src={html} />
                      <img className="stack" src={css} />
                    </div><div class="price"></div>
                    <label for="card4" class="button return" aria-hidden="true">
                      <i class="fas fa-arrow-left"></i>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <input type="checkbox" id="card5" class="more" aria-hidden="true" />
              <div class="content">
                <div class="front" >
                  <div class="inner">
                    <h2>Learning how to Learn</h2>
                    <label for="card5" class="button" aria-hidden="true">
                      Details
                    </label>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <div class="info">
                      <a className="projectss" href="https://jess-dowd.github.io/Learning_How_to_Learn/" target='_blank'>
                        <img className="project_link" src={webpage} />
                        <div class="icon">
                          <i class="fas fa-users"></i>
                          <span>Website</span>
                        </div>
                      </a>
                    </div>
                    <div class="info">
                      <a className="projectss" href="https://github.com/Jess-Dowd/Learning_How_to_Learn" target='_blank'>
                        <img className="project_link" src={code} />
                        <div class="icon">
                          <i class="fas fa-users"></i>
                          <span>Code</span>
                        </div>
                      </a>
                    </div>
                    <div class="description">
                    <p>Learning how to learn. This page describes different study techniques and methods along with resources to learn more.</p>
                      <br/>
                      <p>A simple one-page website using HTML5 and CSS3 It has an adaptive design that responds to most common screen sizes. Developed with vsc and gitbash. Used BEM for clean code and Figma for website specifications.</p>
                      <br/>
                   <p>Stack: HTML5, CSS3, Flexbox, BEM</p>
                    </div>
                    <div class="location">
                      <img className="stack" src={html} />
                      <img className="stack" src={css} />
                    </div><div class="price"></div>
                    <label for="card5" class="button return" aria-hidden="true">
                      <i class="fas fa-arrow-left"></i>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact">
          <a id="contact"></a>
          <div id='main'>

            <div id='info'>
              <div id='name'>
                <div id="contact">

                  <img className="project_link" src={email} />
                  <div class="icon">
                    <i class="fas fa-users"></i>
                    <span>Jessalyndowd@gmail.com </span>
                  </div>
                </div>
                <div id="contact">

                  <img className="project_link" src={phone} />
                  <div class="icon">
                    <i class="fas fa-users"></i>
                    <span>+66 62 398 6762</span>
                  </div>
                </div>
                <div id="contact">

                  <img className="project_link" src={location} />
                  <div class="icon">
                    <i class="fas fa-users"></i>
                    <span>MO, USA - Remote</span>
                  </div>
                </div>
              </div>
              <p id="work" >Open to Work - Updated 07/2021</p>
            </div>
          </div>
        </div>

      </body>

      <footer className="App-footer">
        <p>@2021 Jess Dowd</p>
      </footer>

      <div className="sidebar">
        <nav className="main-menu">
          <ul className="list">
            <li>
              <a href="#intro" className="menu-item">
                <img src={home} className="fa fa-home fa-2x"></img>
                <span className="nav-text">
                  Home
                </span>
              </a>

            </li>
            <li className="has-subnav">
              <a href="#about" className="menu-item">
                <img src={about} className="fa fa-laptop fa-2x"></img>
                <span className="nav-text">
                  About
                </span>
              </a>

            </li>
            <li className="has-subnav">
              <a className="menu-item" href="#projects">
                <img src={projects} className="fa fa-list fa-2x"></img>
                <span className="nav-text">
                  Projects
                </span>
              </a>

            </li>
            <li className="has-subnav">
              <a href="#contact" className="menu-item">
                <img src={contact} className="fa fa-folder-open fa-2x"></img>
                <span className="nav-text">
                  Contact
                </span>
              </a>

            </li>
            <li>
              <a href="https://www.linkedin.com/in/jessdoesreact/" className="menu-item" target="_blank">
                <img src={linkedIn} className="fa fa-bar-chart-o fa-2x"></img>
                <span className="nav-text">
                  LinkedIn
                </span>
              </a>
            </li>
            <li >
              <a href="https://github.com/Jess-Dowd" className="menu-item" target="_blank">
                <img src={github} className="fa fa-font fa-2x"></img>
                <span className="nav-text">
                  GitHub
                </span>
              </a>
            </li>
            <li >
              <a href={resume} className="menu-item" target="_blank">
                <img src={resumecv} className="fa fa-font fa-2x"></img>
                <span className="nav-text">
                  Resume
                </span>
              </a>
            </li>

          </ul>
        </nav>
      </div>


    </div>
  );
}


export default App;