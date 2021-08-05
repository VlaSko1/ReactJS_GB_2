import { MessageList } from '../MessageList';
import { ChatList } from '../ChatList';
import styles from './mainNoChat.module.scss';


export function MainNoChat(props) {
  return (
    <main>
      <div className={styles.chatMessageField}>
        <div className={styles.chatField}>
          <ChatList />
        </div>
        <div className={styles.messageField} id="messageField">
          <p className={styles.messageField__text}>Выберите чат</p>
        </div>
      </div>


    </main>
  )
}
