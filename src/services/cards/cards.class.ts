import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Application } from '../../declarations';
import { Params } from 'express-serve-static-core';
import { CardData } from '../../models/cards.model';
export class Cards extends Service {
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }

  create (data: CardData, params?: Params) {
    const { boardId, title, description, createdAt, updatedAt } = data;
    const cardData = {
      boardId,
      title,
      description,
      createdAt,
      updatedAt
    };
    return super.create(cardData, params);
  };
}
