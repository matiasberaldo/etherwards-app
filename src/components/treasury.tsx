'use client';

import styles from './treasury.module.scss';

import React, { useState, useEffect } from 'react';

interface Props {
}

const Treasury: React.FC<Props> = () => {

    useEffect(() => {
    }, []);

    return (
    <div className={styles.treasury}>
        <p className="title">Treasury</p>
        <div className="table">
            <div className="header">
                <p>All Awards</p>
            </div>
            <div className="content">
                <ul>
                    <li className="selected"><p>Total</p></li>
                    <li><p>Team</p></li>
                    <li><p>Impact</p></li>
                </ul>
                <div className="amount">
                    <p className="quantity">109.350</p>
                    <p className="currency">$ USDC</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Treasury;
