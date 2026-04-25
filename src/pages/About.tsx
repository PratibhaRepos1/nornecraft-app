import comingSoonImg from '../assets/images/coming soon.webp';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="page-hero">
        <h1>About Us</h1>
      </div>

      <section className="about-intro">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src={comingSoonImg} alt="Norne Craft Workshop" />
            </div>
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Norne Craft was born from a deep passion for Norse heritage and
                traditional craftsmanship. We believe that the ancient art of
                handcrafting deserves to be preserved and celebrated in the modern
                world.
              </p>
              <p>
                Every piece in our collection is carefully handcrafted by skilled
                artisans who share our reverence for Norse traditions. From drinking
                horns to hand-forged accessories, each item carries the spirit of
                the ancient North.
              </p>
              <p>
                Our name is inspired by the Norns of Norse mythology - the beings
                who shape destiny. Just as they weave the threads of fate, we weave
                together ancient techniques with modern quality to create pieces
                that stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Values</h2>
            <p>What drives us every day</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-number">01</div>
              <h3>Authenticity</h3>
              <p>
                We stay true to traditional Norse crafting methods, ensuring every
                piece reflects the genuine spirit of Nordic heritage.
              </p>
            </div>
            <div className="value-card">
              <div className="value-number">02</div>
              <h3>Quality</h3>
              <p>
                Each item undergoes rigorous quality checks. We use only the finest
                natural materials sourced responsibly.
              </p>
            </div>
            <div className="value-card">
              <div className="value-number">03</div>
              <h3>Sustainability</h3>
              <p>
                We are committed to sustainable practices, using ethically sourced
                materials and eco-friendly packaging.
              </p>
            </div>
            <div className="value-card">
              <div className="value-number">04</div>
              <h3>Community</h3>
              <p>
                We foster a community of Norse enthusiasts, sharing knowledge and
                appreciation for ancient Nordic culture.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
