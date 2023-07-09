'use client';

import styles from './disclaimer.module.scss';

import React, { useState, useEffect } from 'react';

interface Props {
    title: string;
    text: string;
}

const Disclaimer: React.FC<Props> = ({ title, text }) => {

    useEffect(() => {
    }, []);

    return (
    <div className={styles.disclaimer}>
        <h1>Award the Winners</h1>
        <p>The event has ended and you can now assign the awards</p>
    </div>
    );
};

export default Disclaimer;
