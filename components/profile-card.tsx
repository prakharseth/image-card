"use client"

import Image from 'next/image'
import { useState } from 'react'
import { Linkedin, Twitter, Globe } from 'lucide-react'

interface ProfileCardProps {
  imageSrc: string
  name: string
  profession: string
  description: string
}

export function ProfileCard({ imageSrc, name, profession, description }: ProfileCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

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
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Content Container */}
          <div className="absolute inset-x-0 bottom-4 px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
            {/* Main Content with Animation */}
            <div className={`transition-all duration-300 ${isExpanded ? '-translate-y-4' : ''}`}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-white text-xl font-semibold drop-shadow-sm">{name}</h3>
                  <p className="text-white/90 text-sm drop-shadow-sm">{profession}</p>
                </div>
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-white/20"
                  aria-label={isExpanded ? "Show less" : "Show more"}
                >
                  <svg 
                    className={`w-4 h-4 text-white transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 15l-6-6-6 6"/>
                  </svg>
                </button>
              </div>

              {/* Expandable Content */}
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  isExpanded 
                    ? 'max-h-[120px] opacity-100 mt-3' 
                    : 'max-h-0 opacity-0'
                }`}
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