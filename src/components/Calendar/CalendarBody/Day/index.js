import React from 'react';
import { format } from 'date-fns/format';
import DaysContext from '../../contextsCalendar/DaysContext';

const Day = (props) => {
    return (
        <DaysContext.Consumer>
            {([currentDay, handleDayClick]) => {

                return (
                    <td onClick={() => handleDayClick(props.day)}>
                        {format(props.day, 'd')}
                    </td>
                );
            }
            }
        </DaysContext.Consumer>

    );
}

export default Day;
