'use client';

import styles from './teams.module.scss';

import React, { useState, useEffect } from 'react';

interface Props {
}

const Treasury: React.FC<Props> = () => {

    useEffect(() => {
    }, []);

    return (
    <div className={styles.teams}>
        <p className="title">Teams</p>
        <div className="box">
            <p className="name">Etherwards Team</p>
            <p className="project">Etherwards</p>
        </div>
        <div className="box">
            <p className="name">Progress Pool Team</p>
            <p className="project">Progress Pool</p>
        </div>
        <div className="box">
            <p className="name">ReflectDAO Team</p>
            <p className="project">Bridgeless decentralized crosschain DAO</p>
        </div>
        <div className="show-more">
            <a href="#"><span>{">"}</span> Show 63 more</a>
        </div>
    </div>
    );
};

export default Treasury;
