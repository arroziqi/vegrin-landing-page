import { Sprout, FileText, Github, BookOpen, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--vegrin-dark)] text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sprout className="w-6 h-6 text-[var(--vegrin-green-500)]" />
              <span className="text-xl font-bold text-white">Vegrin</span>
            </div>
            <p className="text-sm text-gray-400">
              AI-powered smart agriculture platform for modern farming
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--vegrin-green-400)] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-[var(--vegrin-green-400)] transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#tech"
                  className="hover:text-[var(--vegrin-green-400)] transition-colors"
                >
                  Technology
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/Arroziqi/mobile-vegrin/blob/main/docs/VegrinAPI.md"
                  target="_blank"
                  className="hover:text-[var(--vegrin-green-400)] transition-colors flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  API Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Arroziqi/mobile-vegrin"
                  target="_blank"
                  className="hover:text-[var(--vegrin-green-400)] transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--vegrin-green-400)] transition-colors flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  User Guide
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:ahmadarroziqi@gmail.com"
                  className="hover:text-[var(--vegrin-green-400)] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  ahmadarroziqi@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://ahmad-arroziqi.vercel.app/"
                  target="_blank"
                  className="hover:text-[var(--vegrin-green-400)] transition-colors"
                >
                  Author
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; 2026 Vegrin. All rights reserved. Built with passion for
            sustainable agriculture.
          </p>
        </div>
      </div>
    </footer>
  );
}
