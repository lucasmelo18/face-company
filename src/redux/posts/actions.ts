import { UserPostsList } from 'app-models'

import { PostsTypes } from './types'

export const getUserPosts = (id: string | string[]) => ({
  type: PostsTypes.GET_USER_POSTS,
  id,
})

export const getUserPostsSucceeded = (data: UserPostsList) => ({
  type: PostsTypes.GET_USER_POSTS_SUCCEEDED,
  data,
})

export const getUserPostsFailed = (data: string) => ({
  type: PostsTypes.GET_USER_POSTS_FAILED,
  error: data,
})

export const getPostDetail = (id: string | string[]) => ({
  type: PostsTypes.GET_POST_DETAIL,
  id,
})

export const getPostDetailSucceeded = (data: UserPostsList) => ({
  type: PostsTypes.GET_POST_DETAIL_SUCCEEDED,
  data,
})

export const getPostDetailFailed = (data: string) => ({
  type: PostsTypes.GET_POST_DETAIL_FAILED,
  error: data,
})

export const deletePost = (id: number | string | string[]) => ({
  type: PostsTypes.DELETE_POST,
  id,
})

export const deletePostSucceeded = (data: UserPostsList) => ({
  type: PostsTypes.DELETE_POST_SUCCEEDED,
  data,
})

export const deletePostFailed = (data: string) => ({
  type: PostsTypes.DELETE_POST_FAILED,
  error: data,
})
