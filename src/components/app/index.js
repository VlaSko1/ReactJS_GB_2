import styles from './app.module.css';
import { MessageField} from '../MessageField';
import { useCallback, useEffect, useState } from 'react';
import { Header } from '../Header';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [text, setText] = useState('');

  const asyncAnswer = useCallback((time) =>  {
    return setTimeout(() => {
      setMessageList([...messageList, {Author: 'Robot', text: "Привет! Я робот!"}]);
    }, time)
  }, [messageList]);

  const generateTime = () => Math.floor(Math.random() * 2001);

  useEffect( () => {
    if(messageList.length !== 0) {
      if (messageList[messageList.length - 1].Author === "User1" ) {
        let timer = asyncAnswer(generateTime());
        return () => {
          clearTimeout(timer);
        }
      }
    }
  }, [messageList, asyncAnswer])

  const addMessage = () => {
    if (text !== '') {
      setMessageList([...messageList, {Author: 'User1', text}]);
      setText('');
    }
  };

  const changeText = (e) => {
    if (e.target.value !== ""){
      setText(e.target.value);
    }
  }


  return (
    <div className={styles.app}>
      <Header />
      <MessageField messageList={messageList} addMessage={addMessage} changeText={changeText} value={text}/>
    </div>
  );
}

export default App;
