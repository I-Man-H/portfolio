import { useState } from "react";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");

  const projects = [
    {
      title: "Multimodal Emotion Recognition",
      desc: "Research on emotion recognition using visual and physiological signals with deep learning and multimodal analysis.",
    },
    {
      title: "CIFAR-10 Image Classification",
      desc: "Implemented a CNN to classify 10 image categories using the CIFAR-10 dataset.",
    },
    {
      title: "MNIST Digit Classification",
      desc: "Built a handwritten digit classifier using convolutional neural networks.",
    },
    {
      title: "Object Detection with YOLOv3",
      desc: "Built a real-time object detection pipeline for detecting people and vehicles.",
    },
    {
      title: "OFDM Reception & Synchronisation",
      desc: "Implemented fading channel models and OFDM synchronisation algorithms.",
    },
    {
      title: "Smart Street Lighting System",
      desc: "Designed an intelligent lighting system that adjusts brightness based on vehicle presence.",
    },
  ];

const courses = [
  {
    title: "Digital Signal Processing",
  },
  {
    title: "Signals and Systems",
  },
  {
    title: "Technology and Engineering Management",
    link: "https://i-man-h.github.io/I-TEM/",
  },
  {
    title: "Introduction to Systems Engineering",
    link: "https://i-man-h.github.io/SystemEngineering/",
  },
  {
    title: "Power Systems and Power Electronics",
  },
  {
    title: "Introduction to Electronics",
  },
  {
    title: "Professional Practice 1",
    link: "https://i-man-h.github.io/PP1/",
  },
  {
    title: "Electronic Circuits",
  },
];

  const publications = [
    {
      title:
        "Deep learning model for simultaneous recognition of quantitative and qualitative emotion using visual and bio-sensing data",
      venue: "Computer Vision and Image Understanding, 2024",
      link: "https://doi.org/10.1016/j.cviu.2024.104121",
    },
    {
      title:
        "Assessing locomotive syndrome through instrumented five-time sit-to-stand test and machine learning",
      venue: "Sensors, 2024",
      link: "https://www.mdpi.com/1424-8220/24/23/7727",
    },
    {
      title: "Fall risk assessment using single IMU",
      venue: "IEEE MeMeA, 2024",
      link: "https://ieeexplore.ieee.org/abstract/document/10596880",
    },
    {
      title:
        "Locomotive Syndrome Assessment in Older Adults Using a Single Inertial Measurement Unit",
      venue: "IEEE INERTIAL, 2023",
      link: "https://doi.org/10.1109/INERTIAL56358.2023.10103944",
    },
    {
      title:
        "Performance analysis of a postural balance assessment mat prototype using inertial sensor",
      venue: "IEEE Sensors, 2022",
      link: "https://ieeexplore.ieee.org/abstract/document/9967035/",
    },
  ];

  const renderPage = () => {
    if (page === "projects") {
      return (
        <section className="section">
          <h2>Projects</h2>
          <div className="card-grid">
            {projects.map((p) => (
              <div className="card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>
      );
    }

    if (page === "courses") {
  return (
    <section className="section">
      <h2>Courses</h2>
      <div className="card-grid">
        {courses.map((course) => {
          // If course has a link → clickable card
          if (course.link) {
            return (
              <a
                className="card paper-link"
                key={course.title}
                href={course.link}
                target="_blank"
                rel="noreferrer"
              >
                <h3>{course.title}</h3>
                <p>Open course page</p>
              </a>
            );
          }

          // If no link → normal card
          return (
            <div className="card" key={course.title}>
              <h3>{course.title}</h3>
              <p>Course page coming soon</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

    if (page === "research") {
      return (
        <section className="section">
          <h2>Research</h2>
          <p className="lead">
            My research focuses on multimodal emotion recognition,
            physiological signal analysis, machine learning, computer vision,
            and sensor-based intelligent systems.
          </p>

          <div className="card-grid">
            {publications.map((paper) => (
              <a
                className="card paper-link"
                key={paper.title}
                href={paper.link}
                target="_blank"
                rel="noreferrer"
              >
                <h3>{paper.title}</h3>
                <p>{paper.venue}</p>
              </a>
            ))}
          </div>
        </section>
      );
    }

    if (page === "contact") {
      return (
        <section className="section">
          <h2>Contact Me</h2>
          <div className="card-grid">
            <a className="card paper-link" href="mailto:imanh7294@gmail.com">
              <h3>Email</h3>
              <p>imanh7294@gmail.com</p>
            </a>
            <a
              className="card paper-link"
              href="https://github.com/I-Man-H"
              target="_blank"
              rel="noreferrer"
            >
              <h3>GitHub</h3>
              <p>github.com/I-Man-H</p>
            </a>
            <a className="card paper-link" href="https://www.linkedin.com/in/i-man-hosseini/">
              <h3>LinkedIn</h3>
              <p>Find me on LinkedIn</p>
            </a>
            <a className="card paper-link" href="https://www.youtube.com/@I-ManTT">
              <h3>YouTube</h3>
              <p>Please Like and Subscribe my YouTube Channel.</p>
            </a>
          </div>
        </section>
      );
    }

    if (page === "hobbies") {
      return (
        <section className="section">
          <h2>Hobbies</h2>
          <div className="card">
            <h3>🏓 Table Tennis</h3>
            <p>
              I play competitive table tennis and share match videos,
              tournament content, and training-related media.
            </p>
            <p>
              <a href="#">Add your YouTube channel link here</a>
            </p>
          </div>
        </section>
      );
    }

    return (
      <>
        <section className="hero">
          <p className="eyebrow">
            MPhil Candidate · Machine Learning · Computer Vision · Signal
            Processing
          </p>
          <h1>Iman Hosseini</h1>
          <p className="hero-text">
            Researcher, engineer, and educator building intelligent systems with
            data, sensors, and AI.
          </p>
        </section>

        <section className="section">
          <h2>About Me</h2>
          <p className="lead">
            I am a Sydney-based computer science researcher with experience
            across machine learning, computer vision, signal processing, and
            multimodal data analysis.
          </p>
          <p className="lead">
            Alongside research, I have strong experience in teaching
            engineering and computing courses, building reproducible workflows,
            and developing technical projects spanning software,
            communications, and embedded systems.
          </p>
        </section>

        <section className="section">
          <h2>Core Skills</h2>
          <div className="tags">
            {[
              "Python",
              "C++",
              "MATLAB",
              "PyTorch",
              "TensorFlow",
              "OpenCV",
              "scikit-learn",
              "Signal Processing",
              "Machine Learning",
              "Computer Vision",
              "Git",
              "Linux",
            ].map((skill) => (
              <span className="tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>
      </>
    );
  };

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand" onClick={() => setPage("home")}>
          Iman Hosseini Portfolio
        </div>
        <nav className="nav">
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("projects")}>Projects</button>
          <button onClick={() => setPage("courses")}>Courses</button>
          <button onClick={() => setPage("research")}>Research</button>
          <button onClick={() => setPage("contact")}>Contact Me</button>
          <button onClick={() => setPage("hobbies")}>Hobbies</button>
        </nav>
      </header>

      <main>{renderPage()}</main>

      <footer className="footer">
        © 2026 Iman Hosseini
      </footer>
    </div>
  );
}