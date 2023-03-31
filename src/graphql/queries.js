/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getParticipante = /* GraphQL */ `
  query GetParticipante($id: ID!) {
    getParticipante(id: $id) {
      id
      nome
      email
      compraID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listParticipantes = /* GraphQL */ `
  query ListParticipantes(
    $filter: ModelParticipanteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParticipantes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nome
        email
        compraID
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
export const syncParticipantes = /* GraphQL */ `
  query SyncParticipantes(
    $filter: ModelParticipanteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncParticipantes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nome
        email
        compraID
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
export const participantesByCompraID = /* GraphQL */ `
  query ParticipantesByCompraID(
    $compraID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelParticipanteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    participantesByCompraID(
      compraID: $compraID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        nome
        email
        compraID
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
export const getCompra = /* GraphQL */ `
  query GetCompra($id: ID!) {
    getCompra(id: $id) {
      id
      valorTotal
      pagamentos {
        nextToken
        startedAt
      }
      participantes {
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
export const listCompras = /* GraphQL */ `
  query ListCompras(
    $filter: ModelCompraFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompras(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        valorTotal
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
export const syncCompras = /* GraphQL */ `
  query SyncCompras(
    $filter: ModelCompraFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCompras(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        valorTotal
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
      compraID
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
        compraID
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
        compraID
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
export const pagamentosByCompraID = /* GraphQL */ `
  query PagamentosByCompraID(
    $compraID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPagamentoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pagamentosByCompraID(
      compraID: $compraID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        valorPago
        compraID
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
export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      posts {
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
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
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
export const syncBlogs = /* GraphQL */ `
  query SyncBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBlogs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
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
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      blog {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      comments {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      blogPostsId
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        blogPostsId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        blogPostsId
      }
      nextToken
      startedAt
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      post {
        id
        title
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        blogPostsId
      }
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postCommentsId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postCommentsId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        content
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postCommentsId
      }
      nextToken
      startedAt
    }
  }
`;
