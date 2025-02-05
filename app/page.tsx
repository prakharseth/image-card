import { ProfileCard } from "@/components/profile-card"
import { HoverProfileCard } from "@/components/hover-profile-card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl font-bold text-center mb-12">Team Members</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <ProfileCard
            imageSrc="/hero.png"
            name="Ryan Adams"
            profession="Makeup Artist"
            description="Expert in designing unique, gorgeous makeup looks."
          />
          <HoverProfileCard
            imageSrc="/hero.png"
            name="Ryan Adams"
            profession="Makeup Artist"
            description="Expert in designing unique, gorgeous makeup looks."
          />
        </div>
      </div>
    </main>
  )
}
