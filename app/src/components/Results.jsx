import React from 'react'
import PropTypes from 'prop-types'

function Results(props) {
  return (
    <div className='p-10'>
        <h1><span className="numbers">--</span> <span>years</span></h1>
        <h2><span className="numbers">--</span> <span>months</span></h2>
        <h3><span className="numbers">--</span> <span>days</span></h3>
    </div>
  )
}

Results.propTypes = {}

export default Results
