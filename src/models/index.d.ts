import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}

type EagerParticipante = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Participante, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nome: string;
  readonly email: string;
  readonly compraID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyParticipante = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Participante, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nome: string;
  readonly email: string;
  readonly compraID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Participante = LazyLoading extends LazyLoadingDisabled ? EagerParticipante : LazyParticipante

export declare const Participante: (new (init: ModelInit<Participante>) => Participante) & {
  copyOf(source: Participante, mutator: (draft: MutableModel<Participante>) => MutableModel<Participante> | void): Participante;
}

type EagerCompra = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Compra, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly valorTotal: number;
  readonly pagamentos?: Pagamento[] | null;
  readonly participantes?: Participante[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCompra = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Compra, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly valorTotal: number;
  readonly pagamentos: AsyncCollection<Pagamento>;
  readonly participantes: AsyncCollection<Participante>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Compra = LazyLoading extends LazyLoadingDisabled ? EagerCompra : LazyCompra

export declare const Compra: (new (init: ModelInit<Compra>) => Compra) & {
  copyOf(source: Compra, mutator: (draft: MutableModel<Compra>) => MutableModel<Compra> | void): Compra;
}

type EagerPagamento = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pagamento, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly valorPago?: number | null;
  readonly compraID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPagamento = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pagamento, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly valorPago?: number | null;
  readonly compraID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Pagamento = LazyLoading extends LazyLoadingDisabled ? EagerPagamento : LazyPagamento

export declare const Pagamento: (new (init: ModelInit<Pagamento>) => Pagamento) & {
  copyOf(source: Pagamento, mutator: (draft: MutableModel<Pagamento>) => MutableModel<Pagamento> | void): Pagamento;
}

type EagerBlog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Blog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly posts?: (Post | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBlog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Blog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly posts: AsyncCollection<Post>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Blog = LazyLoading extends LazyLoadingDisabled ? EagerBlog : LazyBlog

export declare const Blog: (new (init: ModelInit<Blog>) => Blog) & {
  copyOf(source: Blog, mutator: (draft: MutableModel<Blog>) => MutableModel<Blog> | void): Blog;
}

type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly blog?: Blog | null;
  readonly comments?: (Comment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly blogPostsId?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly blog: AsyncItem<Blog | undefined>;
  readonly comments: AsyncCollection<Comment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly blogPostsId?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly post?: Post | null;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postCommentsId?: string | null;
}

type LazyComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly post: AsyncItem<Post | undefined>;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postCommentsId?: string | null;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment>) => Comment) & {
  copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}