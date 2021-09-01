import { db } from '../';

export const chatsRef = db.ref('chats');


export const chatsApi = {
  createPost: (title, content) => {
    return chatsRef.push({title, content});
  }
}