declare namespace DevOneCacheHandler {
  export type Keys<T extends string> = { data: `${T}__DATA`; expr: `${T}__EXPR` }

  export type Options<T> = {
    /**
     * max age in milliseconds (default is 1 minute "60 * 1000")
     */
    maxAge?: number

    /**
     * force cache reload
     */
    forceReload?: boolean

    /**
     * returns true if you want to cache, return false if not
     * @param response request response
     * @returns
     */
    filter?: FunctionCacheFilter<T>
  }

  export type Cache<T> = {
    maxAge: number
    data: T
  }

  export type FunctionCacheFilter<T> = (response: T) => boolean
  export type FunctionCache<T> = () => Promise<T>
}
