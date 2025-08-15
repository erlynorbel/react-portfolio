import React from "react";
import GlareHover from "./GlareHover.jsx";
import './Projects.css';
const projects = [
  {
    img: "/images/recipenest.png",
    title: "RecipeNest",
    desc: "Your AI-powered kitchen companion for smart meal planning and inventory management.",
    modal: "project1Modal",
      
  },
  {
    img: "/images/norbeld-portfolio.png",
    title: "NorbelD Portfolio",
    desc: "A Portfolio Website with v0.dev with NextJS Framework.",
    modal: "project2Modal",
  },
  {
    img: "/images/paddlefrenzy.jpg",
    title: "Paddle Frenzy",
    desc: "JPCS E Week 24-25",
    modal: "project3Modal",
  },
];

const Projects = () => (
  <section id="portfolio" className="py-5">
    <div className="container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        <div className="row">
          {projects.map((project, idx) => (
            <div className="col-lg-4 col-md-6 mb-4" key={idx}>
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
              >
                <div className="card project-card h-100">
                  <img
                    src={project.img}
                    className="card-img-top"
                    alt={project.title + " preview"}
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h5 className="card-title project-title">{project.title}</h5>
                    <p className="card-text">{project.desc}</p>
                    <button
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target={`#${project.modal}`}
                    >
                      More Details
                    </button>
                  </div>
                </div>
              </GlareHover>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Projects;