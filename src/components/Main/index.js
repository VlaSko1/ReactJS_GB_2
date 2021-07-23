import { MessageField } from '../MessageField';
import { InputField } from '../InputField';
import { ChatField } from '../ChatField';
import styles from './main.module.scss';


export function Main(props) {
  return (
    <main>
      <div className={styles.chatMessageField}>
        <div className={styles.chatField}>
          <ChatField/>
        </div>
        <div className={styles.messageField} id="messageField">
          <MessageField messageList={props.messageList} addMessage={props.addMessage} />
        </div>
      </div>

      <div className={styles.inputField}>
        <InputField value={props.value} addMessage={props.addMessage} changeText={props.changeText} />
      </div>
    </main>
  )
}