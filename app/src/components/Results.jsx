import{ useEffect, useId } from 'react'
import { useApp } from '../hooks/useApp'

function Results() {
  const txtYearsId = useId();
  const txtMonthsId = useId();
  const txtDaysId = useId();
  const duration = 900

  const { numberDays, numberMonths, numberYears } = useApp()
  
  const animateValue = (obj, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  useEffect( ()=>{
    const objYears = document.getElementById(txtYearsId)
    if(numberYears>0)
      animateValue(objYears,0,numberYears,500)
    
    const objMonth = document.getElementById(txtMonthsId)
    if(numberMonths>0)
      animateValue(objMonth,0,numberMonths,500)

    const objDay = document.getElementById(txtDaysId)
    if(numberDays>0)
      animateValue(objDay,0,numberDays,500)

  })

  
  
  return (
    <div className='p-10'>
        <h1><span className="numbers" id={txtYearsId}>{numberYears>0? numberYears:'--'}</span> <span>years</span></h1>
        <h2><span className="numbers" id={txtMonthsId}>{numberMonths>0? numberMonths:'--'}</span> <span>months</span></h2>
        <h3><span className="numbers" id={txtDaysId}>{numberDays>0? numberDays:'--'}</span> <span>days</span></h3>
    </div>
  )
}

Results.propTypes = {}

export default Results
