interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="border-t border-white/10 py-8 px-[5%] text-center text-[#718096]">
      <p>&copy; 2025 Taro Yamada. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
