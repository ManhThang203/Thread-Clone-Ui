import { Link } from "react-router";

const FooterLogin = () => {
  const links = [
    "Điều khoản của Threads",
    "Chính sách quyền riêng tư",
    "Chính sách cookie",
    "Báo cáo sự cố",
  ];

  return (
    <footer className="fixed right-0 bottom-0 left-0 px-4 py-6">
      <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs">
        <span>© 2026</span>
        {links.map((link, index) => (
          <Link
            key={index}
            to="#"
            className="hover:text-foreground transition-colors"
          >
            {link}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default FooterLogin;
