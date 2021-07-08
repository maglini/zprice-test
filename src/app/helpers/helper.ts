import { User } from '../models/user';

export class Helper {
  getLastPossibleId(users:User[]) {
    let maxId = 0;
    users.forEach(u => {
      if (u.id > maxId) {
        maxId = u.id;
      }
    });
    return ++maxId;
  }

  isUserExist(users:User[], user:User) {
    return users.some(u => u.email === user.email || u.number === user.number);
  }
}


