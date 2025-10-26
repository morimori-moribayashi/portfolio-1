import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Main App Component
const App = () => {
    return (
        <div className="bg-[#0a0a0a] text-white overflow-x-hidden">
            <Header />
            <Hero />
            <Skills />
            <Projects />
            <ProjectDetails />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
