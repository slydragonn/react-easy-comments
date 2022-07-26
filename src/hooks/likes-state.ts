import { useEffect, useReducer } from 'react'
import { LikeParams } from '../types'

enum ActionKind {
  Like = 'like',
  Liked = 'liked',
  Dislike = 'dislike',
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
    case ActionKind.Like:
      return {
        ...state,
        liked: false
      }
    case ActionKind.Liked:
      return {
        ...state,
        liked: true
      }
    case ActionKind.Dislike:
      return {
        ...state,
        disliked: false
      }
    case ActionKind.Disliked:
      return {
        ...state,
        disliked: true
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
  updateCommentLikes,
  options
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
          options === 'default'
          ? (
            currentUser.dislikes.includes(commentId) && state.disliked
            ? currentUser.dislikes
            : state.disliked
            ? [...currentUser.dislikes, commentId]
            : currentUser.dislikes.filter(id => id !== commentId)
          ) : []
      }
    }

    updateCommentLikes(commentInfo)
  }, [state.likesCount, state.dislikesCount])

  const handleLikesAndDislikes = (context: 'like' | 'dislike') => {
    if (context === 'like') {
      if (state.disliked) {
        dispatch({ type: ActionKind.Dislike })
        dispatch({ type: ActionKind.DislikesDecrement })
      }
      if (state.liked) {
        dispatch({ type: ActionKind.Like })
        return dispatch({ type: ActionKind.LikesDecrement })
      }
      dispatch({ type: ActionKind.Liked })
      return dispatch({ type: ActionKind.LikesIncrement })
    }

    if (context === 'dislike') {
      if (state.liked) {
        dispatch({ type: ActionKind.Like })
        dispatch({ type: ActionKind.LikesDecrement })
      }
      if (state.disliked) {
        dispatch({ type: ActionKind.Dislike })
        return dispatch({ type: ActionKind.DislikesDecrement })
      }
      dispatch({ type: ActionKind.Disliked })
      return dispatch({ type: ActionKind.DislikesIncrement })
    }
  }

  const handleLikes = (context: 'like' | 'dislike') => {
    if(options === 'only-likes') {
      if (state.liked) {
        dispatch({ type: ActionKind.Like })
        return dispatch({ type: ActionKind.LikesDecrement })
      }
      dispatch({ type: ActionKind.Liked })
      return dispatch({ type: ActionKind.LikesIncrement })
    }

    if(options === 'default') {
      return handleLikesAndDislikes(context)
    }

    throw new Error('The options prop is wrong: only accept default, only-likes or no-likes')
  }

  return {
    state,
    handleLikes
  }
}

export default useLikes
