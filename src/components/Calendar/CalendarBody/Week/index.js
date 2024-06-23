import {parse} from 'date-fns';
import {addDays,startOfMonth,differenceInWeeks,startOfYear} from 'date-fns';
import React from 'react';
import Day from '../Day';

const Week = (props) => {
    const {year,week}= props;
  
    // const startOfWeek = parse(`${year} ${week}`, 'yyyy w', new Date())

    const startOfWeek = parse(`${year} ${week}`, 'Y w', new Date());

    const daysArray =[];
  
    for (let i=0; i<7; i++){
        daysArray.push(<Day day = {addDays(startOfWeek,i)}/>)
    }

    return (
        <tr>
            {daysArray}
        </tr>
    );
}

export default Week;
