import React, { useRef, useState, useContext } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/searchbar/nuevoDatePicker.css";
import { SearchContext } from "../../contexts/SearchContext";

registerLocale('es', es)

const NuevoDatePicker = ({ dateRange, setDateRange }) => {
    const [close, setClose] = useState(false);
    const { searchDate, setSearchDate, searchCheckin, searchCheckout, } = useContext(SearchContext);

    //const [startDate, endDate] = dateRange;
    const [startDate, endDate] = searchDate;
    const inputRef = useRef(null);
    const focus = () => inputRef?.current.setOpen(false);

    const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
        <button className={value === "" ? `calendar-input` : `calendar-input selected-date`} onClick={onClick} ref={ref}>
            <div>
                <FontAwesomeIcon icon={faCalendarDay} className={value === "" ? `calendar-input-icon` : `calendar-input-icon selected-date-icon`} />
                {value === "" ? value = "Check in - Check out" : value = value}
            </div>
        </button>
    ));

    const days = ['D', 'L', 'M', 'M', 'J', 'V', 'S']
    const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']

    const locale = {
        localize: {
            day: n => days[n],
            month: n => months[n]
        },
        formatLong: {
            date: () => 'dd/mm/yyyy'
        }
    }

    return (
        <div className="calendar-input-container">
            <DatePicker
            /* disabledKeyboardNavigation */
                onChange={(update) => {
                    //setDateRange(update);
                    setSearchDate(update);
                }}
                renderCustomHeader={({
                    monthDate,
                    customHeaderCount,
                    decreaseMonth,
                    increaseMonth,
                }) => (
                    <div>
                        <button
                            aria-label="Previous Month"
                            className={
                                "react-datepicker__navigation react-datepicker__navigation--previous"
                            }
                            style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
                            onClick={decreaseMonth}
                        >
                            <span
                                className={
                                    "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                                    //"calendar-arrow-previous"
                                }
                            >
                                {"<"}
                            </span>
                        </button>
                        <span className="react-datepicker__current-month">
                            {/* Traigo la primera letra del mes en mayuscula porque sino viene todo minuscula */}
                            {monthDate.toLocaleString(es, {
                                month: "long",
                            }).charAt(0).toUpperCase() +
                                monthDate.toLocaleString(es, {
                                    month: "long",
                                }).slice(1)}
                        </span>
                        <button
                            aria-label="Next Month"
                            className={
                                "react-datepicker__navigation react-datepicker__navigation--next"
                            }
                            style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
                            onClick={increaseMonth}
                        >
                            <span
                                className={
                                    "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                                    //"calendar-arrow-next"
                                }
                            >
                                {">"}
                            </span>
                        </button>
                    </div>
                )}
                startDate={startDate}
                endDate={endDate}
                calendarClassName="calendar-styles whole-calendar-container"
                wrapperClassName="calendar-wrapper"
                clearButtonClassName="calendar-close-button"
                customInput={<CustomInput />}
                ref={inputRef}
                selectsRange={true}
                monthsShown={2}
                locale={locale}
                onKeyDown={false}
                dateFormat="dd 'de' MMM."
                showPopperArrow={false}
                shouldCloseOnSelect={false}
                disabled={close}
                minDate={(new Date())}               
            >
                <div className="empty-element"></div>
                <div className="button-container-calendar">
                    <button className="calendar-button" onClick={() => focus()}>Aplicar</button>
                </div>
            </DatePicker>
        </div>
    );
};
export default NuevoDatePicker;
