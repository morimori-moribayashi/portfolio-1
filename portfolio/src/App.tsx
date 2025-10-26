import { useEffect } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ProjectDetailsSection from './components/ProjectDetailsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'


function App() {
  useEffect(() => {
    // スムーススクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // スクロールアニメーション
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.bg-white\\/5, .bg-white\\/\\[0\\.03\\]').forEach(el => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ProjectDetailsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
