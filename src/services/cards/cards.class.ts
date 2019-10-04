import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Application } from '../../declarations';
import { Params } from 'express-serve-static-core';
import { CardsData } from '../../models/cards.model'

export class Cards extends Service {
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }
}
