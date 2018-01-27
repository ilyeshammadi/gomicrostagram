import {
	grpc,
	Code
} from 'grpc-web-client';
import {
	Posts
} from '../proto/posts/posts_pb_service';
import {
	GetAllPostsRequest,
	GetPostRequest,
	CreatePostRequest,
	Post
} from '../proto/posts/posts_pb';
import {
	create
} from 'domain';

const POSTS_SERVER_ADDRESS = process.env.REACT_APP_POSTS_SERVER_ADDRESS;
const POSTS_SERVER_PORT = process.env.REACT_APP_POSTS_SERVER_PORT;
const POSTS_SERVER_HOST = `${POSTS_SERVER_ADDRESS}:${POSTS_SERVER_PORT}`;


export const PostsService = {
	getAllPosts,
	getPost,
	createPost
}

function getAllPosts(callback) {
	const getAllPostsRequest = new GetAllPostsRequest();
	grpc.unary(Posts.GetAllPosts, {
		request: getAllPostsRequest,
		host: POSTS_SERVER_HOST,
		onEnd: res => {
			callback(res);
		}
	});
}

function getPost(args, callback) {
	const getPostRequest = new GetPostRequest();
	getPostRequest.setId(args.postId);
	grpc.unary(Posts.GetPost, {
		request: getPostRequest,
		host: POSTS_SERVER_HOST,
		onEnd: res => {
			callback(res.message.toObject());
		}
	})
}

function createPost(args, callback) {
	const createPostRequest = new CreatePostRequest();
	createPostRequest.setUserid = args.userId;
	createPostRequest.setTitle = args.title;
	createPostRequest.setContent = args.content;
	grpc.unary(Posts.CreatePost, {
		request: createPostRequest,
		host: POSTS_SERVER_HOST,
		onEnd: res => {
			callback(res.message.toObject());
		}
	})
}
