import styles from './messageField.module.scss';
import { Message } from '../Message';
import { useEffect } from 'react';
import { scrollFunc} from '../../utils/myFunc';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMessagesByIdChat} from '../../store/messages';




export function MessageList( ) {

  const { idChat } = useParams();

  const messageList = useSelector(getMessagesByIdChat(idChat));
  

  useEffect(() => {
    scrollFunc();
  }, [messageList])



  /*const asyncAnswer = useCallback((time) => {
    return setTimeout(() => {
      dispatch(createAddMessageChat({
        id: faker.datatype.uuid(),
        Author: {
          name: 'Robot',
          id: 9999999,
          avatar: joshuaraichur_128
        },
        text: "Привет! Я робот!",
        date: new Date()
      }, idChat));
    }, time)
  }, [dispatch, idChat]);


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
  */

  return (
      
      <div className={styles.messageField__field}>
        { messageList !== undefined ? messageList.map((message) => <Message key={message.id} message={message} />) : <p>Выберите чат</p>}
      </div>

  )
}