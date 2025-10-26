interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="text-center py-8 px-[5%] text-[#718096] border-t border-white/10">
      <p>&copy; 2025 Taro Yamada. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
