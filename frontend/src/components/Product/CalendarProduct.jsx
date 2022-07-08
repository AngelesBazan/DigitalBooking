import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext"
import "../../styles/product/calendarProduct.css";
import "react-multi-date-picker/styles/colors/teal.css";
import DatePicker, { registerLocale } from "react-datepicker";
import { fetchBookingsByProductId } from "../../helpers/getBookingsByProductId";
import es from "date-fns/locale/es";
import moment from "moment";
registerLocale("es", es);

const CalendarProduct = ({ productData, setIsRedirect, urlBase }) => {

  const { goToBooking, setGoToBooking } = useContext(ProductContext);

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [bookings, setBookings] = useState([]);

  const getDaysArray = (start, end) => {
    let arr = [];
    let dt;
    for (dt = new Date(start); dt < new Date(end); dt.setDate(dt.getDate() + 1)) {
      arr.push(new Date(dt));
    }
    return arr;
  };

  let datesNotAvailable = [];
  if (bookings) {
    bookings.map((elem, index) => {
      let daylist = getDaysArray(
        new Date(elem.initial_date.split("-")),
        new Date(elem.final_date.split("-"))
      );
      return daylist.map((day) => {
        const dayArray = new Date(moment(day).format().slice(0, 10).split("-"));
        return datesNotAvailable.push(dayArray);
      });
    });
  }

  useEffect(() => {
    fetchBookingsByProductId(`${urlBase}/products/${productData.id}/bookings`, setBookings);
  }, [productData])
  
  useEffect(() => {
    return setGoToBooking(false);
  }, [])

  let toBooking = useNavigate();
  let toLogin = useNavigate();

  const redirect = () => {
    setIsRedirect(true);
    toLogin("/login");
  };


  const days = ["D", "L", "M", "M", "J", "V", "S"];
  const months = [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic",
  ];

  const locale = {
    localize: {
      day: (n) => days[n],
      month: (n) => months[n],
    },
    formatLong: {
      date: () => "dd/mm/yyyy",
    },
  };

  return (
    <div className="whole-container-calendar">
      <div>
        <h2 className="h2-calendar">Fechas disponibles</h2>
      </div>
      <div className="calendar-container">
        <div className="container-1">
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
                  style={
                    customHeaderCount === 1 ? { visibility: "hidden" } : null
                  }
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
                  {monthDate
                    .toLocaleString(es, {
                      month: "long",
                    })
                    .charAt(0)
                    .toUpperCase() +
                    monthDate
                      .toLocaleString(es, {
                        month: "long",
                      })
                      .slice(1)}
                </span>
                <button
                  aria-label="Next Month"
                  className={
                    "react-datepicker__navigation react-datepicker__navigation--next"
                  }
                  style={
                    customHeaderCount === 0 ? { visibility: "hidden" } : null
                  }
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
            calendarClassName="calendar-styles whole-calendar-container calendar-container-product"
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
            /* onChange={(update) => {
              setDateRange(update);
            }} */
            selectsDisabledDaysInRange={false}
          /* disabled={false} */
          /* filterDates={availableDates} */
          ></DatePicker>
        </div>
        <div className="container-2">
          <p className="p-calendar">
            Agregá tus fechas de viaje para obtener precios exactos
          </p>
          <button
            onClick={() => {
              setGoToBooking(true)
              window.localStorage.getItem("jwt")
                ? toBooking(
                  `/${productData.category.title
                    .replace(/ /g, "")
                    .toLowerCase()}/${productData.name
                      .replace(/ /g, "")
                      .toLowerCase()}/reserva`
                )
                : redirect();
            }}
            className="button-calendar"
          >
            {" "}
            Iniciar reserva{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarProduct;
