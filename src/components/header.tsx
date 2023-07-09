'use client';

import styles from './header.module.scss';

import React, { useState, useEffect } from 'react';
import Breadcrumb from "@/components/breadcrumb";

interface Props {
    breadcrumb: string;
    displayBreadcrumb: boolean
}

const Header: React.FC<Props> = ({ breadcrumb , displayBreadcrumb}) => {

    useEffect(() => {
    }, []);

    return (
    <>
        <div className={styles.header}>
            <div className="logo-container">
                <img src={'/etherwards_logo.png'} alt=""/>
                <p>etherwards</p>
            </div>
            <div className="navigation">
                <ul>
                    <li><a href="#">Connect wallet</a></li>
                </ul>
            </div>
        </div>
        {(typeof displayBreadcrumb == "undefined" || displayBreadcrumb) && <Breadcrumb path={breadcrumb || "all events /"}></Breadcrumb>}
    </>
    );
};

export default Header;
