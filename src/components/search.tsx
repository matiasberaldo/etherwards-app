'use client';

import styles from './search.module.scss';

import React, { useState, useEffect } from 'react';

interface Props {
}

const Search: React.FC<Props> = () => {

    useEffect(() => {
    }, []);

    return (
    <div className={styles.search}>
        <input type="text" name="search" id="" placeholder={"Search a team"}/>
    </div>
    );
};

export default Search;
