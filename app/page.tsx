import Image from 'next/image'
import Header from '@/components/Header'
import UseCases from '@/components/UseCases'
import PitchDeck from '@/components/PitchDeck'
import VideoDemo from '@/components/VideoDemo'
import ListStructure from '@/components/ListStructure'
import JoinBeta from '@/components/JoinBeta'

export default function Home() {
  return (
    <main className="grid p-3 px-0  bg-[#f4f3fa] ...">
        <Header />
        <UseCases />
        <PitchDeck />
        <VideoDemo />
        <ListStructure />
        <JoinBeta />
    </main>
  )
}
