// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes } from 'sequelize';
import { IntegerDataType, DateDataType } from 'sequelize/types';
import { Application } from '../declarations';

export interface BoardData {
  id: IntegerDataType,
  title: string,
  description?: string,
  created_at?: DateDataType,
  updated_at?: DateDataType
}

export default function (app: Application) {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');

  const boards = sequelizeClient.define('boards', {

    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }

  }, {
    hooks: {
      beforeCount(options: any) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  (boards as any).associate = function (models: any) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return boards;
}
