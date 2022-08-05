export interface Comment {
  commentId: string
  userId: string
  username: string
  comment: string
  creationDate?: string
  likes?: number
  dislikes?: number
  avatarUrl?: string
  profileLink?: string
}

export interface CommentLikes {
  likes: number
  dislikes: number
}

export type InitialComments = Array<any>
