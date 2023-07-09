'use client';

import styles from './bounty.module.scss';

import React, { useState, useEffect } from 'react';

interface Props {
}

const Bounty: React.FC<Props> = () => {

    useEffect(() => {
    }, []);

    return (
    <div className={styles.bounty}>
        <div className="amount">
            <p className="quantity">$2,500</p>
            <p className="assignments">2 of 2 to assign</p>
            <a href="/awards/eth-barcelona/1">AWARD</a>
        </div>
        <div className="details">
            <h2>Split it! Best application of enabling yield splits to non-profits</h2>
            <div className="status">
                <p><b>Not assigned</b> | 1% to impact</p>
                <p>Endaoment - ETHBarcelona</p>
            </div>
        </div>
    </div>
    );
};

export default Bounty;
