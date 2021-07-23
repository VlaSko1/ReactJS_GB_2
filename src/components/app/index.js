import styles from './app.module.css';
import { useCallback, useEffect, useState } from 'react';
import { Header } from '../Header';
import { Main } from '../Main';
import { generateTime } from '../../utils/myFunc';
import faker from 'faker';
import joshuaraichur_128 from '../../asset/joshuaraichur_128.jpg';
import { scrollFunc } from '../../utils/myFunc';


function App() {
  const [messageList, setMessageList] = useState([]);
  const [text, setText] = useState('');

  const asyncAnswer = useCallback((time) => {
    return setTimeout(() => {
      setMessageList([...messageList, {
        id: faker.datatype.uuid(),
        Author: {
          name: 'Robot',
          id: 9999999,
          avatar: joshuaraichur_128
        }, 
        text: "Привет! Я робот!", 
        date: new Date()
      }]);
    }, time)
  }, [messageList]);


  useEffect(() => {
    if (messageList.length !== 0) {
      if (messageList[messageList.length - 1].Author.name !== "Robot") {
        let timer = asyncAnswer(generateTime());
        return () => {
          clearTimeout(timer);
        }
      }
    }
  }, [messageList, asyncAnswer])

  useEffect(() => {
    if (messageList.length !== 0) {
      scrollFunc();
    }
  }, [messageList])

  const addMessage = (e) => {
    e.preventDefault();
    if (text !== '') {
      setMessageList([...messageList, {
        id: faker.datatype.uuid(),
        Author: {
          name: faker.name.firstName(),
          id: faker.datatype.uuid(),
          avatar: faker.image.avatar(),
        }, 
        text, 
        date: new Date()
      }]);
      setText('');
    }
  };

  const changeText = (e) => {

    setText(e.target.value);

  }


  return (
    <div className={styles.app}>
      <Header />
      <Main messageList={messageList} addMessage={addMessage} changeText={changeText} value={text} />
    </div>
  );
}

export default App;
