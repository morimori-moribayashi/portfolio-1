interface ContactSectionProps {}

const ContactSection: React.FC<ContactSectionProps> = () => {
  const socialLinks = [
    { icon: "G", title: "GitHub", href: "#" },
    { icon: "in", title: "LinkedIn", href: "#" },
    { icon: "𝕏", title: "Twitter", href: "#" },
    { icon: "✉", title: "Email", href: "mailto:example@email.com" }
  ];

  return (
    <section id="contact" className="py-20 px-[5%] max-w-[1400px] mx-auto">
      <div className="text-center bg-white/[0.03] rounded-3xl p-16 max-md:p-8 border border-white/10">
        <h2 className="text-4xl mb-4 gradient-text-white">Let's Connect</h2>
        <p className="text-[#cbd5e0] text-lg max-w-[600px] mx-auto mb-8">
          新しいプロジェクトやコラボレーションの機会について、お気軽にご連絡ください。
        </p>
        <div className="flex justify-center gap-8 mt-8 max-sm:gap-4">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              className="w-[60px] h-[60px] rounded-full bg-[#667eea]/10 flex items-center justify-center text-[#667eea] no-underline text-2xl border-2 border-[#667eea]/30 transition-all duration-300 hover:bg-[#667eea] hover:text-white hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(102,126,234,0.4)]" 
              title={link.title}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
