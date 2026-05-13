import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  FileText,
  GraduationCap,
  GitFork,
  Link,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Sparkles,
  MessageCircle,
} from 'lucide-react'
import profilePhoto from './assets/ronit-maurya.png'
import './App.css'

const navItems = ['About', 'Skills', 'Projects', 'Education', 'Contact']

const skills = {
  Languages: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'C++'],
  'Frameworks & Libraries': ['React.js', 'Tailwind CSS'],
  'Tools & Platforms': ['Git', 'GitHub', 'Netlify', 'GitHub Pages', 'Linux', 'Canva', 'VS Code'],
  'Frontend Strengths': [
    'Responsive Web Design',
    'UI/UX Fundamentals',
    'Problem Solving',
    'Debugging',
    'Version Control',
  ],
}

const projects = [
  {
    title: 'Global Dev Gigs',
    stack: 'HTML, CSS, JavaScript',
    link: 'https://69f3968306c85d6a7315c655--jazzy-crostata-a10ece.netlify.app/',
    label: 'Live Project',
    description:
      'A responsive global tech job board UI with role cards, pay ranges, location data, level tags, and quick apply interactions.',
  },
  {
    title: 'ITM Chat Bot',
    stack: 'HTML, CSS, JavaScript',
    link: 'https://ronit-99.github.io/ITM-chatbot/?utm_source=chatgpt.com',
    label: 'Live Project',
    description:
      'A chatbot interface for student interaction with a clean responsive layout, interactive messaging flow, and GitHub-managed workflow.',
  },
  {
    title: 'Personal Portfolio Website',
    stack: 'React, CSS, JavaScript',
    description:
      'A developer portfolio that showcases projects, technical skills, contact details, interactive sections, and a modern responsive layout.',
  },
  {
    title: 'Stone Paper Scissor Game',
    stack: 'HTML, CSS, JavaScript',
    link: 'https://ronit-99.github.io/Game/',
    label: 'Live Project',
    description:
      'An interactive browser game with score tracking, DOM manipulation, game logic, and a responsive user interface.',
  },
]

const strengths = ['Quick Learner', 'Team Collaboration', 'Communication', 'Consistent Problem Solver', 'Adaptable']
const certifications = ['Frontend Web Development Certification', 'JavaScript Fundamentals', 'Git & GitHub Basics']
const documents = [
  {
    title: 'Frontend Web Development Certificate',
    href: '/docs/frontend-web-development-certificate.pdf',
  },
  {
    title: 'Additional Certificate',
    href: '/docs/ronit-maurya-certificate-2024.pdf',
  },
]

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8fb] text-slate-900">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.16),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(59,130,246,0.14),transparent_30%),linear-gradient(135deg,#f8fafc,#eef6f4_45%,#f8fafc)]" />

      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3 font-semibold text-slate-950">
            <span className="grid size-10 place-items-center rounded-lg bg-slate-950 text-sm text-white shadow-lg shadow-slate-950/10">
              RM
            </span>
            <span>Ronit Maurya</span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-md px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-950 hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="mailto:ronitmaurya99@gmail.com"
            className="inline-flex items-center gap-2 rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-teal-600/20 transition hover:-translate-y-0.5 hover:bg-teal-700"
          >
            <Mail size={16} />
            Hire Me
          </a>
        </nav>
      </header>

      <section id="home" className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:py-24">
        <div className="reveal">
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-teal-200 bg-white/80 px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm">
            <Sparkles size={16} />
            Frontend Developer | React Developer | BCA Student
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.05] text-slate-950 sm:text-6xl lg:text-7xl">
            Building polished web experiences with React and clean UI.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Motivated and detail-oriented BCA student from Dehradun with hands-on experience in frontend development,
            responsive interfaces, real-world projects, Git workflows, and user-friendly digital experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-5 py-3 font-semibold text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-1 hover:bg-slate-800"
            >
              View Projects
              <ArrowUpRight size={18} />
            </a>
            <a
              href="https://github.com/ronit-99"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-teal-300 hover:text-teal-700"
            >
              <GitFork size={18} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ronit-maurya-b0408b340"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:text-blue-700"
            >
              <Link size={18} />
              LinkedIn
            </a>
            <a
              href="/docs/ronit-maurya-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-teal-300 hover:text-teal-700"
            >
              <FileText size={18} />
              Resume
            </a>
          </div>

          <div className="mt-10 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
            <InfoPill icon={<MapPin size={17} />} text="Dehradun, Uttarakhand" />
            <InfoPill icon={<Phone size={17} />} text="+91 7817901364" />
            <InfoPill icon={<Mail size={17} />} text="ronitmaurya99@gmail.com" />
          </div>
        </div>

        <div className="photo-stage reveal delay-2">
          <div className="absolute -left-4 top-10 z-30 hidden rounded-md bg-white px-4 py-3 shadow-xl shadow-slate-900/10 sm:block">
            <p className="text-sm font-bold text-slate-950">Active GitHub Contributor</p>
            <p className="text-xs text-slate-500">Frontend projects and deployments</p>
          </div>
          <div className="absolute -right-2 bottom-12 hidden rounded-md bg-slate-950 px-4 py-3 text-white shadow-xl shadow-slate-900/20 sm:block">
            <p className="text-sm font-bold">React + Tailwind</p>
            <p className="text-xs text-slate-300">Modern responsive builds</p>
          </div>
          <img
            src={profilePhoto}
            alt="Ronit Maurya"
            className="relative z-10 mx-auto h-[220px] w-full max-w-[190px] rounded-lg object-cover object-top shadow-2xl shadow-slate-900/20 sm:h-[260px] sm:max-w-[220px]"
          />
        </div>
      </section>

      <Section id="about" label="About" title="A frontend developer focused on usable, responsive products.">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-white bg-slate-950 p-7 text-white shadow-xl shadow-slate-900/10">
            <Rocket className="mb-6 text-teal-300" size={34} />
            <p className="text-lg leading-8 text-slate-200">
              I enjoy turning ideas into clear interfaces, solving frontend problems, and improving user experience
              through thoughtful layout, smooth interactions, and reliable deployment workflows.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Focus', 'Frontend Development, React Development, and Full Stack Web Technologies'],
              ['Deployment', 'Comfortable with GitHub Pages, Netlify, Git, and GitHub workflows'],
              ['Languages', 'English and Hindi'],
              ['Mindset', 'Quick learner, adaptable, collaborative, and consistent with problem solving'],
            ].map(([title, text]) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/8">
                <h3 className="font-bold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="skills" label="Skills" title="Technical toolkit for modern frontend work.">
        <div className="grid gap-5 md:grid-cols-2">
          {Object.entries(skills).map(([group, items], index) => (
            <article
              key={group}
              className="reveal-card rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/8"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-lg bg-teal-50 text-teal-700">
                  <Code2 size={22} />
                </span>
                <h3 className="text-xl font-bold text-slate-950">{group}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="projects" label="Projects" title="Real-world projects with responsive UI and interaction logic.">
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group reveal-card rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-slate-900/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-950">{project.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-teal-700">{project.stack}</p>
                </div>
                <BriefcaseBusiness className="shrink-0 text-slate-300 transition group-hover:text-blue-500" size={28} />
              </div>
              <p className="leading-7 text-slate-600">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-bold text-slate-950 transition hover:text-teal-700"
                >
                  {project.label}
                  <ArrowUpRight size={18} />
                </a>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Section id="education" label="Education" title="Learning foundation and professional growth.">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm">
            <GraduationCap className="mb-5 text-blue-600" size={34} />
            <p className="text-sm font-bold uppercase text-teal-700">2024 - 2027</p>
            <h3 className="mt-3 text-2xl font-black text-slate-950">Bachelor of Computer Applications (BCA)</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Institute Of Technology and Management, affiliated with Hemvati Nandan Bahuguna Garhwal University.
            </p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm">
            <BadgeCheck className="mb-5 text-teal-600" size={34} />
            <h3 className="text-2xl font-black text-slate-950">Certifications</h3>
            <div className="mt-5 space-y-3">
              {certifications.map((item) => (
                <p key={item} className="rounded-md bg-slate-50 px-4 py-3 font-semibold text-slate-700">
                  {item}
                </p>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {documents.map((document) => (
                <a
                  key={document.href}
                  href={document.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-teal-600 px-4 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-teal-700"
                >
                  <FileText size={16} />
                  {document.title}
                </a>
              ))}
            </div>
          </article>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          {strengths.map((item) => (
            <span key={item} className="rounded-md bg-slate-950 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-slate-950/10">
              {item}
            </span>
          ))}
        </div>
      </Section>

      <section id="contact" className="mx-auto max-w-7xl px-5 pb-12 pt-6 lg:px-8 lg:pb-20">
        <div className="rounded-lg bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/20 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase text-teal-300">Contact</p>
              <h2 className="mt-3 text-4xl font-black sm:text-5xl">Let&apos;s build something clean and useful.</h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                Available for frontend development opportunities, React projects, internships, and collaboration.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:ronitmaurya99@gmail.com" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-bold text-slate-950 transition hover:-translate-y-1">
                <Mail size={18} />
                Email Me
              </a>
              <a href="/docs/ronit-maurya-resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-white/10">
                <FileText size={18} />
                Resume
              </a>
              <a href="tel:+917817901364" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-white/10">
                <Phone size={18} />
                Call
              </a>
              <a href="https://wa.me/917817901364" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-white/10">
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function InfoPill({ icon, text }) {
  return (
    <div className="flex min-h-12 min-w-0 items-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
      <span className="shrink-0 text-teal-700">{icon}</span>
      <span className="min-w-0 break-words font-semibold">{text}</span>
    </div>
  )
}

function Section({ id, label, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-7xl scroll-mt-24 px-5 py-12 lg:px-8 lg:py-16">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-bold uppercase text-teal-700">{label}</p>
        <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">{title}</h2>
      </div>
      {children}
    </section>
  )
}

export default App
