import './App.css';
import Header from './components/header';
import About from './components/about';
import Facts from './components/facts';
import Skills from './components/skills';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import Servcies from './components/services';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

      <Header />
      
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" data-aos="fade-in">
          <h1>Brian Redding</h1>
          <p>I'm <span className="typed" data-typed-items="Full Stack Web Developer, Responsive Web Applications Designer, Web Developer"></span></p>
        </div>
      </section>
 
      <main id="main">

        <About />

        <Facts />
        
        <Skills />

        <Resume />

        <Portfolio />

        {/* <Servcies /> */}

        {/* <Testimonials /> */}

        <Contact />

      </main>

      <Footer />

      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

    </div>
  );
};

export default App;
