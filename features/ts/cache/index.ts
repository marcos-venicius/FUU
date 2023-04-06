export class DevOneCacheHandler<T extends string> {
  private readonly _keys: DevOneCacheHandler.Keys<T>

  constructor(key: T) {
    this._keys = { data: `${key}__DATA`, expr: `${key}__EXPR` }
  }

  private save<T>(cache: DevOneCacheHandler.Cache<T>) {
    localStorage.setItem(this._keys.expr, JSON.stringify(cache.maxAge))
    localStorage.setItem(this._keys.data, JSON.stringify(cache.data))
  }

  private get<T>(): null | T {
    const itemExpr = localStorage.getItem(this._keys.expr)

    if (!itemExpr) return null

    const expr = Number(JSON.parse(itemExpr))

    if (Date.now() > expr) {
      return null
    }

    const data = localStorage.getItem(this._keys.data)

    if (!data) return null

    return JSON.parse(data) as T
  }

  public clear() {
    if (localStorage.getItem(this._keys.expr)) localStorage.removeItem(this._keys.expr)
    if (localStorage.getItem(this._keys.data)) localStorage.removeItem(this._keys.data)
  }

  public async cache<TResponse>(
    fn: DevOneCacheHandler.FunctionCache<TResponse>,
    options?: DevOneCacheHandler.Options<TResponse>
  ): Promise<TResponse> {
    let response: TResponse

    if (options?.forceReload) {
      response = await (typeof fn === 'function' ? fn() : fn)

      if (options?.filter && !options.filter(response)) return response

      this.save({
        data: response,
        maxAge: Date.now() + (options?.maxAge ?? 60000)
      })

      return response
    }

    const itemInCache = this.get<TResponse>()

    if (!itemInCache) {
      response = await (typeof fn === 'function' ? fn() : fn)

      if (options?.filter && !options.filter(response)) return response

      this.save({
        data: response,
        maxAge: Date.now() + (options?.maxAge ?? 60000)
      })
    } else {
      return itemInCache
    }

    return response
  }

  public static minutesToMs(minutes: number) {
    return 1_000 * 60 * minutes
  }

  public static secondsToMs(seconds: number) {
    return 1_000 * seconds
  }
}
