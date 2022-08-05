import { Likes } from './likes'

export interface Comment {
  commentId: string
  userId: string
  username: string
  comment: string
  creationDate?: string
  likes?: Likes
  dislikes?: Likes
  avatarUrl?: string
  profileLink?: string
}

export interface CommentLikes {
  likes: Likes
  dislikes: Likes
}

export type InitialComments = Array<any>
