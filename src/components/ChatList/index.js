import faker from 'faker';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import styles from './chatList.module.scss';

const listChat = Array.from({ length: 10 }).map(() => ({
  id: faker.datatype.uuid(),
  avatar: faker.image.avatar(),
  name: faker.name.firstName(),
}));

export function ChatList(props) {
  
  const arrChatId = Object.keys(props.chats);


  return (
    <List >
      {
        arrChatId.map((item) => (
        <NavLink className={styles.link} activeClassName={styles.activeLink} to={`/chats/${item}`} key={item}>
          <ListItem >
            <ListItemText primary={props.chats[item].name} />
          </ListItem>
        </NavLink>))
      }
    </List>
  )
}


