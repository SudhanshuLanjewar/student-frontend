const features = [
  {
    icon: '🗂️',
    title: 'Full Record Management',
    text: 'Add, edit and delete student records from one clean dashboard.',
  },
  {
    icon: '🔎',
    title: 'Instant Search',
    text: 'Find students by name, ID, department or email as you type.',
  },
  {
    icon: '☁️',
    title: 'Cloud Hosted',
    text: 'Powered by Netlify, Render, and MongoDB Atlas for maximum reliability.',
  },
  {
    icon: '🔒',
    title: 'Secure',
    text: 'Your data is securely stored and accessible only via our API.',
  },
];

const stack = ['React', 'Vite', 'Render API', 'MongoDB Atlas', 'Netlify'];

export default function Home({ onNavigate }) {
  return (
    <div className="home-container">
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />

      <section className="hero-section">
        <span className="hero-badge">✨ Modern cloud-based student records</span>

        <h1>
          Welcome to the <span className="gradient-text">Student Management</span> System
        </h1>

        <p>
          A modern, cloud-based solution to manage all your student records
          efficiently and securely.
        </p>

        <button className="btn-hero" onClick={() => onNavigate('student-data')}>
          📂 Go to Student Data <span className="btn-arrow">→</span>
        </button>

        <div className="tech-row" aria-label="Technology stack">
          {stack.map((item) => (
            <span className="tech-chip" key={item}>{item}</span>
          ))}
        </div>
      </section>

      <h2 className="section-title">Everything you need</h2>

      <div className="features-grid">
        {features.map((f, i) => (
          <div className="feature-card" key={f.title} style={{ '--i': i }}>
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
