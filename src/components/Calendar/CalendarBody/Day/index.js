import React from 'react';
import { format } from 'date-fns/format';
import DaysContext from '../../contextsCalendar/DaysContext';

const Day = (props) => {
    return (
        <DaysContext.Consumer>
            {([currentDay, handleDayClick]) => {
                if (format (props.day,'PPP')===format (currentDay,'PPP' )){
                    return (
                        <td onClick={() => handleDayClick(props.day)} style={{fontWeight:'bold',color:'red'}}>
                            {format(props.day, 'd')}
                        </td>
                    );

                }             
                                         

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
