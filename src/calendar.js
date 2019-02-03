import React, {Component} from 'react';
import YearMonthForm from './year-month-form'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css';
import './calendar.css'

const currentYear = new Date().getFullYear();
const fromMonth = new Date(currentYear, 0);
const toMonth = new Date(currentYear + 10, 11);

 export default class Calendar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            month: fromMonth,
            selectedDay: null,
        };
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleYearMonthChange = this.handleYearMonthChange.bind(this);
    }

   
    handleDayClick(day, { selected }) {
        this.setState({
          selectedDay: selected ? undefined : day,
        });
    }
    handleYearMonthChange(month) {
        this.setState({ month });
    }
    render() {
        return (
            <div className="YearNavigation" tabIndex="0">
                <DayPicker
                  showOutsideDays
                  selectedDays={this.state.selectedDay}
                  onDayClick={this.handleDayClick}
                  numberOfMonths={2} 
                  month={this.state.month}
                  fromMonth={fromMonth}
                  toMonth={toMonth}
                  captionElement={({ date, localeUtils }) => (
                    <YearMonthForm
                    date={new Date(date)}
                    localeUtils={localeUtils}
                    onChange={this.handleYearMonthChange}
                  />
                  )}/>
                  <p>
                {this.state.selectedDay
                    ? this.state.selectedDay.toLocaleDateString()
                    : 'Please select a day'}
                </p>
            </div>
        )
    }
}
