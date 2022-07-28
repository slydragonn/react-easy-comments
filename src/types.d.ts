export interface CurrentUser {
  id: string
  name: string
  avartarUrl?: string
  linkProfile?: string
}

export type InitialComments = Array<any>

export interface Listeners {
  onSubmit: (comment: Comment) => void
  onUpdate: (comment: Comment) => void
}

export interface Params {
  currentUser: CurrentUser
  initialComments: InitialComments
  listeners: Listeners
}

export interface Comment {
  commentId: string
  userId: string
  username: string
  comment: string
  creationDate?: string | Date
  likes?: number
  dislikes?: number
  avatarUrl?: string
  profileLink?: string
}