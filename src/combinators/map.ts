import { Future, chain, of } from '../'
import { curry2, pipe } from '167'

export const map: Map = curry2(<A, B, C>(f: (value: B) => C, future: Future<A, B>): Future<A, C> =>
  chain(pipe(f, of), future)
)

export interface Map {
  <A, B, C>(f: (value: B) => C, future: Future<A, B>): Future<A, C>
  <A, B, C>(f: (value: B) => C): (future: Future<A, B>) => Future<A, C>
  <B, C>(f: (value: B) => C): <A>(future: Future<A, B>) => Future<A, C>
}
