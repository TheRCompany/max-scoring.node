import { Application } from '../../../src/declarations';

const env = process.env.NODE_ENV || 'development';
const dialect = 'postgres';

export default function (app: Application) {
  return {
    [env]: {
      dialect,
      url: app.get(dialect),
      migrationStorageTableName: '_migrations'
    }
  }
};
