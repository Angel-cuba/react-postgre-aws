// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Images } = initSchema(schema);

export {
  Images
};