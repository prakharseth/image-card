import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Linkedin, Twitter, Globe } from 'lucide-react'

interface ImageCardProps {
  imageSrc: string
  name: string
  profession: string
  description: string
}

export function ImageCard({ imageSrc, name, profession, description }: ImageCardProps) {
  return (
    <div className="relative group">
      <div className="relative w-[300px] h-[400px] rounded-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
        />
        {/* Overlay that appears on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <h3 className="text-white text-xl font-semibold">{name}</h3>
          <p className="text-white/80 text-sm">{profession}</p>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"
                variant="secondary"
              >
                View More
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{name}</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      src={imageSrc}
                      alt={name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{profession}</h4>
                    <p className="text-sm text-muted-foreground">{description}</p>
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Globe className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
} 