import { UserLikes } from '.'
import { Theme } from './theme'

export interface EasyComment {
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
  currentUser: UserLikes
}

export type InitialComments = Array<any>

type Filter = 'date' | 'likes'
export interface Options {
  placeholder?: string
  theme?: Theme
  editable?: boolean
  erasable?: boolean
  likes?: boolean[]
  maxLength?: number
  profileImage?: boolean
  totalComments?: boolean
  filter?: Array<boolean | Filter>
  emojis?: boolean
}
