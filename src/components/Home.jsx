export default function Home({ onNavigate }) {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Student Management System</h1>
        <p>A modern, cloud-based solution to manage all your student records efficiently and securely.</p>
        
        <button className="btn-hero" onClick={() => onNavigate('student-data')}>
          📂 Go to Student Data
        </button>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <h3>☁️ Cloud Hosted</h3>
          <p>Powered by Netlify, Render, and MongoDB Atlas for maximum reliability.</p>
        </div>
        <div className="feature-card">
          <h3>🔒 Secure</h3>
          <p>Your data is securely stored and accessible only via our API.</p>
        </div>
        <div className="feature-card">
          <h3>⚡ Fast & Responsive</h3>
          <p>Lightning-fast performance with a modern React interface.</p>
        </div>
      </div>
    </div>
  );
}