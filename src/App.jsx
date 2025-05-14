import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, AnimatePresence } from 'framer-motion'
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import cert1 from './assets/certificado1.jpg'
import cert2 from './assets/certificado2.jpg'
import cert3 from './assets/certificado3.jpg'
import cvPDF from './assets/EricTrebinoCV.pdf'

const CyberPortfolio = () => {
  // 1. Todos los useState primero
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)

  // 2. Luego los useRef
  const containerRef = useRef(null)

  // 3. Hooks de Framer Motion
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const socialLinks = [
  {
    name: 'EMAIL',
    url: 'mailto:erictrebino48@gmail.com'
  },
  {
    name: 'LINKEDIN',
    url: 'https://www.linkedin.com/in/trebinoeric?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2HjKuH30SF6znTeFKwremw%3D%3D'
  }
]

  const translations = {
  en: {
    navbar: {
      home: 'Home',
      certifications: 'Certifications',
      skills: 'Skills',
      contact: 'Contact'
    },
    role: 'Cybersecurity Analyst',
    explore: 'EXPLORE ACHIEVEMENTS',
    download: 'DOWNLOAD CV',
    certifications: 'CERTIFICATIONS',
    skills: 'PROFESSIONAL SKILLS',
    technical: 'TECHNICAL COMPETENCIES',
    abilities: 'Abilities',
    languages: 'Languages',
    softSkills: 'SOFT SKILLS & LANGUAGES',
    experience: 'PROFESSIONAL EXPERIENCE',
    contactTitle: "LET'S CONNECT",
    contactText: "Reach out through your favorite channel — I'm always open to new challenges and collaborations.",
    rights: 'ALL RIGHTS RESERVED.',
    heroText: "Protecting digital assets through proactive threat detection and risk mitigation.",
    certificationsTitle: 'CERTIFICATIONS',
    viewCertificate: 'VIEW CERTIFICATE',
    hackingTitle: "Ethical Hacking",
  hackingSkills: [
    "Exploiting Applications",
    "Exploiting Networks",
    "IoT Security",
    "Penetration Testing",
    "Vulnerability Assessment",
    "Vulnerability Scanning"
  ],
  cybersecurityTitle: "Cybersecurity Analysis",
  cybersecuritySkills: [
    "Access Control",
    "Application Security",
    "Firewalls",
    "IP/TCP/UDP Vulnerabilities",
    "Network Hardening",
    "Endpoint Protection"
  ],
    abilityTags: ['Commitment', 'Proactivity', 'Teamwork', 'Communication', 'Problem-solving', 'Continuous learning'],
    languageTags: ['Spanish - Native', 'English - B2'],
    experienceEntries: [
      {
        title: 'Researcher and Analyst in Cybersecurity',
        period: 'GIC LINES - UTN FRLP · 2024 - Present',
        tasks: [
          'Conducted research on cybersecurity trends and attack techniques',
          'Performed web vulnerability analysis and penetration testing',
          'Participated in CTF simulations and training programs'
        ]
      },
      {
        title: 'Researcher and Developer in Artificial Intelligence',
        period: 'AI Laboratory - UTN FRLP · 2023 - 2024',
        tasks: [
          'Designed and developed a chatbot for academic support',
          'Worked on enhancing student interaction through AI'
        ]
      }
    ],
    projectTitles: {
      project1: 'ETHICAL HACKER COURSE',
      project2: 'JUNIOR CYBERSECURITY ANALYST CAREER PATH'
    },
    projectCategories: {
      project1: 'NETWORK SECURITY, CYBERSECURITY',
      project2: 'CYBERSECURITY, NETWORK SECURITY'
    },
    projectDescriptions: {
      project1: 'This certification validates the completion of Cisco’s Ethical Hacker course. The holder has a strong understanding of legal and compliance frameworks and is proficient in scoping, executing, and reporting vulnerability assessments, as well as recommending mitigation strategies. The training included up to 34 hands-on labs using Kali Linux, WebSploit, and other cybersecurity tools.',
      project2: "Certification earned upon completing Cisco Networking Academy's training path focused on cybersecurity fundamentals. The program understanding threats and vulnerabilities to implementing protective measures in networks and systems."
    },
  },
  es: {
    navbar: {
      home: 'Inicio',
      certifications: 'Certificaciones',
      skills: 'Habilidades',
      contact: 'Contacto'
    },
    role: 'Analista de Ciberseguridad',
    explore: 'EXPLORAR LOGROS',
    download: 'DESCARGAR CV',
    certifications: 'CERTIFICACIONES',
    skills: 'HABILIDADES PROFESIONALES',
    technical: 'COMPETENCIAS TÉCNICAS',
    abilities: 'Habilidades',
    languages: 'Idiomas',
    softSkills: 'HABILIDADES BLANDAS & IDIOMAS',
    experience: 'EXPERIENCIA PROFESIONAL',
    contactTitle: 'VAMOS A CONECTAR',
    contactText: 'Contactame por tu medio preferido — siempre abierto a nuevos desafíos y colaboraciones.',
    rights: 'TODOS LOS DERECHOS RESERVADOS.',
    heroText: "Protegiendo activos digitales mediante detección proactiva de amenazas y mitigación de riesgos.",
    certificationsTitle: 'CERTIFICACIONES',
    viewCertificate: 'VER CERTIFICADO',
    hackingTitle: "Hacking Ético",
  hackingSkills: [
    "Explotación de Aplicaciones",
    "Explotación de Redes",
    "Seguridad IoT",
    "Pruebas de Penetración",
    "Evaluación de Vulnerabilidades",
    "Escaneo de Vulnerabilidades"
  ],
  cybersecurityTitle: "Análisis de Ciberseguridad",
  cybersecuritySkills: [
    "Control de Acceso",
    "Seguridad de Aplicaciones",
    "Firewalls",
    "Vulnerabilidades IP/TCP/UDP",
    "Endurecimiento de Redes",
    "Protección de Endpoints"
  ],
    abilityTags: ['Compromiso', 'Proactividad', 'Trabajo en equipo', 'Comunicación', 'Resolución de problemas', 'Aprendizaje continuo'],
    languageTags: ['Español - Nativo', 'Inglés - B2'],
    experienceEntries: [
      {
        title: 'Investigador y Analista en Ciberseguridad',
        period: 'GIC LINES - UTN FRLP · 2024 - Actualidad',
        tasks: [
          'Investigación sobre tendencias y técnicas de ciberataques',
          'Análisis de vulnerabilidades web y pruebas de penetración',
          'Participación en simulaciones CTF y programas de entrenamiento'
        ]
      },
      {
        title: 'Investigador y Desarrollador en Inteligencia Artificial',
        period: 'Laboratorio de IA - UTN FRLP · 2023 - 2024',
        tasks: [
          'Diseño y desarrollo de chatbot para apoyo académico',
          'Mejoras en la interacción estudiantil mediante IA'
        ]
      }
    ],
    projectTitles: {
      project1: 'CURSO DE HACKING ÉTICO',
      project2: 'CARRERA DE ANALISTA JR EN CIBERSEGURIDAD'
    },
    projectCategories: {
      project1: 'SEGURIDAD DE REDES, CIBERSEGURIDAD',
      project2: 'CIBERSEGURIDAD, SEGURIDAD DE REDES'
    },
    projectDescriptions: {
      project1: 'Esta certificación acredita la finalización del curso de Ethical Hacker de Cisco. El titular posee un sólido conocimiento sobre marcos legales y de cumplimiento, y es competente en la planificación, ejecución y reporte de evaluaciones de vulnerabilidades, además de proponer estrategias de mitigación. La formación incluyó hasta 34 actividades prácticas utilizando Kali Linux, WebSploit y otras herramientas de ciberseguridad.',
      project2: 'Esta certificación acredita la finalización de la ruta profesional de Junior Cybersecurity Analyst ofrecida por Cisco Networking Academy. El titular posee conocimientos para monitorear y proteger redes mediante herramientas como firewalls, seguridad en la nube y criptografía. Además, está capacitado para gestionar alertas de seguridad, realizar evaluaciones de vulnerabilidades en redes y elaborar planes de gestión de riesgos, incluyendo investigaciones forenses y estrategias de respuesta ante incidentes.',
    }
  }
};

  // 4. Datos estáticos
  const projects = [
    {
      id: 1,
      title: 'ETHICAL HACKER COURSE',
      year: '2025',
      category: 'NETWORK SECURITY, CYBERSECURITY',
      description: 'This certification validates the completion of Cisco’s Ethical Hacker course. The holder has a strong understanding of legal and compliance frameworks and is proficient in scoping, executing, and reporting vulnerability assessments, as well as recommending mitigation strategies. The training included up to 34 hands-on labs using Kali Linux, WebSploit, and other cybersecurity tools.',
      tech: ['Kali Linux', 'Metasploit', 'OWASP'],
      image: cert1,
      link: 'https://www.credly.com/badges/1746afe4-1d4a-47a2-bfeb-218089e3b990'
    },
    {
      id: 2,
      title: 'JUNIOR CYBERSECURITY ANALYST CAREER PATH',
      year: '2025',
      category: 'CYBERSECURITY, NETWORK SECURITY',
      description: "This certification confirms the completion of the Junior Cybersecurity Analyst Career Path from Cisco Networking Academy. The holder has knowledge in monitoring and protecting networks using tools like firewalls, cloud security, and cryptography. They are proficient in handling security alerts and governance, performing network vulnerability assessments, and developing risk management plans, including forensic investigations and incident response strategies.",
      tech: ['Firewalls', 'IDS', ],
      image: cert2,
      link: 'https://www.credly.com/badges/12e48d7a-fe7c-498c-89df-b41915e095a4'
    }
  ]

  const skills = [
    { name: 'NEURAL DESIGN', level: 92 },
    { name: 'QUANTUM UX', level: 88 },
    { name: 'HOLOGRAM PROTOTYPING', level: 95 },
    { name: 'AI INTEGRATION', level: 90 },
    { name: 'SPATIAL COMPUTING', level: 85 }
  ]

  // 6. Funciones handler
  const handleMouseMove = (e) => {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }

  const [lang, setLang] = useState('en')
  const t = translations[lang]
  const textEnter = () => setCursorGlow(true)
  const textLeave = () => setCursorGlow(false)

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-[#ff4d4d] font-mono overflow-x-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Efecto de grid futurista */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-grid-small-white/[0.05]"></div>
      </div>

      {/* Partículas flotantes */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#ff4d4d] rounded-full pointer-events-none"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random() * 0.5
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          style={{
            boxShadow: '0 0 10px 2px[#ff4d4d'
          }}
        />
      ))}

      {/* Navegación */}
      {/* Navegación */}
<nav className="fixed top-0 left-0 right-0 z-40 py-6 px-8 flex justify-between items-center backdrop-blur-md bg-black/50 border-b border-[#ff4d4d]/20">
  <motion.a
    href="#home"
    className="text-2xl font-bold tracking-tighter"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.5 }}
    onMouseEnter={textEnter}
    onMouseLeave={textLeave}
  >
    <span className="text-white">Eric</span><span className="text-[#ff4d4d]">T</span>
  </motion.a>

  <div className="flex items-center gap-6">
    {/* Navegación desktop */}
    <motion.ul
      className="hidden md:flex space-x-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
    >
      {['home', 'certifications', 'skills', 'contact'].map((item) => (
        <li key={item}>
          <motion.a
            href={`#${item}`}
            className={`uppercase text-sm tracking-widest transition-all ${
              activeSection === item
                ? 'text-[#ff4d4d] font-bold'
                : 'text-white/70 hover:text-[#ff4d4d]'
            }`}
            onClick={() => setActiveSection(item)}
            onMouseEnter={() => {
              textEnter()
              setHoveredItem(item)
            }}
            onMouseLeave={() => {
              textLeave()
              setHoveredItem(null)
            }}
          >
            {t.navbar[item]}
            {hoveredItem === item && (
              <motion.span
                className="block h-0.5 bg-[#ff4d4d] mt-1"
                layoutId="navUnderline"
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
            )}
          </motion.a>
        </li>
      ))}
    </motion.ul>

    {/* Botón de idioma */}
    <motion.button
      onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
      className="text-xs uppercase tracking-widest border px-3 py-1 rounded text-white border-[#ff4d4d] hover:bg-[#ff4d4d]/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9 }}
    >
      {lang === 'en' ? 'ES' : 'EN'}
    </motion.button>
  </div>

  {/* Botón menú móvil */}
  <motion.button
    className="md:hidden z-50"
    onClick={() => setMenuOpen(!menuOpen)}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.8 }}
    onMouseEnter={textEnter}
    onMouseLeave={textLeave}
  >
    <div className={`w-8 flex flex-col space-y-2 ${menuOpen ? 'transform rotate-45' : ''}`}>
      <span className={`h-0.5 bg-[#ff4d4d] w-full transition-all ${menuOpen ? 'transform translate-y-2.5' : ''}`}></span>
      <span className={`h-0.5 bg-[#ff4d4d] w-full ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
      <span className={`h-0.5 bg-[#ff4d4d] w-full transition-all ${menuOpen ? 'transform -translate-y-2.5 -rotate-90' : ''}`}></span>
    </div>
  </motion.button>
</nav>

{/* Menú móvil */}
<AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-30 flex items-center justify-center backdrop-blur-md"
    >
      <motion.ul
        className="text-center space-y-10"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        exit={{ y: 20 }}
      >
        {['home', 'certifications', 'skills', 'contact'].map((item) => (
          <li key={item}>
            <motion.a
              href={`#${item}`}
              className="text-3xl uppercase tracking-wider block py-2 text-[#ff4d4d]"
              onClick={() => {
                setActiveSection(item)
                setMenuOpen(false)
              }}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              {t.navbar[item]}
            </motion.a>
          </li>
        ))}
      </motion.ul>
    </motion.div>
  )}
</AnimatePresence>


      {/* Sección Hero */}
<section id="home" className="min-h-screen flex items-center relative">
  <div className="container mx-auto px-6 py-32">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="max-w-3xl"
    >
      <motion.p
        className="text-lg text-[#ff4d4d] mb-4 uppercase tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {t.role}
      </motion.p>

      <motion.h1
        className="text-5xl md:text-7xl font-bold leading-tight mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <span className="text-white">ERIC</span><br />
        <span className="text-[#ff4d4d]">TREBINO</span><br />
      </motion.h1>

      <motion.p
  className="text-xl text-white/80 mb-10 max-w-2xl"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.9 }}
>
  {t.heroText}
</motion.p>

      <motion.div
  className="flex flex-col sm:flex-row sm:items-center sm:space-x-5 space-y-4 sm:space-y-0 mt-6 max-w-xs sm:max-w-none"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1 }}
>
  <a
    href="#certifications"
    className="border-2 border-[#ff4d4d] px-8 py-3 text-sm uppercase tracking-widest font-bold text-[#ff4d4d] text-center w-full sm:w-auto"
  >
    {t.explore}
  </a>
  <a
    href={cvPDF}
    download
    className="border-2 border-[#ff4d4d] px-8 py-3 text-sm uppercase tracking-widest font-bold text-[#ff4d4d] text-center w-full sm:w-auto"
  >
    {t.download}
  </a>
</motion.div>

    </motion.div>
  </div>

  {/* Efecto de partículas simplificado */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(10)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-[#ff4d4d] rounded-full"
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          opacity: 0.3
        }}
        animate={{
          y: [0, Math.random() * 50 - 25],
          x: [0, Math.random() * 50 - 25],
        }}
        transition={{
          duration: 5 + Math.random() * 5,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />
    ))}
  </div>
</section>


      {/* Sección Work */}
      {/* Sección Work */}
<section
  id="certifications"
  className="py-28 relative"
  onMouseEnter={() => setActiveSection('certifications')}
>
  <div className="container mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      className="text-4xl sm:text-5xl font-bold mb-20 text-center break-words"
    >
      <span className="text-[#ff4d4d]">{t.certificationsTitle}</span>
    </motion.h2>

    <div className="grid grid-cols-1 gap-10 items-center justify-center">
  {projects.map((project, index) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative max-w-2xl mx-auto w-full"
    >
      <div className="absolute inset-0 bg-[#ff4d4d] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl"></div>
      <div className="relative z-10 bg-black/50 backdrop-blur-sm border border-[#ff4d4d]/20 rounded-xl overflow-hidden h-full flex flex-col">
        <div className="aspect-video bg-gradient-to-br from-black to-[#200010] relative overflow-hidden flex items-center justify-center">
          {project.image ? (
            <img src={project.image} alt={t.projectTitles[project.key]} className="object-cover w-full h-full" />
          ) : (
            <motion.div className="text-4xl font-bold opacity-30">
              {index + 1}
            </motion.div>
          )}
        </div>
        <div className="p-6 flex-grow">
          <div className="flex justify-between text-xs text-[#ff4d4d] mb-3 uppercase tracking-widest">
            <span>{project.year}</span>
            <span>{t.projectCategories[project.key]}</span>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#ff4d4d] transition-colors">
            {t.projectTitles[`project${project.id}`]}
          </h3>
          <p className="text-white/70 mb-6">
            {t.projectDescriptions[`project${project.id}`]}
          </p>
          <div className="flex justify-between text-xs text-[#ff4d4d] mb-3 uppercase tracking-widest">
            <span>{t.projectCategories[`project${project.id}`]}</span>
          </div>
        </div>
        <div className="px-6 pb-6">
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-bold text-[#ff4d4d] group/link"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <span className="mr-2">{t.viewCertificate}</span>
            <motion.span className="inline-block" initial={{ x: 0 }} whileHover={{ x: 5 }}>
              →
            </motion.span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  ))}
</div>

  </div>
</section>


      {/* Sección Skills */}
<section
  id="skills"
  className="py-28 bg-gradient-to-b from-black to-[#200010] relative overflow-hidden"
  onMouseEnter={() => setActiveSection('skills')}
>
  <div className="absolute inset-0 opacity-20">
    <div className="absolute inset-0 bg-grid-small-white/[0.05]"></div>
  </div>

  <div className="container mx-auto px-6 relative z-10">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto"
    >
      <motion.h2
        className="text-5xl font-bold mb-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-white">{t.skills.split(' ')[0]}</span>{' '}
        <span className="text-[#ff4d4d]">{t.skills.split(' ').slice(1).join(' ')}</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <motion.h3
            className="text-3xl font-bold mb-8 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t.technical.split(' ')[0]}{' '}
            <span className="text-[#ff4d4d]">{t.technical.split(' ').slice(1).join(' ')}</span>
          </motion.h3>

          <h4 className="text-sm uppercase tracking-widest text-[#ff4d4d] mb-2">{t.hackingTitle}</h4>
          <ul className="text-white/80 space-y-4 list-disc list-inside mb-8">
            {t.hackingSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <h4 className="text-sm uppercase tracking-widest text-[#ff4d4d] mb-2">{t.cybersecurityTitle}</h4>
          <ul className="text-white/80 space-y-4 list-disc list-inside">
            {t.cybersecuritySkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <motion.div
          className="bg-black/50 border border-[#ff4d4d]/20 rounded-xl p-8 backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-[#ff4d4d]">{t.softSkills}</h3>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm uppercase tracking-widest text-white/70 mb-2">{t.abilities}</h4>
              <div className="flex flex-col gap-2">
                {t.abilityTags.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-[#ff4d4d]/10 text-[#ff4d4d] px-3 py-1.5 rounded-full border border-[#ff4d4d]/20 w-fit"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-widest text-white/70 mb-2">{t.languages}</h4>
              <div className="flex flex-wrap gap-2">
                {t.languageTags.map((lang, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#ff4d4d]/10 text-[#ff4d4d] px-3 py-1.5 rounded-full border border-[#ff4d4d]/20"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </div>
</section>


                {/*Experience*/}
<section
  id="experience"
  className="py-28 bg-gradient-to-b from-[#200010] to-black relative overflow-hidden"
  onMouseEnter={() => setActiveSection('experience')}
>
  <div className="absolute inset-0 opacity-20">
    <div className="absolute inset-0 bg-grid-small-white/[0.05]"></div>
  </div>
  <div className="container mx-auto px-6 relative z-10">
    <motion.h2
      className="text-5xl font-bold mb-20 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <span className="text-white">{t.experience.split(' ')[0]}</span>{' '}
      <span className="text-[#ff4d4d]">{t.experience.split(' ').slice(1).join(' ')}</span>
    </motion.h2>

    <div className="space-y-16">
      {t.experienceEntries.map((entry, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.1 }}
          className="bg-black/40 border border-[#ff4d4d]/20 rounded-xl p-6 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-2">{entry.title}</h3>
          <p className="text-sm text-[#ff4d4d] mb-4">{entry.period}</p>
          <ul className="list-disc list-inside text-white/80 space-y-2">
            {entry.tasks.map((task, j) => (
              <li key={j}>{task}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/*CONTACTO*/}
      <section
  id="contact"
  className="py-28 bg-gradient-to-b from-black to-[#200010] relative overflow-hidden"
  onMouseEnter={() => setActiveSection('contact')}
>
  <div className="absolute inset-0 opacity-20">
    <div className="absolute inset-0 bg-grid-small-white/[0.05]"></div>
  </div>

  <div className="container mx-auto px-6 relative z-10 flex justify-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-black/40 backdrop-blur-xl border border-[#ff4d4d]/20 rounded-2xl shadow-xl p-10 max-w-3xl w-full"
    >
      <motion.h2
  className="text-5xl font-bold mb-6 text-center"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  {lang === 'es' ? (
    <>
      <span className="text-white">VAMOS</span>{' '}
      <span className="text-white">A</span>{' '}
      <span className="text-[#ff4d4d]">CONECTAR</span>
    </>
  ) : (
    <>
      <span className="text-white">LET'S</span>{' '}
      <span className="text-[#ff4d4d]">CONNECT</span>
    </>
  )}
</motion.h2>

      <p className="text-white/70 text-lg mb-12 text-center">
        {t.contactText}
      </p>

      <div className="grid md:grid-cols-2 gap-10 text-white/80 text-lg">
        <div className="space-y-4 text-left">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-[#ff4d4d]" />
            <a
              href="mailto:erictrebino48@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff4d4d] transition-colors break-all text-sm"
            >
              erictrebino48@gmail.com
            </a>
          </div>
        </div>

        <div className="space-y-4 text-left">
          <div className="flex items-center gap-3">
            <FaLinkedin className="text-[#ff4d4d]" />
            <a
              href="https://www.linkedin.com/in/trebinoeric"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff4d4d] transition-colors"
            >
              /trebinoeric
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>


      {/* Footer */}
      <footer className="py-16 border-t border-[#ff4d4d]/10 relative overflow-hidden">
  <div className="absolute inset-0 bg-grid-small-white/[0.02]"></div>

  <div className="container mx-auto px-6 relative z-10">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="mb-8 md:mb-0 text-center md:text-left">
        <motion.a
          href="#home"
          className="text-2xl font-bold tracking-tighter block mb-3"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <span className="text-white">E</span><span className="text-[#ff4d4d]">T</span>
        </motion.a>
        <p className="text-sm text-white/50">© 2025 ERIC TREBINO. {t.rights}</p>
      </div>

      <div className="flex flex-col items-center md:items-end space-y-4">
        <div className="flex space-x-6">
          {[
            { name: 'EMAIL', url: 'mailto:erictrebino48@gmail.com' },
            { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/trebinoeric' }
          ].map(({ name, url }) => (
            <motion.a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-widest text-white/70 hover:text-[#ff4d4d] transition-colors"
              whileHover={{ y: -2 }}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              {name}
            </motion.a>
          ))}
        </div>

        <motion.p
          className="text-xs text-white/30 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          DESIGNED AND DEVELOPED BY{' '}
          <span className="text-[#ff4d4d]">
            <a href="https://kiad.dev/" target="_blank" rel="noopener noreferrer">
              KIAD
            </a>
          </span>
        </motion.p>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default CyberPortfolio