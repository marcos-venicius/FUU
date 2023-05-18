import React from 'react'

type Props = {
  /**
   * default is 1000ms "1s"
   */
  intervalInMilliseconds?: number
}

export function useDebounce({ intervalInMilliseconds }: Props = {}) {
  const intervalTimeout = React.useRef<NodeJS.Timeout>()

  function debounce(fn: () => any) {
    if (intervalTimeout.current) {
      clearTimeout(intervalTimeout.current)
    }

    intervalTimeout.current = setTimeout(fn, intervalInMilliseconds || 1000)
  }

  return debounce
}
