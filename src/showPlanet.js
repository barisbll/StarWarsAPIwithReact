import React from 'react';
import styles from './showPlanet.module.css';

const showPlanet = (props) => {
    return(
        <div className={styles.div}>
            <p className={styles.name}>Name : {props.pName}</p>
            <p className={styles.climate}>Climate : {props.pClimate}</p>
            <p className={styles.terrain}>Terrain : {props.pTerrain}</p>
            <p className={styles.population}>Population : {props.pPopulation}</p>
        </div>
    );
}

export default showPlanet;