import React from 'react';

import './Date.css'

const Months = [
'Jan', 
'Feb', 
'Mar',
'Apr',
'May',
'Jun',
'Jul',
'Sep',
'Oct',
'Nov',
'Dec'
]

function startToPresent(){
  let today = new Date();
  let thisYear = today.getFullYear() + 1;
  
  return function(start){
      let length = thisYear - start;
      return Array.from({length}, (_, i) => start + i)
  } 
}

export function YearPicker(){
  let years = startToPresent()(1900);
  years.reverse()
  return (
    <div className="picker-main">
      <select name="option" className="month-select">
        <option defaultValue="year" ></option>
        {
          years.map((year, i) => {
            return (
              <option value={`${i+1}`} key={`key-${i}`} >
                 {year}
              </option>
            )
          })
        }
      </select>
      
    </div>
  )
}

export function DayPicker(){
  let days = Array.from(Array(31).keys());
  days.shift();
  return (
    <div className="picker-main">
    <select name="option" className="month-select" id="day-picker">
        <option defaultValue="Day"  ></option>
        {
          days.map((day, i) => {
            return (
              <option value={`${i+1}`} key={`key-${i}`} >
                 {day}
              </option>
            )
          })
        }
      </select>
    </div>
  )
}

export function MonthPicker(){

  return (
    <div className="picker-main">
    <select name="option" className="month-select" id="month-picker">
        <option defaultValue="month"  ></option>
        {
          Months.map((month, i) => {
            return (
              <option value={`${i+1}`} key={`key-${i}`} >
                 {month}
              </option>
            )
          })
        }
      </select>
    </div>
  )
}


export function GenderPicker(){

  return (
    <div className="picker-main">
    <select name="option" className="month-select" id="gender-picker">
        <option defaultValue="month"  ></option>
        <option value="1">Male</option>
        <option value="2">Female</option>
      </select>
    </div>
  )
}
