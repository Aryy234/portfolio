"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function ProfileImage() {
  const [mounted, setMounted] = useState(false)

  // This ensures the component only renders on the client
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex justify-center fade-in" style={{ animationDelay: "2s" }}>
      <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-500 shadow-lg shadow-emerald-500/20">
        {/* Local placeholder image */}
        <Image
          src="https://raw.githubusercontent.com/Aryy234/ImagesAplication/main/imageApp/th.jpeg"
          alt="Foto de perfil"
          fill
          className="object-cover"
          priority
          unoptimized
        />

        {/* Fallback colored circle if image fails */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 -z-10"></div>
      </div>
    </div>
  )
}

