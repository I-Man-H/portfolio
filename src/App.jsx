import { useMemo, useState } from "react";
import { Mail, Github, Linkedin, Youtube, GraduationCap, BookOpen, FolderKanban, FlaskConical, Trophy, Home, Menu, X, ExternalLink } from "lucide-react";

export default function ImanGithubPortfolioPage() {
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { key: "home", label: "Home", icon: Home },
      { key: "projects", label: "Projects", icon: FolderKanban },
      { key: "courses", label: "Courses", icon: BookOpen },
      { key: "research", label: "Research", icon: FlaskConical },
      { key: "contact", label: "Contact Me", icon: Mail },
      { key: "hobbies", label: "Hobbies", icon: Trophy },
    ],
    []
  );

  const projects = [
    {
      title: "Multimodal Emotion Recognition",
      description:
        "Research on emotion recognition using visual and physiological signals, combining deep learning, computer vision, and multimodal analysis.",
      tech: ["Python", "PyTorch", "TensorFlow", "Computer Vision", "Biosignals"],
      link: "#",
      category: "Research",
    },
    {
      title: "CIFAR-10 Image Classification",
      description:
        "Implemented a convolutional neural network to classify 10 image categories using the CIFAR-10 dataset.",
      tech: ["Python", "PyTorch", "Deep Learning"],
      link: "#",
      category: "Machine Learning",
    },
    {
      title: "MNIST Digit Classification",
      description:
        "Built a handwritten digit classifier using convolutional neural networks and evaluated model performance in Colab.",
      tech: ["Python", "PyTorch"],
      link: "#",
      category: "Machine Learning",
    },
    {
      title: "Object Detection with YOLOv3",
      description:
        "Built a real-time object detection pipeline for detecting people and vehicles in images.",
      tech: ["Python", "CNN", "Computer Vision"],
      link: "#",
      category: "Computer Vision",
    },
    {
      title: "Breast Cancer Classification",
      description:
        "Applied machine learning models to predict benign vs malignant tumours using feature-based analysis.",
      tech: ["Python", "Machine Learning", "Data Analysis"],
      link: "#",
      category: "Health AI",
    },
    {
      title: "Lake George Modelling",
      description:
        "Analysed geographical data to model water-level dynamics and predict filling and evaporation behaviour.",
      tech: ["Python", "Modelling", "Statistical Analysis"],
      link: "#",
      category: "Data Science",
    },
    {
      title: "OFDM Reception & Synchronisation",
      description:
        "Implemented fading channel models and OFDM synchronisation algorithms for digital communications research.",
      tech: ["Signal Processing", "Communications", "MATLAB"],
      link: "#",
      category: "Signal Processing",
    },
    {
      title: "Smart Street Lighting System",
      description:
        "Designed an intelligent street-lighting system that dynamically adjusts brightness based on vehicle presence to reduce energy consumption.",
      tech: ["Embedded Systems", "Systems Engineering"],
      link: "#",
      category: "Engineering",
    },
    {
      title: "Touchscreen Synthesizer",
      description:
        "Designed an FPGA-based synthesizer capable of generating tones and effects using a touchscreen interface.",
      tech: ["FPGA", "Digital Systems"],
      link: "#",
      category: "Engineering",
    },
    {
      title: "Smart-device Docking Station",
      description:
        "Designed and tested a multi-device power supply system with converter design and circuit validation.",
      tech: ["Power Electronics", "LT-Spice"],
      link: "#",
      category: "Engineering",
    },
  ];

  const publications = [
    {
      title:
        "Deep learning model for simultaneous recognition of quantitative and qualitative emotion using visual and bio-sensing data",
      venue: "Computer Vision and Image Understanding, 2024",
      link: "https://doi.org/10.1016/j.cviu.2024.104121",
      type: "Journal Article",
    },
    {
      title:
        "Assessing locomotive syndrome through instrumented five-time sit-to-stand test and machine learning",
      venue: "Sensors, 2024",
      link: "https://www.mdpi.com/1424-8220/24/23/7727",
      type: "Journal Article",
    },
    {
      title: "Fall risk assessment using single IMU",
      venue: "IEEE MeMeA, 2024",
      link: "#",
      type: "Conference Paper",
    },
    {
      title:
        "Locomotive Syndrome Assessment in Older Adults Using a Single Inertial Measurement Unit",
      venue: "IEEE INERTIAL, 2023",
      link: "https://doi.org/10.1109/INERTIAL56358.2023.10103944",
      type: "Conference Paper",
    },
  ];

  const courses = [
    {
      title: "Digital Signal Processing",
      role: "Lecturer, Tutor and Lab Demonstrator",
      org: "University of Canberra / Australian National University",
    },
    {
      title: "Signals and Systems",
      role: "Lecturer and Tutor",
      org: "University of Canberra",
    },
    {
      title: "Technology and Engineering Management",
      role: "Tutor and Project Mentor",
      org: "University of Canberra",
    },
    {
      title: "Introduction to Systems Engineering",
      role: "Tutor",
      org: "Australian National University",
    },
    {
      title: "Power Systems and Power Electronics",
      role: "Tutor and Lab Demonstrator",
      org: "Australian National University",
    },
    {
      title: "Introduction to Electronics",
      role: "Tutor and Lab Demonstrator",
      org: "Australian National University",
    },
    {
      title: "Professional Practice 1",
      role: "Tutor and Project Mentor",
      org: "Australian National University",
    },
    {
      title: "Electronic Circuits",
      role: "Tutor",
      org: "Persian Gulf University",
    },
  ];

  const skills = [
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
    "Data Analysis",
    "LaTeX",
    "Git",
    "Linux",
  ];

  function goToPage(page) {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  }

  function PageShell({ title, eyebrow, description, children }) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-16">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-sky-300/80">{eyebrow}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
          {description ? <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">{description}</p> : null}
        </div>
        {children}
      </div>
    );
  }

  function HomePage() {
    return (
      <>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.24),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_25%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.12),transparent_35%)]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-28">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1 text-sm text-sky-300">
                MPhil Candidate · Machine Learning · Computer Vision · Signal Processing
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Iman Hosseini</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Researcher, engineer, and educator building intelligent systems with data, sensors, and AI.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
                I work across multimodal emotion recognition, machine learning pipelines, sensor-based analysis,
                engineering systems, and university teaching.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={() => goToPage("projects")} className="rounded-2xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400">
                  Explore Projects
                </button>
                <button onClick={() => goToPage("research")} className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5">
                  View Research
                </button>
                <button onClick={() => goToPage("contact")} className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5">
                  Contact Me
                </button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Quick Snapshot</p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <StatCard value="4+" label="Publications" />
                  <StatCard value="10+" label="Projects" />
                  <StatCard value="10+" label="Courses Taught" />
                  <StatCard value="Sydney" label="Based In" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-semibold">About Me</h2>
              <p className="mt-5 leading-7 text-slate-300">
                I am a Sydney-based computer science researcher with experience across machine learning, computer
                vision, signal processing, and multimodal data analysis. My work focuses on combining technical depth
                with practical implementation and clear communication.
              </p>
              <p className="mt-4 leading-7 text-slate-300">
                Alongside research, I have strong experience in teaching engineering and computing courses, building
                reproducible workflows, and developing technical projects spanning software, communications, and
                embedded systems.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-semibold">Core Skills</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {skills.slice(0, 10).map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
              <button onClick={() => goToPage("courses")} className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-sky-300 hover:text-sky-200">
                View courses and teaching <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  function ProjectsPage() {
    return (
      <PageShell
        eyebrow="Portfolio"
        title="Projects"
        description="A selection of research, software, and engineering projects across machine learning, computer vision, signal processing, communications, and embedded systems."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg transition hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/[0.07]">
              <div className="mb-3 inline-flex rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-300">
                {project.category}
              </div>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
              <a href={project.link} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-sky-300 transition group-hover:text-sky-200">
                View project <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </PageShell>
    );
  }

  function CoursesPage() {
    return (
      <PageShell
        eyebrow="Teaching"
        title="Courses"
        description="Courses and academic support roles across engineering, signal processing, electronics, and systems subjects."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {courses.map((course) => (
            <div key={course.title + course.org} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <p className="mt-2 text-sky-300">{course.role}</p>
              <p className="mt-2 text-sm text-slate-400">{course.org}</p>
            </div>
          ))}
        </div>
      </PageShell>
    );
  }

  function ResearchPage() {
    return (
      <PageShell
        eyebrow="Academic Work"
        title="Research"
        description="My research focuses on multimodal emotion recognition, physiological signal analysis, sensor-based assessment, machine learning, and computer vision."
      >
        <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-semibold">Research Focus</h3>
              <p className="mt-4 leading-7 text-slate-300">
                I’m interested in building intelligent systems that combine visual data, biosignals, and behavioural
                information for robust analysis. My work spans reproducible machine learning pipelines, multimodal
                data fusion, and interpretable research workflows.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-semibold">Current Topic</h3>
              <p className="mt-4 text-slate-300">
                Multimodal Emotion Recognition Agent using visual and physiological signals
              </p>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7">
            <h3 className="text-xl font-semibold">Publications</h3>
            <div className="mt-5 space-y-4">
              {publications.map((paper) => (
                <a key={paper.title} href={paper.link} className="block rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition hover:border-sky-400/30 hover:bg-slate-900">
                  <div className="inline-flex rounded-full bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-300">
                    {paper.type}
                  </div>
                  <div className="mt-3 font-medium text-slate-100">{paper.title}</div>
                  <div className="mt-1 text-sm text-slate-400">{paper.venue}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </PageShell>
    );
  }

  function ContactPage() {
    return (
      <PageShell
        eyebrow="Get In Touch"
        title="Contact Me"
        description="You can use this page for professional contact details, collaboration opportunities, teaching inquiries, and links to your online profiles."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <ContactCard icon={Mail} title="Email" value="imanh7294@gmail.com" href="mailto:imanh7294@gmail.com" />
          <ContactCard icon={Github} title="GitHub" value="github.com/I-Man-H" href="https://github.com/I-Man-H" />
          <ContactCard icon={Linkedin} title="LinkedIn" value="Add your LinkedIn profile link" href="#" />
          <ContactCard icon={Youtube} title="YouTube" value="Add your table tennis YouTube channel" href="#" />
        </div>
      </PageShell>
    );
  }

  function HobbiesPage() {
    return (
      <PageShell
        eyebrow="Beyond Work"
        title="Hobbies"
        description="A space to show the personal side of your portfolio, including your table tennis content and other interests outside research and teaching."
      >
        <div className="grid gap-8 md:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8">
            <div className="text-5xl">🏓</div>
            <h3 className="mt-5 text-2xl font-semibold">Table Tennis</h3>
            <p className="mt-4 leading-7 text-slate-300">
              I play competitive table tennis and share match videos, tournament content, and training-related media.
              This section can link directly to your YouTube channel, featured matches, or tournament highlights.
            </p>
            <a href="#" className="mt-6 inline-flex rounded-2xl bg-red-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-400">
              Visit YouTube Channel
            </a>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8">
            <h3 className="text-xl font-semibold">What you can add here</h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              <li>• Embedded YouTube videos of your matches</li>
              <li>• Tournament highlights and short descriptions</li>
              <li>• Equipment section for blade, rubbers, and setup</li>
              <li>• Gallery or match thumbnails</li>
            </ul>
          </div>
        </div>
      </PageShell>
    );
  }

  function renderPage() {
    switch (currentPage) {
      case "projects":
        return <ProjectsPage />;
      case "courses":
        return <CoursesPage />;
      case "research":
        return <ResearchPage />;
      case "contact":
        return <ContactPage />;
      case "hobbies":
        return <HobbiesPage />;
      case "home":
      default:
        return <HomePage />;
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <button onClick={() => goToPage("home")} className="flex items-center gap-3 text-left">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <div className="font-semibold">Iman Hosseini</div>
              <div className="text-xs text-slate-400">Portfolio Website</div>
            </div>
          </button>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = currentPage === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => goToPage(item.key)}
                  className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm transition ${
                    active ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="rounded-2xl border border-white/10 p-2 text-slate-300 md:hidden"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-white/10 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.key}
                    onClick={() => goToPage(item.key)}
                    className="inline-flex items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm text-slate-300 hover:bg-white/5 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}
      </header>

      <main>{renderPage()}</main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-10">
          <p>© {new Date().getFullYear()} Iman Hosseini</p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => goToPage("home")} className="hover:text-slate-200">Home</button>
            <button onClick={() => goToPage("projects")} className="hover:text-slate-200">Projects</button>
            <button onClick={() => goToPage("research")} className="hover:text-slate-200">Research</button>
            <button onClick={() => goToPage("contact")} className="hover:text-slate-200">Contact</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-slate-400">{label}</div>
    </div>
  );
}

function ContactCard({ icon: Icon, title, value, href }) {
  return (
    <a href={href} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 transition hover:border-sky-400/30 hover:bg-white/[0.07]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{value}</p>
    </a>
  );
}
