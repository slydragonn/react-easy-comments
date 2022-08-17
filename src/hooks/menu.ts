import { useEffect } from 'react'

interface MenuParams {
  func: () => void
  selectors: string[]
}

const useMenu = ({ func, selectors }: MenuParams) => {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const isTarget = selectors
        .map(selector => (event.target as HTMLElement).matches(selector))
        .includes(true)
      if (!isTarget) func()
    }

    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', (event: MouseEvent) => onClick(event))
    }
  }, [])
}

export default useMenu
