/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
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
export const updatePagamento = /* GraphQL */ `
  mutation UpdatePagamento(
    $input: UpdatePagamentoInput!
    $condition: ModelPagamentoConditionInput
  ) {
    updatePagamento(input: $input, condition: $condition) {
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
export const deletePagamento = /* GraphQL */ `
  mutation DeletePagamento(
    $input: DeletePagamentoInput!
    $condition: ModelPagamentoConditionInput
  ) {
    deletePagamento(input: $input, condition: $condition) {
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
export const createCompra = /* GraphQL */ `
  mutation CreateCompra(
    $input: CreateCompraInput!
    $condition: ModelCompraConditionInput
  ) {
    createCompra(input: $input, condition: $condition) {
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
export const updateCompra = /* GraphQL */ `
  mutation UpdateCompra(
    $input: UpdateCompraInput!
    $condition: ModelCompraConditionInput
  ) {
    updateCompra(input: $input, condition: $condition) {
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
export const deleteCompra = /* GraphQL */ `
  mutation DeleteCompra(
    $input: DeleteCompraInput!
    $condition: ModelCompraConditionInput
  ) {
    deleteCompra(input: $input, condition: $condition) {
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
export const createParticipante = /* GraphQL */ `
  mutation CreateParticipante(
    $input: CreateParticipanteInput!
    $condition: ModelParticipanteConditionInput
  ) {
    createParticipante(input: $input, condition: $condition) {
      id
      name
      email
      compraID
      createdAt
      updatedAt
    }
  }
`;
export const updateParticipante = /* GraphQL */ `
  mutation UpdateParticipante(
    $input: UpdateParticipanteInput!
    $condition: ModelParticipanteConditionInput
  ) {
    updateParticipante(input: $input, condition: $condition) {
      id
      name
      email
      compraID
      createdAt
      updatedAt
    }
  }
`;
export const deleteParticipante = /* GraphQL */ `
  mutation DeleteParticipante(
    $input: DeleteParticipanteInput!
    $condition: ModelParticipanteConditionInput
  ) {
    deleteParticipante(input: $input, condition: $condition) {
      id
      name
      email
      compraID
      createdAt
      updatedAt
    }
  }
`;
export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
