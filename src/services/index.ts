import { Application } from '../declarations';
import users from './users/users.service';
import boards from './boards/boards.service';
import cards from './cards/cards.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application) {
  app.configure(users);
  app.configure(boards);
  app.configure(cards);
}
