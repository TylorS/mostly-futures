import { Future } from '../types'

export function create<A>(run: Run<A>): Future<A> {
  return { fork: () => new Promise<A>(run) }
}

export type Run<A> = (resolve: (value: A) => any, reject: (value: any) => any) => void
