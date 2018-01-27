// package: 
// file: posts/posts.proto

import * as posts_posts_pb from "../posts/posts_pb";
export class Posts {
  static serviceName = "Posts";
}
export namespace Posts {
  export class GetAllPosts {
    static readonly methodName = "GetAllPosts";
    static readonly service = Posts;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = posts_posts_pb.GetAllPostsRequest;
    static readonly responseType = posts_posts_pb.GetAllPostsResponse;
  }
  export class GetPost {
    static readonly methodName = "GetPost";
    static readonly service = Posts;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = posts_posts_pb.GetPostRequest;
    static readonly responseType = posts_posts_pb.GetPostResponse;
  }
  export class CreatePost {
    static readonly methodName = "CreatePost";
    static readonly service = Posts;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = posts_posts_pb.CreatePostRequest;
    static readonly responseType = posts_posts_pb.CreatePostResponse;
  }
  export class UpdatePost {
    static readonly methodName = "UpdatePost";
    static readonly service = Posts;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = posts_posts_pb.UpdatePostRequest;
    static readonly responseType = posts_posts_pb.UpdatePostResponse;
  }
  export class DeletePost {
    static readonly methodName = "DeletePost";
    static readonly service = Posts;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = posts_posts_pb.DeletePostRequest;
    static readonly responseType = posts_posts_pb.DeletePostResponse;
  }
}
