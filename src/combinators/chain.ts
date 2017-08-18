import { Future, create, fork } from '../'
import { curry2, pipe } from '167'

export const chain: Chain = curry2(
  <A, B, C>(f: (value: B) => Future<A, C>, future: Future<A, B>): Future<A, C> =>
    create<A, C>((reject, resolve) => fork(reject, pipe(f, fork(reject, resolve)), future))
)

export interface Chain {
  <A, B, C>(f: (value: B) => Future<A, C>, future: Future<A, B>): Future<A, C>
  <A, B, C>(f: (value: B) => Future<A, C>): (future: Future<A, B>) => Future<A, C>
}
