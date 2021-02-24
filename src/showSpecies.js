import React from 'react';
import styles from './showSpecies.module.css';

const showSpecies= (props) => {
    return(
        <div className={styles.div}>
            <p>Name : {props.pName}</p>
            <p>Average Life Span : {props.pAverageLifespan}</p>
            <p>Classification : {props.pClassification}</p>
            <p>Language : {props.pLanguage}</p>
        </div>
    );
}

export default showSpecies;