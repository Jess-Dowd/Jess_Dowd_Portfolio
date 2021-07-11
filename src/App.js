import logo from './images/logo.png';
import React from "react";
import home from "./images/home.png";
import about from "./images/user.png";
import projects from "./images/programming.png";
import contact from "./images/phone-contact.png";
import linkedIn from "./images/linkedin.png";
import github from "./images/github-white.png";
import './blocks/App.scss';
import whiterabbit from './vendor/fonts/whitrabt.ttf';
import profile from "./images/jess-pic.jpg";
import resume from "./vendor/document/Jess_Dowd_resume.pdf";

function App() {
  return (
    <div className="App">
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <header className="App-header">
        <img class="logo" src={logo} alt="page logo" />
      </header>

      <body className="App-body">


        <div className="intro">
          <a id="intro"></a>
          <h1 class="wrapper wordCarousel title">

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

          <div class="container">
            <a id="about"></a>
            <div class="row">
              <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="our-team">

                  <div class="picture">
                    <img class="img-fluid" src={profile} />
                  </div>

                  <div class="team-content">
                    <h3 class="name">First and foremost, I love writing code. Ever since writing my first app in JavaScript and manipulating it to produce the desired output, I have been obsessed with the idea of using software to solve practical problems. Software engineering is a never-ending puzzle that I am passionately engaged in solving. I believe in the power of programming to transform and improve the lives of people around the world.
                      Web development calls to all my passions; it incorporates creativity and problem solving and I'm allowed to break it to improve the code (in a separate Git branch, of course). I love applying responsive design principles and watching my web pages shrink into mobile screens and still look amazing. It's oddly satisfying. I think in a way I'm kind of like those web pages; I'm moldable, but I still keep my creative flair intact.
                      Even when I leave the office, I tend to continue writing code at home. Working freelance, I design, build, and maintain websites for small businesses.</h3>
                    <br />
                    <h4 class="name"> I am a Finance Major with a background in eCommerce and I find an interesting crossover between my software and my business experience. Both pursuits challenge so many aspects of the intellect: creativity, organization, sequential processing, problem-solving. This is what keeps me up at night, a never-ending thirst to create beautiful, powerful things and share them with the world.
                      My specialties include Front-End development, React, JSX, CSS, quickly learning new skills and languages, problem-solving, domain-driven design, responsive design principles, website optimization, and BEM methods of organizing code. I'm still enthusiastically learning any other programming languages, frameworks, or principles I can integrate into the coding web in my head.</h4>
                  </div>

                  <ul class="social">
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
                      <img src={about} className="fa fa-bar-chart-o fa-2x q"></img>
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
          <a id="projects"></a>

          <div class="containers">
            <div class="images">
              <img src="http://mistillas.cl/wp-content/uploads/2018/04/Nike-Epic-React-Flyknit-%E2%80%9CPearl-Pink%E2%80%9D-01.jpg" />
            </div>
            <div class="slideshow-buttons">
              <div class="one"></div>
              <div class="two"></div>
              <div class="three"></div>
              <div class="four"></div>
            </div>
            <p class="pick p">choose size</p>
            <div class="sizes">
              <div class="size">5</div>
              <div class="size">6</div>
              <div class="size">7</div>
              <div class="size">8</div>
              <div class="size">9</div>
              <div class="size">10</div>
              <div class="size">11</div>
              <div class="size">12</div>
            </div>
            <div class="product">
              <p class=" p">Women's Running Shoe</p>
              <h1  class="h1">Nike Epic React Flyknit</h1>
              <h2>$150</h2>
              <p class="desc p">The Nike Epic React Flyknit foam cushioning is responsive yet light-weight, durable yet soft. This creates a sensation that not only enhances the feeling of moving forward, but makes running feel fun, too.</p>
              <div class="buttons">
                <button class="add">Add to Cart</button>
                <button class="like"><span>♥</span></button>
              </div>
            </div>
          </div>
        </div>

        <div className="contact">
          <a id="contact"></a>
        </div>

      </body>

      <footer className="App-footer">
      </footer>

      <div className="sidebar">
        <nav className="main-menu">
          <ul className="list">
            <li>
              <a href="intro" className="menu-item">
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
                <img src={github} className="fa fa-font fa-2x"></img>
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