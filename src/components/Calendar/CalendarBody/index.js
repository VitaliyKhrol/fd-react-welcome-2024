import React from 'react';
import Mount from './Mouth';


const CalendarBody = (props) => {


    const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    return (

        <div style={{display:'flex',width:'100%',margin:'20px', flexDirection:'column' ,alignItems:'center'}}>
            <p>2023</p>
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
