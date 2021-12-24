import React from 'react'
import styles from '../styles/cube.module.scss'

const Cube = () => {
    return (
        <div className={styles.cube}>
            <div className={`${styles.cube__face} ${styles.cube__face__front}`}/>
            <div className={`${styles.cube__face} ${styles.cube__face__back}`}/>
            <div className={`${styles.cube__face} ${styles.cube__face__right}`}/>
            <div className={`${styles.cube__face} ${styles.cube__face__left}`}/>
            <div className={`${styles.cube__face} ${styles.cube__face__top}`}/>
            <div className={`${styles.cube__face} ${styles.cube__face__bottom}`}/>
        </div>
    )
}

export default Cube
