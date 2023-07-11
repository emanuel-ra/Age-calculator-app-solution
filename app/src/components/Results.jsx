import{ useEffect, useId } from 'react'
import { useApp } from '../hooks/useApp'

function Results() {
  const txtYearsId = useId();
  const txtMonthsId = useId();
  const txtDaysId = useId();
  const duration = 900
  
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
  
  })
  
  const numberOfYear=0
  const numberOfMonths=0
  const numberOfDays=0
  return (
    <div className='p-10'>
        <h1><span className="numbers" id={txtYearsId}>{numberOfYear>0? numberOfYear:'--'}</span> <span>years</span></h1>
        <h2><span className="numbers" id={txtMonthsId}>{numberOfMonths>0? numberOfMonths:'--'}</span> <span>months</span></h2>
        <h3><span className="numbers" id={txtDaysId}>{numberOfDays>0? numberOfDays:'--'}</span> <span>days</span></h3>
    </div>
  )
}

Results.propTypes = {}

export default Results
