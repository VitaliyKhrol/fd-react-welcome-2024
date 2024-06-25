import React, { Component } from 'react';
import CurrentDay from './CurrentDay';
import CalendarBody from './CalendarBody'
import DaysContext from './contextsCalendar/DaysContext';
import styles from './Calendar.module.css';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDay: new Date()
        }
    }

  handleDayClick = (day) => {
        this.setState({
            currentDay: day
        })
      };


    render() {
        const { currentDay } = this.state
        return (
            <DaysContext.Provider value={[this.state.currentDay, this.handleDayClick ]} >
                <div className={styles.container}>
                    <CurrentDay day={currentDay} />
                    <CalendarBody day={currentDay}/>
                </div>
            </DaysContext.Provider>

        );
    }
}

export default Calendar;
