// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Usuario, Grupo, Despesa, Pagamento, GrupoUsuario, DespesaUsuario, GrupoDespesa } = initSchema(schema);

export {
  Usuario,
  Grupo,
  Despesa,
  Pagamento,
  GrupoUsuario,
  DespesaUsuario,
  GrupoDespesa
};