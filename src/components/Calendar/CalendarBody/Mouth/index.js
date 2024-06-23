import React from 'react';
import Week from '../Week';
import DaysContext from '../../contextsCalendar/DaysContext';
import { format, getWeeksInMonth } from 'date-fns'
import {startOfMonth,differenceInWeeks,startOfYear} from 'date-fns';

//TODO: getWeeksInMonth

const Mount = (props) => {
    return (
        <DaysContext.Consumer>
            {([currentDay]) => {
              
                const weeks = getWeeksInMonth(currentDay);
                const years = format(currentDay, 'y')
              
                const startOfYearDate = startOfYear(currentDay); // начало года для указанной даты
                const startOfMonthDate = startOfMonth(currentDay); // начало месяца для указанной даты
                
                const weeksSinceStartOfYear = differenceInWeeks(startOfMonthDate, startOfYearDate);
                console.log(weeksSinceStartOfYear)

                const daysArray = [];

                for (let i = 1; i <= weeks; i++) {
                    daysArray.push(<Week year={years} week={weeksSinceStartOfYear+i} />)}
                    console.log(daysArray)

                    return (
                        <tbody>
                            {daysArray}
                        </tbody>

                    )

                }
            }

        </DaysContext.Consumer>

    );
}

export default Mount;
