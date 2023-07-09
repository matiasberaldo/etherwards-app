import Image from 'next/image'
import styles from './page.module.scss'
import Header from '@/components/header';
import Section from '@/components/section';
import { Poppins } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${styles.main} ${poppins.className}`}>
      <div className="wrapper">
          <Header></Header>
          <Section></Section>
      </div>
    </main>
  )
}
