import React from 'react';
import Mount from './Mouth';
import { format } from 'date-fns/format';


const CalendarBody = (props) => {


    const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    const {day} = props;

    return (

        <div style={{display:'flex',width:'100%',margin:'20px', flexDirection:'column' ,alignItems:'center'}}>
            <p>{format(day,'MMMM')} {format (day,'yyy')}</p>
            <table>
                <thead>
                    <tr style={{ fontWeight: 'bold' }}>
                        {weekDays.map(d => <td>{d}</td>)}
                    </tr>
                </thead>

                <Mount mount={6} />


            </table>


        </div>

    );
}

export default CalendarBody;
