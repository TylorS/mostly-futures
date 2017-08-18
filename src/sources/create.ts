import { Future, Reject, Resolve } from '../types'

export function create<A, B>(f: (reject: Reject<A>, resolve: Resolve<B>) => any): Future<A, B> {
  const fork = (reject: Reject<A>, resolve: Resolve<B>) => f(reject, resolve)

  return { fork }
}
