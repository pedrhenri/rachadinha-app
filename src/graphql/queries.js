/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUsuario = /* GraphQL */ `
  query GetUsuario($id: ID!) {
    getUsuario(id: $id) {
      id
      nome
      email
      pagamentos {
        nextToken
        startedAt
      }
      grupos {
        nextToken
        startedAt
      }
      despesas {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsuarios = /* GraphQL */ `
  query ListUsuarios(
    $filter: ModelUsuarioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsuarios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nome
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsuarios = /* GraphQL */ `
  query SyncUsuarios(
    $filter: ModelUsuarioFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsuarios(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nome
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getGrupo = /* GraphQL */ `
  query GetGrupo($id: ID!) {
    getGrupo(id: $id) {
      id
      usuarios {
        nextToken
        startedAt
      }
      despesas {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listGrupos = /* GraphQL */ `
  query ListGrupos(
    $filter: ModelGrupoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGrupos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGrupos = /* GraphQL */ `
  query SyncGrupos(
    $filter: ModelGrupoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGrupos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getDespesa = /* GraphQL */ `
  query GetDespesa($id: ID!) {
    getDespesa(id: $id) {
      id
      pagamentos {
        nextToken
        startedAt
      }
      usuarios {
        nextToken
        startedAt
      }
      grupos {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listDespesas = /* GraphQL */ `
  query ListDespesas(
    $filter: ModelDespesaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDespesas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDespesas = /* GraphQL */ `
  query SyncDespesas(
    $filter: ModelDespesaFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDespesas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPagamento = /* GraphQL */ `
  query GetPagamento($id: ID!) {
    getPagamento(id: $id) {
      id
      valorPago
      despesaID
      usuarioID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPagamentos = /* GraphQL */ `
  query ListPagamentos(
    $filter: ModelPagamentoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPagamentos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        valorPago
        despesaID
        usuarioID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPagamentos = /* GraphQL */ `
  query SyncPagamentos(
    $filter: ModelPagamentoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPagamentos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        valorPago
        despesaID
        usuarioID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const pagamentosByDespesaID = /* GraphQL */ `
  query PagamentosByDespesaID(
    $despesaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPagamentoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pagamentosByDespesaID(
      despesaID: $despesaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        valorPago
        despesaID
        usuarioID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const pagamentosByUsuarioID = /* GraphQL */ `
  query PagamentosByUsuarioID(
    $usuarioID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPagamentoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pagamentosByUsuarioID(
      usuarioID: $usuarioID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        valorPago
        despesaID
        usuarioID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getGrupoUsuario = /* GraphQL */ `
  query GetGrupoUsuario($id: ID!) {
    getGrupoUsuario(id: $id) {
      id
      usuarioId
      grupoId
      usuario {
        id
        nome
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      grupo {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listGrupoUsuarios = /* GraphQL */ `
  query ListGrupoUsuarios(
    $filter: ModelGrupoUsuarioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGrupoUsuarios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        usuarioId
        grupoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGrupoUsuarios = /* GraphQL */ `
  query SyncGrupoUsuarios(
    $filter: ModelGrupoUsuarioFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGrupoUsuarios(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        usuarioId
        grupoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const grupoUsuariosByUsuarioId = /* GraphQL */ `
  query GrupoUsuariosByUsuarioId(
    $usuarioId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGrupoUsuarioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    grupoUsuariosByUsuarioId(
      usuarioId: $usuarioId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        usuarioId
        grupoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const grupoUsuariosByGrupoId = /* GraphQL */ `
  query GrupoUsuariosByGrupoId(
    $grupoId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGrupoUsuarioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    grupoUsuariosByGrupoId(
      grupoId: $grupoId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        usuarioId
        grupoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getDespesaUsuario = /* GraphQL */ `
  query GetDespesaUsuario($id: ID!) {
    getDespesaUsuario(id: $id) {
      id
      usuarioId
      despesaId
      usuario {
        id
        nome
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      despesa {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listDespesaUsuarios = /* GraphQL */ `
  query ListDespesaUsuarios(
    $filter: ModelDespesaUsuarioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDespesaUsuarios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        usuarioId
        despesaId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDespesaUsuarios = /* GraphQL */ `
  query SyncDespesaUsuarios(
    $filter: ModelDespesaUsuarioFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDespesaUsuarios(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        usuarioId
        despesaId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const despesaUsuariosByUsuarioId = /* GraphQL */ `
  query DespesaUsuariosByUsuarioId(
    $usuarioId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDespesaUsuarioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    despesaUsuariosByUsuarioId(
      usuarioId: $usuarioId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        usuarioId
        despesaId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const despesaUsuariosByDespesaId = /* GraphQL */ `
  query DespesaUsuariosByDespesaId(
    $despesaId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDespesaUsuarioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    despesaUsuariosByDespesaId(
      despesaId: $despesaId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        usuarioId
        despesaId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getGrupoDespesa = /* GraphQL */ `
  query GetGrupoDespesa($id: ID!) {
    getGrupoDespesa(id: $id) {
      id
      grupoId
      despesaId
      grupo {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      despesa {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listGrupoDespesas = /* GraphQL */ `
  query ListGrupoDespesas(
    $filter: ModelGrupoDespesaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGrupoDespesas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        grupoId
        despesaId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGrupoDespesas = /* GraphQL */ `
  query SyncGrupoDespesas(
    $filter: ModelGrupoDespesaFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGrupoDespesas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        grupoId
        despesaId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const grupoDespesasByGrupoId = /* GraphQL */ `
  query GrupoDespesasByGrupoId(
    $grupoId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGrupoDespesaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    grupoDespesasByGrupoId(
      grupoId: $grupoId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        grupoId
        despesaId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const grupoDespesasByDespesaId = /* GraphQL */ `
  query GrupoDespesasByDespesaId(
    $despesaId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGrupoDespesaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    grupoDespesasByDespesaId(
      despesaId: $despesaId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        grupoId
        despesaId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
