import { ArrowRight } from 'lucide-react'
import bannerUrl from '../../assets/banner-stack.png'

function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-copy">
        <h1>
          Build Your Ideal
          <span className="gradient-text">Development Stack</span>
        </h1>
        <p>
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#technologies">
            Explore Technologies <ArrowRight size={16} />
          </a>
          <a className="secondary-button" href="#about">Learn More</a>
        </div>
      </div>
      <div className="hero-visual">
        <img
          src={bannerUrl}
          alt="A colorful isometric illustration of a layered technology stack"
          width="526"
          height="526"
        />
      </div>
    </section>
  )
}

export default Hero
