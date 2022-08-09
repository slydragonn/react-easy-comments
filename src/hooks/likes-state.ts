import { useEffect, useReducer } from 'react'
import { LikeParams } from '../types'

enum ActionKind {
  Liked = 'liked',
  Disliked = 'disliked',
  LikesIncrement = 'likes/increment',
  LikesDecrement = 'likes/decrement',
  DislikesIncrement = 'dislikes/increment',
  DislikesDecrement = 'dislikes/decrement'
}

interface Action {
  type: ActionKind
}

interface LikesState {
  liked: boolean
  disliked: boolean
  likesCount: number
  dislikesCount: number
}

function reducer(state: LikesState, action: Action): LikesState {
  switch (action.type) {
    case ActionKind.Liked:
      return {
        ...state,
        liked: !state.liked
      }
    case ActionKind.Disliked:
      return {
        ...state,
        disliked: !state.disliked
      }
    case ActionKind.LikesIncrement:
      return {
        ...state,
        likesCount: state.likesCount + 1
      }
    case ActionKind.LikesDecrement:
      return {
        ...state,
        likesCount: state.likesCount - 1
      }
    case ActionKind.DislikesIncrement:
      return {
        ...state,
        dislikesCount: state.dislikesCount + 1
      }
    case ActionKind.DislikesDecrement:
      return {
        ...state,
        dislikesCount: state.dislikesCount - 1
      }
    default:
      throw new Error('State Error in useLikes')
  }
}

const useLikes = ({
  commentId,
  likes,
  dislikes,
  currentUser,
  updateCommentLikes
}: LikeParams) => {
  const initialState: LikesState = {
    liked: false,
    disliked: false,
    likesCount: likes,
    dislikesCount: dislikes
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const userLiked = currentUser.likes.includes(commentId)
    const userDisliked = currentUser.dislikes.includes(commentId)

    if (userDisliked) {
      return dispatch({ type: ActionKind.Disliked })
    } else if (userLiked) {
      return dispatch({ type: ActionKind.Liked })
    }
  }, [])

  useEffect(() => {
    const commentInfo = {
      likes: state.likesCount,
      dislikes: state.dislikesCount,
      currentUser: {
        id: currentUser.id,
        likes:
          currentUser.likes.includes(commentId) && state.liked
            ? currentUser.likes
            : state.liked
            ? [...currentUser.likes, commentId]
            : currentUser.likes.filter(id => id !== commentId),
        dislikes:
          currentUser.dislikes.includes(commentId) && state.disliked
            ? currentUser.dislikes
            : state.disliked
            ? [...currentUser.dislikes, commentId]
            : currentUser.dislikes.filter(id => id !== commentId)
      }
    }
    updateCommentLikes(commentInfo)
  }, [state.likesCount, state.dislikesCount])

  const handleLikes = (context: 'like' | 'dislike') => {
    if (context === 'like') {
      if (state.disliked) {
        dispatch({ type: ActionKind.Disliked })
        dispatch({ type: ActionKind.DislikesDecrement })
      }
      if (state.liked) {
        dispatch({ type: ActionKind.Liked })
        return dispatch({ type: ActionKind.LikesDecrement })
      }
      dispatch({ type: ActionKind.Liked })
      return dispatch({ type: ActionKind.LikesIncrement })
    }

    if (context === 'dislike') {
      if (state.liked) {
        dispatch({ type: ActionKind.Liked })
        dispatch({ type: ActionKind.LikesDecrement })
      }
      if (state.disliked) {
        dispatch({ type: ActionKind.Disliked })
        return dispatch({ type: ActionKind.DislikesDecrement })
      }
      dispatch({ type: ActionKind.Disliked })
      return dispatch({ type: ActionKind.DislikesIncrement })
    }
  }

  return {
    state,
    handleLikes
  }
}

export default useLikes
