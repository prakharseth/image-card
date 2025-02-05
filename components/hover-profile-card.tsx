"use client"

import Image from 'next/image'
import { Linkedin, Twitter, Globe } from 'lucide-react'

interface HoverProfileCardProps {
  imageSrc: string
  name: string
  profession: string
  description: string
}

export function HoverProfileCard({ imageSrc, name, profession, description }: HoverProfileCardProps) {
  return (
    <div className="relative w-[300px]">
      {/* Main Card */}
      <div className="relative rounded-lg overflow-hidden group">
        <div className="relative h-[400px] bg-gray-100">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover"
          />
          {/* Light Gradient (Default) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent transition-all duration-300" />
          
          {/* Dark Gradient (On Hover) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
          
          {/* Base Content (Always Visible) */}
          <div className="absolute inset-x-0 bottom-4 px-4 z-10">
            <div className="transition-all duration-300 group-hover:-translate-y-4">
              <div>
                <h3 className="text-white text-xl font-semibold mb-1 drop-shadow-sm">{name}</h3>
                <p className="text-white/90 text-sm drop-shadow-sm">{profession}</p>
              </div>

              {/* Content that appears on hover */}
              <div 
                className="overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-hover:max-h-[120px] group-hover:opacity-100 group-hover:mt-3"
              >
                <p className="text-white/90 text-sm mb-3 leading-relaxed">{description}</p>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="Twitter Profile"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="Website"
                  >
                    <Globe className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 