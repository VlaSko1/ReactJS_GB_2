import React from 'react';
import './message.css';
import './message_2.scss';

export function Message(props) {
  return(
    <p className="message__text view_scss">{props.text}</p>
  )
}