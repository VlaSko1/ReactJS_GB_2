import styles from './messageField.module.scss';
import { Message } from '../Message';




export function MessageList(props) {

  

  return (
      
      <div className={styles.messageField__field}>
        {props.messageList.map((message) => <Message key={message.id} message={message} />)}
      </div>
      
    
  )
}