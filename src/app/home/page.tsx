import Image from 'next/image'
import styles from './page.module.scss'
import Header from '@/components/header';
import Section from '@/components/section';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="wrapper">
          <Header></Header>
          <Section></Section>
      </div>
    </main>
  )
}
