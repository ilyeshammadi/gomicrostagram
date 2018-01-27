// package: 
// file: posts/posts.proto

import * as jspb from "google-protobuf";

export class Post extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getUserid(): number;
  setUserid(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Post.AsObject;
  static toObject(includeInstance: boolean, msg: Post): Post.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Post, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Post;
  static deserializeBinaryFromReader(message: Post, reader: jspb.BinaryReader): Post;
}

export namespace Post {
  export type AsObject = {
    id: number,
    userid: number,
    title: string,
    content: string,
  }
}

export class GetAllPostsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllPostsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllPostsRequest): GetAllPostsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllPostsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllPostsRequest;
  static deserializeBinaryFromReader(message: GetAllPostsRequest, reader: jspb.BinaryReader): GetAllPostsRequest;
}

export namespace GetAllPostsRequest {
  export type AsObject = {
  }
}

export class GetAllPostsResponse extends jspb.Message {
  clearPostsList(): void;
  getPostsList(): Array<Post>;
  setPostsList(value: Array<Post>): void;
  addPosts(value?: Post, index?: number): Post;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllPostsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllPostsResponse): GetAllPostsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllPostsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllPostsResponse;
  static deserializeBinaryFromReader(message: GetAllPostsResponse, reader: jspb.BinaryReader): GetAllPostsResponse;
}

export namespace GetAllPostsResponse {
  export type AsObject = {
    postsList: Array<Post.AsObject>,
  }
}

export class GetPostRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostRequest): GetPostRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostRequest;
  static deserializeBinaryFromReader(message: GetPostRequest, reader: jspb.BinaryReader): GetPostRequest;
}

export namespace GetPostRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetPostResponse extends jspb.Message {
  hasPost(): boolean;
  clearPost(): void;
  getPost(): Post | undefined;
  setPost(value?: Post): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostResponse): GetPostResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostResponse;
  static deserializeBinaryFromReader(message: GetPostResponse, reader: jspb.BinaryReader): GetPostResponse;
}

export namespace GetPostResponse {
  export type AsObject = {
    post?: Post.AsObject,
  }
}

export class CreatePostRequest extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePostRequest): CreatePostRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePostRequest;
  static deserializeBinaryFromReader(message: CreatePostRequest, reader: jspb.BinaryReader): CreatePostRequest;
}

export namespace CreatePostRequest {
  export type AsObject = {
    userid: number,
    title: string,
    content: string,
  }
}

export class CreatePostResponse extends jspb.Message {
  getOk(): boolean;
  setOk(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePostResponse): CreatePostResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePostResponse;
  static deserializeBinaryFromReader(message: CreatePostResponse, reader: jspb.BinaryReader): CreatePostResponse;
}

export namespace CreatePostResponse {
  export type AsObject = {
    ok: boolean,
  }
}

export class UpdatePostRequest extends jspb.Message {
  hasPost(): boolean;
  clearPost(): void;
  getPost(): Post | undefined;
  setPost(value?: Post): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePostRequest): UpdatePostRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePostRequest;
  static deserializeBinaryFromReader(message: UpdatePostRequest, reader: jspb.BinaryReader): UpdatePostRequest;
}

export namespace UpdatePostRequest {
  export type AsObject = {
    post?: Post.AsObject,
  }
}

export class UpdatePostResponse extends jspb.Message {
  hasPost(): boolean;
  clearPost(): void;
  getPost(): Post | undefined;
  setPost(value?: Post): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePostResponse): UpdatePostResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePostResponse;
  static deserializeBinaryFromReader(message: UpdatePostResponse, reader: jspb.BinaryReader): UpdatePostResponse;
}

export namespace UpdatePostResponse {
  export type AsObject = {
    post?: Post.AsObject,
  }
}

export class DeletePostRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePostRequest): DeletePostRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeletePostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePostRequest;
  static deserializeBinaryFromReader(message: DeletePostRequest, reader: jspb.BinaryReader): DeletePostRequest;
}

export namespace DeletePostRequest {
  export type AsObject = {
    id: number,
  }
}

export class DeletePostResponse extends jspb.Message {
  getOk(): boolean;
  setOk(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePostResponse): DeletePostResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeletePostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePostResponse;
  static deserializeBinaryFromReader(message: DeletePostResponse, reader: jspb.BinaryReader): DeletePostResponse;
}

export namespace DeletePostResponse {
  export type AsObject = {
    ok: boolean,
  }
}

