// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import * as Sequelize from 'sequelize'
import { DataTypes } from 'sequelize';
import { IntegerDataType, DateDataType } from 'sequelize/types';
import { Application } from '../declarations';

export interface CardData {
  readonly id?: IntegerDataType,
  boardId?: IntegerDataType,
  title: string,
  description?: string,
  createdAt?: DateDataType,
  updatedAt?: DateDataType
}

// export interface CardInstance extends Sequelize.Model<CardInstance, CardData> {
// };

export default function (app: Application) {
  const sequelizeClient: Sequelize.Sequelize = app.get('sequelizeClient');
  const boards = sequelizeClient.models['boards'];

  console.log(boards);

  const Card = sequelizeClient.define('cards', {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    boardId: {
      type: DataTypes.INTEGER,

      references: {
        // This is a reference to another model
        model: boards,

        // This is the column name of the referenced model
        key: 'id',

        // This declares when to check the foreign key constraint. PostgreSQL only.
        // NOTE: I don't know why this does not work, but I let it here to log the attempt
        // deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      },
      allowNull: false
    },

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
    },
    validate : {
      ensureBoardId: function () {
        if (!this.boardId === null) {
          throw new Error ('get your shit together fam');
        }
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  (Card as any).associate = function (models: any) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/

    models.cards.belongsTo(models.boards, {});
  };

  return Card;
}
