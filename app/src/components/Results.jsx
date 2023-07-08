import React from 'react'
import PropTypes from 'prop-types'
import { useApp } from '../hooks/useApp'

function Results() {

  const {numberOfDays, numberOfMonths, numberOfYear} = useApp()
  return (
    <div className='p-10'>
        <h1><span className="numbers">{numberOfYear>0? numberOfYear:'--'}</span> <span>years</span></h1>
        <h2><span className="numbers">{numberOfMonths>0? numberOfMonths:'--'}</span> <span>months</span></h2>
        <h3><span className="numbers">{numberOfDays>0? numberOfDays:'--'}</span> <span>days</span></h3>
    </div>
  )
}

Results.propTypes = {}

export default Results
