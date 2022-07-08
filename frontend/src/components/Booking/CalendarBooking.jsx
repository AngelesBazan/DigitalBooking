import React, { useState, useEffect } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import styles from "../../styles/booking/booking.module.css";
import "../../styles/booking/calendarBookingStyle.css";
import { fetchBookingsByProductId } from "../../helpers/getBookingsByProductId";
import moment from "moment";
import es from 'date-fns/locale/es';

registerLocale('es', es)

const CalendarBooking = ({ setDateRangeN, productData }) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [bookings, setBookings] = useState([]);

  const getDaysArray = (start, end) => {
    let arr = []
    let dt
    for (dt = new Date(start); dt < new Date(end); dt.setDate(dt.getDate() + 1)) {
      arr.push(new Date(dt));
    }
    return arr;
  };

  let datesNotAvailable = []
  if (bookings) {
    bookings.map((elem, index) => {
      let daylist = getDaysArray(new Date(elem.initial_date.split("-")), new Date(elem.final_date.split("-")));
      return daylist.map(day => {
        const dayArray = new Date(moment(day).format().slice(0, 10).split("-"))
        return datesNotAvailable.push(dayArray)
      })
    })
  }

  useEffect(() => {
    fetchBookingsByProductId(`http://apibackendg1c1-env.eba-f63kvump.us-east-1.elasticbeanstalk.com/products/${productData.id}/bookings`, setBookings);
  }, [productData])

  useEffect(() => {
    let dateIn = moment(dateRange[0]).format().slice(0, 10)
    let dateOut = moment(dateRange[1]).format().slice(0, 10)
    setDateRangeN([dateIn, dateOut])
  }, [dateRange]);

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
    <div className={styles.section}>
      <h2 className={styles.title}>Seleccioná tu fecha de reserva</h2>
      {/* <div className={styles.container}> */}
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        minDate={new Date()}
        dateFormat="MM/dd/yyyy"
        excludeDates={datesNotAvailable}
        monthsShown={2}
        inline

        renderCustomHeader={({
          monthDate,
          customHeaderCount,
          decreaseMonth,
          increaseMonth,
        }) => (
          <>
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
          </>
        )}
        calendarClassName="calendar-styles whole-calendar-container calendar-container-product calendar-container-booking"
        wrapperClassName="calendar-wrapper"
        clearButtonClassName="calendar-close-button"
        isClearable={true}
        locale={locale}
        onKeyDown={false}
        showPopperArrow={false}
        shouldCloseOnSelect={false}
        /* datesNotAvailable={false} */
        selected={null}
        disabledKeyboardNavigation
        onChange={(update) => {
          setDateRange(update);
        }}
        selectsDisabledDaysInRange={false}
      /* disabled={false} */
      /* filterDates={availableDates} */
      >
      </DatePicker>
    </div>
    /* </div> */
  );
};

export default CalendarBooking;
