'use client';

import styles from './tabs.module.scss';

import React, { useState, useEffect } from 'react';

interface Tab {
    title: string;
    selected: boolean;
}

interface Props {
    tabs?: Array<Tab>;
}

const Tabs: React.FC<Props> = ({ tabs }) => {

    useEffect(() => {
    }, []);

    return (
        <div className={styles.tabs}>
            <ul>
                {
                    (tabs || [
                        {
                            title: "To Award",
                            selected: true
                        },
                        {
                            title: "Awarded",
                            selected: false
                        },
                        {
                            title: "Transferred",
                            selected: false
                        },
                        {
                            title: "Event rules",
                            selected: false
                        }
                    ]).map((value) => (
                    <li className={value.selected ? "selected" : ""}><p>{value.title}</p></li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Tabs;
