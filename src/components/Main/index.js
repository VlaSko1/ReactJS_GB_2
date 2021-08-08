import { MessageList } from '../MessageList';
import { InputField } from '../InputField';
import { ChatList } from '../ChatList';
import styles from './main.module.scss';


export function Main() {
  return (
    <main>
      <div className={styles.chatMessageField}>
        <div className={styles.chatField}>
          <ChatList/>
        </div>
        <div className={styles.messageField} id="messageField">
          <MessageList />
        </div>
      </div>

      <div className={styles.inputField}>
        <InputField />
      </div>
    </main>
  )
}