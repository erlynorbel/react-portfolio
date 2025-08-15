import SplitText from "./SplitText.jsx";
import './Home.css'

const Home = () => (
  <section id="home">
    <SplitText
      text={<h1 className="splitText-title">Hello, <strong>I'm Leb!</strong></h1>}
      style={{ fontSize: '100px', lineHeight: 1 }}
    />
    <p className="home-desc">A De La Salle Lipa Computer Science Student.</p>
    <button
      className="btn btn-primary mt-6"
      style={{ fontSize: '1.5rem', padding: '1rem 2.5rem', borderRadius: '2rem', marginTop: '3rem' }}
      onClick={() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      Learn More
    </button>
  </section>
);

export default Home;
