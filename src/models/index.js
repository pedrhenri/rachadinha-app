// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, Participante, Compra, Pagamento, Blog, Post, Comment } = initSchema(schema);

export {
  Todo,
  Participante,
  Compra,
  Pagamento,
  Blog,
  Post,
  Comment
};