import { Comment } from './comments'

export interface EasyComments {
  comments: Array<Comment>
  handleSubmit: (comment: string) => void
  handleUpdate: (comment: Comment) => void
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
  onUpdate: (comment: Comment) => void
}
