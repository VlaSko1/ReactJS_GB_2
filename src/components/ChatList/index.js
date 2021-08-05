import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import styles from './chatList.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useCallback } from 'react';
import { createChats } from '../../entities/chats';
import { getChats } from '../../store/chats';

export function ChatList(props) {


  const dispatch = useDispatch();

  const chats = useSelector(getChats);

  return (
    <List >
      {
        chats.map((item) => (
          <NavLink className={styles.link} activeClassName={styles.activeLink} to={`/chats/${item.idChat}`} key={item.idChat}>
            <ListItem >
              <ListItemAvatar >
                <Avatar alt={item.name} src={item.avatar} />
              </ListItemAvatar>
              <ListItemText primary={item.name} />
            </ListItem>
          </NavLink>))
      }
    </List>
  )
}


