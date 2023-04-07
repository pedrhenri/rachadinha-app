/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUsuario = /* GraphQL */ `
  mutation CreateUsuario(
    $input: CreateUsuarioInput!
    $condition: ModelUsuarioConditionInput
  ) {
    createUsuario(input: $input, condition: $condition) {
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
export const updateUsuario = /* GraphQL */ `
  mutation UpdateUsuario(
    $input: UpdateUsuarioInput!
    $condition: ModelUsuarioConditionInput
  ) {
    updateUsuario(input: $input, condition: $condition) {
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
export const deleteUsuario = /* GraphQL */ `
  mutation DeleteUsuario(
    $input: DeleteUsuarioInput!
    $condition: ModelUsuarioConditionInput
  ) {
    deleteUsuario(input: $input, condition: $condition) {
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
export const createGrupo = /* GraphQL */ `
  mutation CreateGrupo(
    $input: CreateGrupoInput!
    $condition: ModelGrupoConditionInput
  ) {
    createGrupo(input: $input, condition: $condition) {
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
export const updateGrupo = /* GraphQL */ `
  mutation UpdateGrupo(
    $input: UpdateGrupoInput!
    $condition: ModelGrupoConditionInput
  ) {
    updateGrupo(input: $input, condition: $condition) {
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
export const deleteGrupo = /* GraphQL */ `
  mutation DeleteGrupo(
    $input: DeleteGrupoInput!
    $condition: ModelGrupoConditionInput
  ) {
    deleteGrupo(input: $input, condition: $condition) {
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
export const createDespesa = /* GraphQL */ `
  mutation CreateDespesa(
    $input: CreateDespesaInput!
    $condition: ModelDespesaConditionInput
  ) {
    createDespesa(input: $input, condition: $condition) {
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
export const updateDespesa = /* GraphQL */ `
  mutation UpdateDespesa(
    $input: UpdateDespesaInput!
    $condition: ModelDespesaConditionInput
  ) {
    updateDespesa(input: $input, condition: $condition) {
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
export const deleteDespesa = /* GraphQL */ `
  mutation DeleteDespesa(
    $input: DeleteDespesaInput!
    $condition: ModelDespesaConditionInput
  ) {
    deleteDespesa(input: $input, condition: $condition) {
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
export const createPagamento = /* GraphQL */ `
  mutation CreatePagamento(
    $input: CreatePagamentoInput!
    $condition: ModelPagamentoConditionInput
  ) {
    createPagamento(input: $input, condition: $condition) {
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
export const updatePagamento = /* GraphQL */ `
  mutation UpdatePagamento(
    $input: UpdatePagamentoInput!
    $condition: ModelPagamentoConditionInput
  ) {
    updatePagamento(input: $input, condition: $condition) {
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
export const deletePagamento = /* GraphQL */ `
  mutation DeletePagamento(
    $input: DeletePagamentoInput!
    $condition: ModelPagamentoConditionInput
  ) {
    deletePagamento(input: $input, condition: $condition) {
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
export const createGrupoUsuario = /* GraphQL */ `
  mutation CreateGrupoUsuario(
    $input: CreateGrupoUsuarioInput!
    $condition: ModelGrupoUsuarioConditionInput
  ) {
    createGrupoUsuario(input: $input, condition: $condition) {
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
export const updateGrupoUsuario = /* GraphQL */ `
  mutation UpdateGrupoUsuario(
    $input: UpdateGrupoUsuarioInput!
    $condition: ModelGrupoUsuarioConditionInput
  ) {
    updateGrupoUsuario(input: $input, condition: $condition) {
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
export const deleteGrupoUsuario = /* GraphQL */ `
  mutation DeleteGrupoUsuario(
    $input: DeleteGrupoUsuarioInput!
    $condition: ModelGrupoUsuarioConditionInput
  ) {
    deleteGrupoUsuario(input: $input, condition: $condition) {
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
export const createDespesaUsuario = /* GraphQL */ `
  mutation CreateDespesaUsuario(
    $input: CreateDespesaUsuarioInput!
    $condition: ModelDespesaUsuarioConditionInput
  ) {
    createDespesaUsuario(input: $input, condition: $condition) {
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
export const updateDespesaUsuario = /* GraphQL */ `
  mutation UpdateDespesaUsuario(
    $input: UpdateDespesaUsuarioInput!
    $condition: ModelDespesaUsuarioConditionInput
  ) {
    updateDespesaUsuario(input: $input, condition: $condition) {
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
export const deleteDespesaUsuario = /* GraphQL */ `
  mutation DeleteDespesaUsuario(
    $input: DeleteDespesaUsuarioInput!
    $condition: ModelDespesaUsuarioConditionInput
  ) {
    deleteDespesaUsuario(input: $input, condition: $condition) {
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
export const createGrupoDespesa = /* GraphQL */ `
  mutation CreateGrupoDespesa(
    $input: CreateGrupoDespesaInput!
    $condition: ModelGrupoDespesaConditionInput
  ) {
    createGrupoDespesa(input: $input, condition: $condition) {
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
export const updateGrupoDespesa = /* GraphQL */ `
  mutation UpdateGrupoDespesa(
    $input: UpdateGrupoDespesaInput!
    $condition: ModelGrupoDespesaConditionInput
  ) {
    updateGrupoDespesa(input: $input, condition: $condition) {
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
export const deleteGrupoDespesa = /* GraphQL */ `
  mutation DeleteGrupoDespesa(
    $input: DeleteGrupoDespesaInput!
    $condition: ModelGrupoDespesaConditionInput
  ) {
    deleteGrupoDespesa(input: $input, condition: $condition) {
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
