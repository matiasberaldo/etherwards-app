'use client';

import Image from 'next/image'
import styles from './page.module.scss'
import Header from '@/components/header';
import Section from '@/components/section';
import { Poppins } from 'next/font/google'
import { usePathname } from 'next/navigation';
import Tabs from "@/components/tabs";
import Search from "@/components/search";
import React, {useEffect, useState} from "react";

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

interface Props {
    pills: Array<object>;
}

const Awards: React.FC<Props> = () => {
    const [selectedTeam, setSelectedTeam] = useState("");

    useEffect(() => {
    }, []);

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
                    <Search></Search>
                    <div className="teams-list">
                        <div className={`team ${selectedTeam === "etherwards" ? "selected" : ""}`} onClick={() => setSelectedTeam("etherwards")}>
                            <div>
                                <div className="image"></div>
                            </div>
                            <div>
                                <p className="name">Etherwards</p>
                                <p className="wallet-address">0x1462...f9</p>
                            </div>
                        </div>
                        <div className={`team ${selectedTeam === "progress" ? "selected" : ""}`} onClick={() => setSelectedTeam("progress")}>
                            <div>
                                <div className="image"></div>
                            </div>
                            <div>
                                <p className="name">Progress Pool</p>
                                <p className="wallet-address">0x2575...c3</p>
                            </div>
                        </div>
                    <div className={`team ${selectedTeam === "reflectdao" ? "selected" : ""}`} onClick={() => setSelectedTeam("reflectdao")}>
                        <div>
                                <div className="image"></div>
                            </div>
                            <div>
                                <p className="name">ReflectDAO</p>
                                <p className="wallet-address">0x6302...qe</p>
                            </div>
                        </div>
                    </div>
                    <div className="controls">
                        <div className="cancel-wrapper">
                            <a href="/events/eth-barcelona">{"<"} Cancel</a>
                        </div>
                        <div className={`next-wrapper ${selectedTeam ? "" : "disabled"}`}>
                            <a href="/awards/eth-barcelona/2">Next</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Awards;
