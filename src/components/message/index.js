import React from 'react';
import styles from './message.module.css'

export function Message(props) {
  const {Author, text} = props.message;
  return(
    <p className={styles.message__text}>
      <span className={Author === "Robot" ? styles.robot__text : styles.user__text}>{Author}</span>: {text}
    </p>
  )
}