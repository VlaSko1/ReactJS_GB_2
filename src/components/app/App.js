import styles from './app.module.css';
import { Message } from '../message/Message';

function App() {
  const textMessage = "Привет, React";
  return (
    <div className={styles.app}>
      <header className={styles.app__header}>
        <Message text={textMessage}/>

      </header>
    </div>
  );
}

export default App;
