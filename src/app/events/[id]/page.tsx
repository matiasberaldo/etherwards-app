'use client';

import Image from 'next/image'
import styles from './page.module.scss'
import Header from '@/components/header';
import Section from '@/components/section';
import { Poppins } from 'next/font/google'
import { usePathname } from 'next/navigation';

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export default function Events() {
    const pathname = usePathname(); // router.query.slug
  return (
    <main className={`${styles.main} ${poppins.className}`}>
      <div className="wrapper">
          <Header></Header>
          <Section></Section>
      </div>
    </main>
  )
}
