import React from 'react';
//import './message.css';
//import './message_2.scss';
import styles from './message.module.css'

export function Message(props) {
  return(
    <p className={[styles.message__text, styles.view_scss].join(' ') }>{props.text}</p>
  )
}