import { Future, create } from '../'

import { pipe } from '167'

export function map<A, B>(f: (value: A) => B, future: Future<A>) {
  const { fork } = future

  return create<B>((resolve, reject) => fork().then(pipe(f, resolve)).catch(reject))
}
