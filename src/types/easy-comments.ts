import { UserLikes } from '.'
import { EasyComment } from './comments'

export interface EasyComments {
  comments: Array<EasyComment>
  userLikes: UserLikes
  handleSubmit: (comment: string) => void
  handleUpdate: (comment: EasyComment, currentUser: UserLikes) => void
  handleDelete: (commentId: string) => void
  toggleSort: (kind: 'date' | 'likes') => void
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
  onUpdate: (comment: EasyComment, currentUser: UserLikes) => void
  onDelete: (commentId: string) => void
}
