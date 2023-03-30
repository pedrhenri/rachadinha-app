/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
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
export const onUpdatePagamento = /* GraphQL */ `
  subscription OnUpdatePagamento(
    $filter: ModelSubscriptionPagamentoFilterInput
  ) {
    onUpdatePagamento(filter: $filter) {
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
export const onDeletePagamento = /* GraphQL */ `
  subscription OnDeletePagamento(
    $filter: ModelSubscriptionPagamentoFilterInput
  ) {
    onDeletePagamento(filter: $filter) {
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
export const onCreateCompra = /* GraphQL */ `
  subscription OnCreateCompra($filter: ModelSubscriptionCompraFilterInput) {
    onCreateCompra(filter: $filter) {
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
export const onUpdateCompra = /* GraphQL */ `
  subscription OnUpdateCompra($filter: ModelSubscriptionCompraFilterInput) {
    onUpdateCompra(filter: $filter) {
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
export const onDeleteCompra = /* GraphQL */ `
  subscription OnDeleteCompra($filter: ModelSubscriptionCompraFilterInput) {
    onDeleteCompra(filter: $filter) {
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
export const onCreateParticipante = /* GraphQL */ `
  subscription OnCreateParticipante(
    $filter: ModelSubscriptionParticipanteFilterInput
  ) {
    onCreateParticipante(filter: $filter) {
      id
      name
      email
      compraID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateParticipante = /* GraphQL */ `
  subscription OnUpdateParticipante(
    $filter: ModelSubscriptionParticipanteFilterInput
  ) {
    onUpdateParticipante(filter: $filter) {
      id
      name
      email
      compraID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteParticipante = /* GraphQL */ `
  subscription OnDeleteParticipante(
    $filter: ModelSubscriptionParticipanteFilterInput
  ) {
    onDeleteParticipante(filter: $filter) {
      id
      name
      email
      compraID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onCreateBlog(filter: $filter) {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onUpdateBlog(filter: $filter) {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog($filter: ModelSubscriptionBlogFilterInput) {
    onDeleteBlog(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
