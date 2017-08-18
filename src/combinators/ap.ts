import { Future, create, fork } from '../'
import { curry2, pipe } from '167'

export const ap: Ap = curry2(<A, B, C>(fn: Future<A, (value: B) => C>, value: Future<A, B>): Future<
  A,
  C
> =>
  create<A, C>((reject, resolve) => fork(reject, f => fork(reject, pipe(f, resolve), value), fn))
)

export interface Ap {
  <A, B, C>(fn: Future<A, (value: B) => C>, value: Future<A, B>): Future<A, C>
  <A, B, C>(fn: Future<A, (value: B) => C>): (value: Future<A, B>) => Future<A, C>
}
