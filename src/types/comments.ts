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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type InitialComments = Array<any>

export type Filter = 'date' | 'likes'
export interface Options {
  placeholder?: string
  theme?: Theme
  editable?: boolean
  erasable?: boolean
  likes?: 'default' | 'only-likes' | 'no-likes'
  maxLength?: number
  creationDate?: boolean
  profileImage?: boolean
  totalComments?: boolean
  filter?: [boolean, Filter]
}
export interface DefaultOptions {
  placeholder: string
  theme: Theme
  editable: boolean
  erasable: boolean
  likes: 'default' | 'only-likes' | 'no-likes'
  maxLength: number
  creationDate: boolean
  profileImage: boolean
  totalComments: boolean
  filter: [boolean, Filter]
}
