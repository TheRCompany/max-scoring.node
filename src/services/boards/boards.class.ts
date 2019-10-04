import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Application } from '../../declarations';
import { Params } from 'express-serve-static-core';
import { BoardData } from '../../models/boards.model'

export class Boards extends Service {
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }

  // May be not fully fonctionnal, but the override technique is good
  create (data: BoardData, params?: Params) {
    const { title, description, created_at, updated_at } = data;
    const boardData = {
      title,
      description,
      created_at,
      updated_at
    };
    
    return super.create(boardData, params);
  };
}
