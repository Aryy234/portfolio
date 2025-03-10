"use client"

import TypingAnimation from "@/components/TypingAnimation"
import AnimatedBackground from "@/components/AnimatedBackground"
import ProfileImage from "@/components/ProfileImage"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  const handleNavigation = (path: string) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        router.push(path)
      })
    } else {
      router.push(path)
    }
  }

  return (
    <>
      <AnimatedBackground />
      <div className="min-h-[calc(100vh-200px)] flex flex-col justify-center relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in text-white" style={{ animationDelay: "0s" }}>
                Hola, soy <span className="text-emerald-500">Ariel Elizalde</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
                <TypingAnimation text="Estudiante de Ingeniería en Ciencias de la Computación" delay={0.5} />
              </h2>
              <p className="text-lg mb-8 fade-in text-gray-300" style={{ animationDelay: "1s" }}>
                Especializado en desarrollo web, inteligencia artificial y ciencia de datos. Creando soluciones
                tecnológicas innovadoras para problemas complejos.
              </p>

              {/* Animated action buttons */}
              <div className="flex flex-col items-center fade-in" style={{ animationDelay: "1.5s" }}>
                <div className="flex flex-wrap gap-4 justify-center mb-4">
                  <button
                    onClick={() => handleNavigation("/proyectos")}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-md flex items-center gap-2 transition-colors button-glow button-animation"
                  >
                    Ver proyectos <ArrowRight size={18} />
                  </button>
                  <button
                    onClick={() => handleNavigation("/contacto")}
                    className="border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-6 py-3 rounded-md transition-colors button-glow button-animation"
                  >
                    Contactar
                  </button>
                </div>
                <button className="border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-6 py-3 rounded-md transition-colors button-glow button-animation w-full md:w-1/2 mx-auto">
                  Descargar CV
                </button>
              </div>
            </div>
            <ProfileImage />
          </div>
        </div>
      </div>
    </>
  )
}

