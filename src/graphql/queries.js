/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPagamento = /* GraphQL */ `
  query GetPagamento($id: ID!) {
    getPagamento(id: $id) {
      id
      valorPago
      participante {
        id
        name
        email
        compraID
        createdAt
        updatedAt
      }
      compraID
      createdAt
      updatedAt
      pagamentoParticipanteId
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
        pagamentoParticipanteId
      }
      nextToken
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
        pagamentoParticipanteId
      }
      nextToken
    }
  }
`;
export const getCompra = /* GraphQL */ `
  query GetCompra($id: ID!) {
    getCompra(id: $id) {
      id
      valorTotal
      participantes {
        nextToken
      }
      pagamentos {
        nextToken
      }
      createdAt
      updatedAt
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
      }
      nextToken
    }
  }
`;
export const getParticipante = /* GraphQL */ `
  query GetParticipante($id: ID!) {
    getParticipante(id: $id) {
      id
      name
      email
      compraID
      createdAt
      updatedAt
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
        name
        email
        compraID
        createdAt
        updatedAt
      }
      nextToken
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
        name
        email
        compraID
        createdAt
        updatedAt
      }
      nextToken
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
      }
      createdAt
      updatedAt
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
      }
      nextToken
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
      }
      comments {
        nextToken
      }
      createdAt
      updatedAt
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
        blogPostsId
      }
      nextToken
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
        blogPostsId
      }
      content
      createdAt
      updatedAt
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
        postCommentsId
      }
      nextToken
    }
  }
`;
