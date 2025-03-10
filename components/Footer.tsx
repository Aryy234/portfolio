"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useState } from "react"

export default function Footer() {
  const [mounted, setMounted] = useState(false)

  // This ensures the component only renders on the client
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <footer className="w-full py-6 px-4 bg-gray-900 border-t border-gray-800" style={{ zIndex: 10 }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} DevPortfolio Ariel Elizalde. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/Aryy234"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-500 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/ariel-elizalde-180963227"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:marcelo-elizalde@hotmail.com"
              className="text-gray-400 hover:text-emerald-500 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

