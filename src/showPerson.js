import React from 'react';
import styles from './showPerson.module.css';

const showPerson= (props) => {
    return(
        <div className={styles.div}>
            <p>Name : {props.pName}</p>
            <p>Birth Year : {props.pBirthYear}</p>
            <p>Height : {props.pHeight}</p>
            <p>Gender : {props.pGender}</p>
        </div>
    );
}

export default showPerson;