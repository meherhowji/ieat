import { Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#14141499] border-t border-[#333333] mt-auto">
      <div className="container mx-auto px-24 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/new-logo.png" alt="iEAT Logo" className="h-7 w-7" />
              <span className="text-xl text-white manrope-800-spaced">iEAT</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Interactive Economic Analysis Tool providing real-time insights and market analysis.
            </p>
          </div>
          <div></div>
          <div></div>
          <div
            className="text-xs"
            style={{
              textAlign: "right",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors pl-5"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors pl-5 pr-5"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", flexDirection: "column" }}>
              <p className="text-xs text-gray-500">© 2025 iEAT. All rights reserved</p>
              <p>
                <Link to="/privacy" className="text-xs text-gray-500 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-xs text-gray-500 hover:text-primary transition-colors">
                  &nbsp;&nbsp;|&nbsp;&nbsp;
                </span>
                <Link to="/terms" className="text-xs text-gray-500 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
