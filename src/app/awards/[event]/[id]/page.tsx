'use client';

import Image from 'next/image'
import styles from './page.module.scss'
import Header from '@/components/header';
import Section from '@/components/section';
import { Poppins } from 'next/font/google'
import { usePathname } from 'next/navigation';
import Tabs from "@/components/tabs";

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export default function Awards() {
    const pathname = usePathname(); // router.query.slug
  return (
    <main className={`${styles.main} ${poppins.className}`}>
      <div className="wrapper">
          <Header displayBreadcrumb={false}></Header>
          <div className="award">
              <h1>Awarding</h1>
              <p>Split it! - Best application of enabling yield splits to non-profits</p>
              <div className="from">
                  <p>from <img src="" alt=""/><a href="#">Endaoment</a> in <img src="" alt=""/><a href="#">ETHBarcelona</a></p>
              </div>
          </div>
          <div className="content">
              <div className="tabs-wrapper">
                  <div className="tabs-container">
                      <Tabs tabs={[
                          {
                              title: "1. Find team",
                              selected: true
                          },
                          {
                              title: "2. Review",
                              selected: false
                          },
                          {
                              title: "3. Awarded",
                              selected: false
                          }
                      ]}></Tabs>
                  </div>
              </div>
          </div>
      </div>
    </main>
  )
}
