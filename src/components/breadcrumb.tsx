'use client';

import styles from './breadcrumb.module.scss';

import React, { useState, useEffect } from 'react';

interface Props {
    path: string;
}

const Breadcrumb: React.FC<Props> = ({ path }) => {

    useEffect(() => {
    }, []);

    return (
    <div className={styles.breadcrumb}>
        {path}
    </div>
    );
};

export default Breadcrumb;
