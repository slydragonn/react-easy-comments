import { useEffect, useState } from 'react'
import { EasyComment } from '../types'
import { getMostRecentTime } from '../utils'

interface SortArgs {
  sortBy?: 'likes' | 'date'
  comments: EasyComment[]
}

const useSort = ({ sortBy = 'date', comments }: SortArgs) => {
  const [sortedComments, setSort] = useState<EasyComment[]>(comments)
  const [sortedBy, setSortBy] = useState(sortBy)

  const toggleSort = (kind: 'date' | 'likes') => {
    return setSortBy(() => kind)
  }

  const sortCondition = (a: number, b: number) => {
    if (a < b) return 1
    if (a > b) return -1
    return 0
  }

  useEffect(() => {
    setSort(() =>
      [...comments].sort((a, b) => {
        if (sortedBy === 'date') {
          if (a.creationDate && b.creationDate) {
            const dateA = getMostRecentTime(a.creationDate)
            const dateB = getMostRecentTime(b.creationDate)
            return sortCondition(dateA, dateB)
          }
        }
        if (sortedBy === 'likes') {
          if (a.likes && b.likes) {
            const likesA = Number(a.likes)
            const likesB = Number(b.likes)
            return sortCondition(likesA, likesB)
          }
        }
        return 0
      })
    )
  }, [comments, sortedBy])

  return [toggleSort, sortedComments] as const
}

export default useSort
