'use client';

import styles from './header.module.scss';

import React, { useState, useEffect } from 'react';

interface Props {
    initialCount: number;
}

const Header: React.FC<Props> = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount || 0);

    useEffect(() => {
    }, []);

    return (
    <div className={styles.header}>
        <div className="logo-container">
            <img src={'etherwards_logo.png'} alt=""/>
            <p>etherwards</p>
        </div>
        <div className="navigation">
            <ul>
                <li><a href="#">Connect wallet</a></li>
            </ul>
        </div>
    </div>
    );
};

export default Header;
