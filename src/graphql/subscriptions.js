/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUsuario = /* GraphQL */ `
  subscription OnCreateUsuario($filter: ModelSubscriptionUsuarioFilterInput) {
    onCreateUsuario(filter: $filter) {
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
export const onUpdateUsuario = /* GraphQL */ `
  subscription OnUpdateUsuario($filter: ModelSubscriptionUsuarioFilterInput) {
    onUpdateUsuario(filter: $filter) {
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
export const onDeleteUsuario = /* GraphQL */ `
  subscription OnDeleteUsuario($filter: ModelSubscriptionUsuarioFilterInput) {
    onDeleteUsuario(filter: $filter) {
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
export const onCreateGrupo = /* GraphQL */ `
  subscription OnCreateGrupo($filter: ModelSubscriptionGrupoFilterInput) {
    onCreateGrupo(filter: $filter) {
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
export const onUpdateGrupo = /* GraphQL */ `
  subscription OnUpdateGrupo($filter: ModelSubscriptionGrupoFilterInput) {
    onUpdateGrupo(filter: $filter) {
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
export const onDeleteGrupo = /* GraphQL */ `
  subscription OnDeleteGrupo($filter: ModelSubscriptionGrupoFilterInput) {
    onDeleteGrupo(filter: $filter) {
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
export const onCreateDespesa = /* GraphQL */ `
  subscription OnCreateDespesa($filter: ModelSubscriptionDespesaFilterInput) {
    onCreateDespesa(filter: $filter) {
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
export const onUpdateDespesa = /* GraphQL */ `
  subscription OnUpdateDespesa($filter: ModelSubscriptionDespesaFilterInput) {
    onUpdateDespesa(filter: $filter) {
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
export const onDeleteDespesa = /* GraphQL */ `
  subscription OnDeleteDespesa($filter: ModelSubscriptionDespesaFilterInput) {
    onDeleteDespesa(filter: $filter) {
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
export const onCreatePagamento = /* GraphQL */ `
  subscription OnCreatePagamento(
    $filter: ModelSubscriptionPagamentoFilterInput
  ) {
    onCreatePagamento(filter: $filter) {
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
export const onUpdatePagamento = /* GraphQL */ `
  subscription OnUpdatePagamento(
    $filter: ModelSubscriptionPagamentoFilterInput
  ) {
    onUpdatePagamento(filter: $filter) {
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
export const onDeletePagamento = /* GraphQL */ `
  subscription OnDeletePagamento(
    $filter: ModelSubscriptionPagamentoFilterInput
  ) {
    onDeletePagamento(filter: $filter) {
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
export const onCreateGrupoUsuario = /* GraphQL */ `
  subscription OnCreateGrupoUsuario(
    $filter: ModelSubscriptionGrupoUsuarioFilterInput
  ) {
    onCreateGrupoUsuario(filter: $filter) {
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
export const onUpdateGrupoUsuario = /* GraphQL */ `
  subscription OnUpdateGrupoUsuario(
    $filter: ModelSubscriptionGrupoUsuarioFilterInput
  ) {
    onUpdateGrupoUsuario(filter: $filter) {
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
export const onDeleteGrupoUsuario = /* GraphQL */ `
  subscription OnDeleteGrupoUsuario(
    $filter: ModelSubscriptionGrupoUsuarioFilterInput
  ) {
    onDeleteGrupoUsuario(filter: $filter) {
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
export const onCreateDespesaUsuario = /* GraphQL */ `
  subscription OnCreateDespesaUsuario(
    $filter: ModelSubscriptionDespesaUsuarioFilterInput
  ) {
    onCreateDespesaUsuario(filter: $filter) {
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
export const onUpdateDespesaUsuario = /* GraphQL */ `
  subscription OnUpdateDespesaUsuario(
    $filter: ModelSubscriptionDespesaUsuarioFilterInput
  ) {
    onUpdateDespesaUsuario(filter: $filter) {
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
export const onDeleteDespesaUsuario = /* GraphQL */ `
  subscription OnDeleteDespesaUsuario(
    $filter: ModelSubscriptionDespesaUsuarioFilterInput
  ) {
    onDeleteDespesaUsuario(filter: $filter) {
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
export const onCreateGrupoDespesa = /* GraphQL */ `
  subscription OnCreateGrupoDespesa(
    $filter: ModelSubscriptionGrupoDespesaFilterInput
  ) {
    onCreateGrupoDespesa(filter: $filter) {
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
export const onUpdateGrupoDespesa = /* GraphQL */ `
  subscription OnUpdateGrupoDespesa(
    $filter: ModelSubscriptionGrupoDespesaFilterInput
  ) {
    onUpdateGrupoDespesa(filter: $filter) {
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
export const onDeleteGrupoDespesa = /* GraphQL */ `
  subscription OnDeleteGrupoDespesa(
    $filter: ModelSubscriptionGrupoDespesaFilterInput
  ) {
    onDeleteGrupoDespesa(filter: $filter) {
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
