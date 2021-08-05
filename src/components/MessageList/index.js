import styles from './messageField.module.scss';
import { Message } from '../Message';
import { useEffect } from 'react';
import { scrollFunc } from '../../utils/myFunc';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';




export function MessageList(props) {

  /*const { idChat } = useParams();
  console.log(idChat);*/

  useEffect(() => {
    scrollFunc();
  }, [props.messageList])
  

  return (
      
      <div className={styles.messageField__field}>
        { props.messageList !== undefined ? props.messageList.map((message) => <Message key={message.id} message={message} />) : <p>Выберите чат</p>}
      </div>

  )
}