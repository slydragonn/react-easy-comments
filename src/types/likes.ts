export interface Likes {
  total: number
  users: string[]
}

export interface Params {
  likes: Likes
  dislikes: Likes
  currentUserId: string
}
