import { UserLikes } from '.'
import { Comment } from './comments'

export interface EasyComments {
  comments: Array<Comment>
  userLikes: UserLikes
  handleSubmit: (comment: string) => void
  handleUpdate: (comment: Comment, currentUser: UserLikes) => void
  handleDelete: (commentId: string) => void
}

export interface CommentSubmit {
  userId: string
  username: string
  comment: string
  avatarUrl?: string
  profileLink?: string
}

export interface Listeners {
  onSubmit: (comment: CommentSubmit) => void
  onUpdate: (comment: Comment, currentUser: UserLikes) => void
  onDelete: (commentId: string) => void
}
