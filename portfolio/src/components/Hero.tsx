const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-[5%] py-8 relative overflow-hidden">
            <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(102,126,234,0.3)_0%,transparent_70%)] -top-[250px] -right-[250px] animate-float"></div>
            <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(118,75,162,0.3)_0%,transparent_70%)] -bottom-[200px] -left-[200px] animate-float-slow"></div>
            
            <div className="max-w-[1400px] w-full z-10">
                <h1 className="text-[clamp(2.5rem,8vw,5rem)] mb-4 gradient-text-white animate-fadeInUp">Hirofumi Moribayashi</h1>
                <h2 className="text-[clamp(1.2rem,3vw,2rem)] text-[#a0aec0] mb-8 animate-fadeInUp-delay-1">Full Stack Developer</h2>
                <p className="text-lg text-[#cbd5e0] max-w-[600px] leading-relaxed mb-10 animate-fadeInUp-delay-2">
                    モダンな技術スタックを駆使して、ユーザー体験を重視したWebアプリケーションを開発しています。
                    クリーンなコードと革新的なソリューションで、ビジネス課題を解決します。
                </p>
                <div className="flex gap-4 flex-wrap animate-fadeInUp-delay-3">
                    <a href="#projects" className="px-8 py-4 rounded-full no-underline font-semibold transition-all duration-300 gradient-bg text-white hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(102,126,234,0.4)]">View Projects</a>
                    <a href="#contact" className="px-8 py-4 rounded-full no-underline font-semibold transition-all duration-300 bg-transparent text-white border-2 border-[#667eea] hover:bg-[rgba(102,126,234,0.1)] hover:-translate-y-1">Get in Touch</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
