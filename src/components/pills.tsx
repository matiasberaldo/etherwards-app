'use client';

import styles from './pills.module.scss';

import React, { useState, useEffect } from 'react';

interface Props {
    pills?: Array<object>;
}

const Pills: React.FC<Props> = ({ pills }) => {

    useEffect(() => {
    }, []);

    return (
    <div className={styles.pills}>
        <div className="filters">
            <ul>
                <li className="selected"><p>All (92)</p></li>
                <li><p>Organizers (3)</p></li>
                <li><p>Sponsors (29)</p></li>
            </ul>
        </div>
        <div className="status">
            <ul>
                <li className="selected"><p>Status: All</p></li>
            </ul>
        </div>
    </div>
    );
};

export default Pills;
