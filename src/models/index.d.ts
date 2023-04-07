import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerUsuario = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Usuario, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nome: string;
  readonly email: string;
  readonly pagamentos?: (Pagamento | null)[] | null;
  readonly grupos?: (GrupoUsuario | null)[] | null;
  readonly despesas?: (DespesaUsuario | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsuario = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Usuario, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nome: string;
  readonly email: string;
  readonly pagamentos: AsyncCollection<Pagamento>;
  readonly grupos: AsyncCollection<GrupoUsuario>;
  readonly despesas: AsyncCollection<DespesaUsuario>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Usuario = LazyLoading extends LazyLoadingDisabled ? EagerUsuario : LazyUsuario

export declare const Usuario: (new (init: ModelInit<Usuario>) => Usuario) & {
  copyOf(source: Usuario, mutator: (draft: MutableModel<Usuario>) => MutableModel<Usuario> | void): Usuario;
}

type EagerGrupo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Grupo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly usuarios?: (GrupoUsuario | null)[] | null;
  readonly despesas?: (GrupoDespesa | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGrupo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Grupo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly usuarios: AsyncCollection<GrupoUsuario>;
  readonly despesas: AsyncCollection<GrupoDespesa>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Grupo = LazyLoading extends LazyLoadingDisabled ? EagerGrupo : LazyGrupo

export declare const Grupo: (new (init: ModelInit<Grupo>) => Grupo) & {
  copyOf(source: Grupo, mutator: (draft: MutableModel<Grupo>) => MutableModel<Grupo> | void): Grupo;
}

type EagerDespesa = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Despesa, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pagamentos?: Pagamento[] | null;
  readonly usuarios?: DespesaUsuario[] | null;
  readonly grupos?: (GrupoDespesa | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDespesa = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Despesa, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pagamentos: AsyncCollection<Pagamento>;
  readonly usuarios: AsyncCollection<DespesaUsuario>;
  readonly grupos: AsyncCollection<GrupoDespesa>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Despesa = LazyLoading extends LazyLoadingDisabled ? EagerDespesa : LazyDespesa

export declare const Despesa: (new (init: ModelInit<Despesa>) => Despesa) & {
  copyOf(source: Despesa, mutator: (draft: MutableModel<Despesa>) => MutableModel<Despesa> | void): Despesa;
}

type EagerPagamento = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pagamento, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly valorPago: number;
  readonly despesaID: string;
  readonly usuarioID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPagamento = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pagamento, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly valorPago: number;
  readonly despesaID: string;
  readonly usuarioID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Pagamento = LazyLoading extends LazyLoadingDisabled ? EagerPagamento : LazyPagamento

export declare const Pagamento: (new (init: ModelInit<Pagamento>) => Pagamento) & {
  copyOf(source: Pagamento, mutator: (draft: MutableModel<Pagamento>) => MutableModel<Pagamento> | void): Pagamento;
}

type EagerGrupoUsuario = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GrupoUsuario, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly usuarioId?: string | null;
  readonly grupoId?: string | null;
  readonly usuario: Usuario;
  readonly grupo: Grupo;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGrupoUsuario = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GrupoUsuario, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly usuarioId?: string | null;
  readonly grupoId?: string | null;
  readonly usuario: AsyncItem<Usuario>;
  readonly grupo: AsyncItem<Grupo>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GrupoUsuario = LazyLoading extends LazyLoadingDisabled ? EagerGrupoUsuario : LazyGrupoUsuario

export declare const GrupoUsuario: (new (init: ModelInit<GrupoUsuario>) => GrupoUsuario) & {
  copyOf(source: GrupoUsuario, mutator: (draft: MutableModel<GrupoUsuario>) => MutableModel<GrupoUsuario> | void): GrupoUsuario;
}

type EagerDespesaUsuario = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DespesaUsuario, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly usuarioId?: string | null;
  readonly despesaId?: string | null;
  readonly usuario: Usuario;
  readonly despesa: Despesa;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDespesaUsuario = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DespesaUsuario, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly usuarioId?: string | null;
  readonly despesaId?: string | null;
  readonly usuario: AsyncItem<Usuario>;
  readonly despesa: AsyncItem<Despesa>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DespesaUsuario = LazyLoading extends LazyLoadingDisabled ? EagerDespesaUsuario : LazyDespesaUsuario

export declare const DespesaUsuario: (new (init: ModelInit<DespesaUsuario>) => DespesaUsuario) & {
  copyOf(source: DespesaUsuario, mutator: (draft: MutableModel<DespesaUsuario>) => MutableModel<DespesaUsuario> | void): DespesaUsuario;
}

type EagerGrupoDespesa = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GrupoDespesa, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly grupoId?: string | null;
  readonly despesaId?: string | null;
  readonly grupo: Grupo;
  readonly despesa: Despesa;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGrupoDespesa = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GrupoDespesa, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly grupoId?: string | null;
  readonly despesaId?: string | null;
  readonly grupo: AsyncItem<Grupo>;
  readonly despesa: AsyncItem<Despesa>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GrupoDespesa = LazyLoading extends LazyLoadingDisabled ? EagerGrupoDespesa : LazyGrupoDespesa

export declare const GrupoDespesa: (new (init: ModelInit<GrupoDespesa>) => GrupoDespesa) & {
  copyOf(source: GrupoDespesa, mutator: (draft: MutableModel<GrupoDespesa>) => MutableModel<GrupoDespesa> | void): GrupoDespesa;
}