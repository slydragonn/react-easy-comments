import { CommentLikes } from './comments'
interface CurrentUser {
  id: string
  likes: string[]
  dislikes: string[]
}

export interface LikeParams {
  commentId: string
  likes: number
  dislikes: number
  currentUser: CurrentUser
  updateCommentLikes: (commentLikes: CommentLikes) => void
}
