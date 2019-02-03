import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Calendar from './calendar'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css';

const currentYear = new Date().getFullYear();
const fromMonth = new Date(currentYear, 0);
const toMonth = new Date(currentYear + 10, 11);

 export default class YearMonthForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            month: fromMonth,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { year, month } = e.target.form;
        this.props.onChange(new Date(year.value, month.value));
    };

    render() {
        const { date, localeUtils, onChange } = this.props
        const months = localeUtils.getMonths();

        const years = [];
        for (let i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i += 1) {
            years.push(i);
        }

        console.log("date::",date)
        return (
            <form className="DayPicker-Caption">
            <select name="month" onChange={this.handleChange} value={date.getMonth()}>
                {months.map((month, i) => (
                <option key={month} value={i}>
                    {month}
                </option>
                ))}
            </select>
            <select name="year" onChange={this.handleChange} value={date.getFullYear()}>
                {years.map(year => (
                <option key={year} value={year}>
                    {year}
                </option>
                ))}
            </select>
            </form>
        );
    }
}
YearMonthForm.propTypes = {
    date: PropTypes.object,
    localeUtils: PropTypes.object,
    onChange: PropTypes.func
}
