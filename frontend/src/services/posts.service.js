import { grpc, Code } from 'grpc-web-client';
import { Posts } from '../proto/posts/posts_pb_service';
import { GetAllPostsRequest, GetPostRequest } from '../proto/posts/posts_pb';

export const PostsService = {
  getAllPosts,
  getPost
}


function getAllPosts() {
  const getAllPostsRequest = new GetAllPostsRequest();
  grpc.unary(Posts.GetAllPosts, {
    request: getAllPostsRequest,
    host: 'http://0.0.0.0:50051',
    onEnd: res => {
      const { status, message} = res;
      if (status == Code.OK && message) {
        console.log(message.toObject());
      }
    }
  });
}

function getPost() {
  const getPostRequest = new GetPostRequest();
  getPostRequest.setId(1);
  grpc.unary(Posts.GetPost, {
    request: getPostRequest,
    host: 'http://0.0.0.0:50051',
    onEnd: res => {
      const { status, message} = res;
      if (status == Code.OK && message) {
        console.log(message.toObject());
      }

    }
  })
}