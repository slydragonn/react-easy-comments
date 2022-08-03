import { useEffect, useState } from "react"

interface Params {
  theme: 'dark' | 'light'
  defaultValue: string
  variant: string
}

const useToggleTheme = ({theme, defaultValue, variant}: Params) => {
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    if(theme == 'dark') {
      setValue(() => variant)
    }
    if(theme == 'light') {
      setValue(() => defaultValue)
    }
  }, [theme])

  return value
}

export default useToggleTheme