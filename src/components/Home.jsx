import SplitText from "./SplitText.jsx";
import './Home.css'

const Home = () => (
  <section id ="home">
    <SplitText
      text={<h1 className="splitText-title">Hello, <strong>I'm Leb!</strong></h1>}
      style={{ fontSize: '100px', lineHeight: 1 }}
    />
    <p className="home-desc">A De La Salle Lipa Computer Science Student.</p>
  </section>
);

export default Home;
