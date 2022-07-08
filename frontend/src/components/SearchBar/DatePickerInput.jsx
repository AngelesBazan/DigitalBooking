import React, { useState } from 'react'
import DatePicker from "react-multi-date-picker"
import Icon from 'react-multi-date-picker/components/icon'
import '../../styles/datePickerInput.css'
import Toolbar from "react-multi-date-picker/plugins/toolbar"
import "react-multi-date-picker/styles/layouts/mobile.css"

/* REVISAR: esto es para configurar cómo se ve una vez elegido el rango de fechas. Mirar línea 62.*/
function CustomRangeInput({openCalendar, value}) {
  let from = value[0] || ""
  let to = value[1] || ""
  
  value = from && to ? from + " - " + to : from
  
  return (
    <input
      onFocus={openCalendar}
      value={value}
      readOnly
    />
  )
}

const DatePickerInput = () => {
  let [value, setValue] = useState(new Date())

  const [state, setState] = useState({
    mainPosition: "bottom",
    relativePosition: "start",
    offsetY: 10
  })
  const updateState = (key, value) => setState({ 
    ...state, 
    [key]: value
  })
  const {
    mainPosition,
    relativePosition,
    offsetY
  } = state

  const weekDays = ["S", "M", "T", "W", "T", "F", "S"]
  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

  return (
    <div className='datePicker-container'>
      <DatePicker
          className="rmdp-mobile"
        inputClass="custom-input"
        
        arrow={false}
        /*Establece días y meses como están en el array*/
        weekDays={weekDays}
        months={months}

        onChange={setValue}
        numberOfMonths={2}
        placeholder={"Check in - Check out"}
        hideOnScroll
        hideYear
        format={"DD MMM."}
        
        multiple
        range

        /*REVISAR: esto es para configurar cómo se ve una vez elegido el rango de fechas.
        IMPORTANTE: cuando está activado pisa los estilos del input.
        Mirar línea 20.*/
        //render={<CustomRangeInput />}
        

        calendarPosition={`${mainPosition}-${relativePosition}`}
        relativePosition={relativePosition}
        offsetY={offsetY}

        button
        /*Esto bloquea fechas anteriores a la del día*/
        minDate={new Date()}
      /* MOBILE
      style={{width: '95vw', height: '40px'}} */
      /* style={{width: '38vw', height: '40px', marginTop:'10px'} }*/
      plugins={[
        <Toolbar 
          position="bottom" 
          sort={["close"]} 
        />,
      ]} 
      />
    </div>

  )

}

export default DatePickerInput