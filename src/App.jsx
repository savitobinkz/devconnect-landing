import { useState } from 'react'
import './App.css'

const features = [
  { number: '01', icon: '⌘', title: 'Showcase real work', description: 'Build a portfolio around projects, code contributions and practical achievements. Let your work speak louder than your CV.' },
  { number: '02', icon: '⟷', title: 'Collaborate with developers', description: 'Find people who share your interests, join meaningful projects and turn ideas into working products.' },
  { number: '03', icon: '✳️', title: 'Discover opportunities', description: 'Connect with organizations, explore freelance opportunities and get noticed for what you can actually build.' },

  { number: '04', icon: '⌁', title: 'Learn by exchanging skills', description: 'Share what you know, learn from others and grow through practical peer-to-peer knowledge exchange.' },
  { number: '05', icon: '⚡', title: 'Compete and build', description: 'Take part in hackathons, solve real challenges and demonstrate your abilities through practical experience.' },
  { number: '06', icon: '◎', title: 'Build your reputation', description: 'Create a professional identity backed by projects, contributions and the people you work with.' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">S</span>
          <span>Swap<span className="brand-light">Learn</span></span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#features" onClick={closeMenu}>Platform</a>
          <a href="#how-it-works" onClick={closeMenu}>How it works</a>
          <a href="#community" onClick={closeMenu}>Community</a>
          <a href="#about" onClick={closeMenu}>About</a>
        </nav>

        <a className="header-cta" href="#join">Get started <span>↗️</span></a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> THE COMMUNITY BUILT AROUND WHAT YOU CAN DO</div>

<h1>Where developers connect, collaborate and get <span>seen.</span></h1>            <p className="hero-description">
              A place where developers build together, share real work,
              exchange knowledge and connect with opportunities that matter.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#join">Join the community <span>↗️</span></a>
              <a className="secondary-button" href="#features">Explore the platform <span>↓</span></a>
            </div>
            <div className="hero-note"><span className="note-icon">✦</span> Proof of work over proof of credentials.</div>
          </div>

          <div className="hero-visual" aria-label="Illustration of a connected developer community">
            <div className="visual-glow" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit-node node-one">JS</div>
            <div className="orbit-node node-two">⌘</div>
            <div className="orbit-node node-three">{"</>"}</div>
            <div className="orbit-node node-four">✳️</div>
            <div className="core-card">
              <div className="core-symbol">S</div>

              <div className="core-label">BUILD TOGETHER</div>
              <div className="core-caption">Ideas into impact.</div>
            </div>
            <div className="floating-card card-top"><span className="mini-icon">↗️</span><span><b>Real projects</b><small>Show what you build</small></span></div>
            <div className="floating-card card-bottom"><span className="mini-icon purple">✳️</span><span><b>Shared knowledge</b><small>Grow together</small></span></div>
          </div>
        </section>

        <section className="trust-strip" id="community">
          <p>ONE ECOSYSTEM. MORE WAYS TO GROW.</p>
          <div><span>⌘</span> BUILD</div><div><span>⟷</span> COLLABORATE</div><div><span>✳️</span> LEARN</div><div><span>↗️</span> GET DISCOVERED</div>
        </section>

        <section className="features-section" id="features">
          <div className="section-heading">
            <div><div className="eyebrow">WHAT YOU CAN DO HERE</div><h2>Everything you need to <span>move forward.</span></h2></div>
            <p>More than a professional profile. A connected ecosystem designed around building, sharing and growing together.</p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <div className="feature-top"><span className="feature-icon">{feature.icon}</span><span className="feature-number">{feature.number}</span></div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a href="#join" aria-label={'Explore ' + feature.title}>Explore <span>↗️</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="statement-section" id="how-it-works">
          <div className="statement-mark">“</div>
          <div className="eyebrow">A DIFFERENT WAY TO BE DISCOVERED</div>
          <h2>Don't just tell the world what you know. <span>Show them what you can build.</span></h2>
          <p>SwapLearn brings developers, ideas and opportunities into one community where practical contributions matter.</p>
        </section>

        <section className="join-section" id="join">
          <div>
            <div className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</div>
            <h2>Build something meaningful. <span>Build it together.</span></h2>
            <p>Meet your community, share your work and discover what's possible when skills connect.</p>
          </div>
          <a className="primary-button" href="https://www.swaplearn.me/">Explore SwapLearn <span>↗️</span></a>
        </section>
      </main>

      <footer className="site-footer" id="about">
        <a className="brand" href="#home"><span className="brand-mark">S</span><span>Swap<span className="brand-light">Learn</span></span></a>
        <p>Where skills connect and possibilities grow.</p>
        <span>© {new Date().getFullYear()} SwapLearn. Assessment concept.</span>
      </footer>
    </div>
  )
}

export default App