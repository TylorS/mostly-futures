import { Future, Reject, Resolve } from '../'

import { curry3 } from '167'

export const fork: Fork = curry3(
  <A, B>(reject: Reject<A>, resolve: Resolve<B>, { fork }: Future<A, B>): void =>
    fork(reject, resolve)
)

export interface Fork {
  <A, B>(reject: Reject<A>, resolve: Resolve<B>, future: Future<A, B>): void
  <A, B>(reject: Reject<A>, resolve: Resolve<B>): (future: Future<A, B>) => void
  <A, B>(reject: Reject<A>): (resolve: Resolve<B>, future: Future<A, B>) => void
  <A, B>(reject: Reject<A>): (resolve: Resolve<B>) => (future: Future<A, B>) => void
}
