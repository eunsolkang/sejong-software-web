import React from 'react'
import PropTypes from 'prop-types'
import './SassComponent.scss'

const SassComponent = (props) => {
  return (
    <div className="SassComponent">
      <div className="box red" />
      <div className="box orange" />
      <div className="box yellow" />
      <div className="box green" />
      <div className="box blue" />
      <div className="box indigo" />
      <div className="box violet" />
    </div>
  )
}

export default SassComponent
