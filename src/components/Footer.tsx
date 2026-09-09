import { Mail } from "lucide-react";
import { profile } from "../data/profile";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-bg-border py-10">
      <div className="container-max flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-semibold">{profile.name}</p>
          <p className="text-ink-faint text-sm">{profile.title}</p>
          <p className="text-ink-faint text-xs mt-1">{profile.subtitle}</p>
        </div>
        <div className="flex items-center gap-5 text-ink-muted">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-ink transition-colors focus-ring">
            <FaGithub size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-ink transition-colors focus-ring">
            <FaLinkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-ink transition-colors focus-ring">
            <Mail size={18} />
          </a>
        </div>
        <p className="text-ink-faint text-xs">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
