import { format } from 'date-fns/format';
import React from 'react';
import styles from '../Calendar.module.css'

const CurrentDay = (props) => {

     const {day} = props;
    return (
        <div className={styles.currentDay}>
            <p>{format(day,'cccc')}</p>
            <h1>{format(day,'d')} {format (day,'MMMM')}</h1>
        </div>
    );
}

export default CurrentDay;
