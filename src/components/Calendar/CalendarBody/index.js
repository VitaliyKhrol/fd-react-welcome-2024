import React from 'react';
import Mount from './Mouth';


const CalendarBody = () => {


    const weekDays =['S','M','T','W','T','F','S'];
    return (
        <table>
            <thead>
                <tr style = {{fontWeight:'bold'}}>
                    {weekDays.map(d => <td>{d}</td>)}
                </tr>
            </thead>
            
                <Mount mount={6}/>
           
            
        </table>
    );
}

export default CalendarBody;
