/**
 * cache json on local storage
 * @param fn method to be cached
 * @param options cache options
 * @returns
 */
export async function cache<T>(fn: () => Promise<T>, options: CacheTypes.Options<T>): Promise<T> {
  const maxAge = Date.now() + (options.maxAge ?? 60000)
  const itemInCache = getCache<T>(options.key)

  let response: T

  if (!itemInCache) {
    response = await fn()

    if (options.filter && !options.filter(response)) return response

    saveCache(options.key, {
      data: response,
      maxAge
    })
  } else {
    if (!itemInCache) {
      response = await fn()

      saveCache(options.key, {
        data: response,
        maxAge
      })
    } else {
      response = itemInCache
    }
  }

  return response
}

function saveCache<T>(key: string, cache: CacheTypes.Cache<T>) {
  const keys = getKeys(key)

  localStorage.setItem(keys.expr, JSON.stringify(cache.maxAge))
  localStorage.setItem(keys.data, JSON.stringify(cache.data))
}

function getCache<T>(key: string): null | T {
  const keys = getKeys(key)

  const itemExpr = localStorage.getItem(keys.expr)

  if (!itemExpr) return null

  const expr = Number(JSON.parse(itemExpr))

  if (Date.now() > expr) {
    return null
  }

  const data = localStorage.getItem(keys.data)

  if (!data) return null

  return JSON.parse(data) as T
}

export function minutesInMs(minutes: number) {
  return 1_000 * 60 * minutes
}

export function secondsInMs(seconds: number) {
  return 1_000 * seconds
}

function getKeys<T extends string>(key: T): CacheTypes.Keys<T> {
  return { data: `${key}__DATA`, expr: `${key}__EXPR` }
}

namespace CacheTypes {
  export type Keys<T extends string> = { data: `${T}__DATA`; expr: `${T}__EXPR` }

  export type Options<T> = {
    /**
     * max age in milliseconds (default is 1 minute "60 * 1000")
     */
    maxAge?: number
    /**
     * cache key
     */
    key: string

    /**
     * returns true if you want to cache, return false if not
     * @param response request response
     * @returns
     */
    filter?: (response: T) => boolean
  }

  export type Cache<T> = {
    maxAge: number
    data: T
  }
}
