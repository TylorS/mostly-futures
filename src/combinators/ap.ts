import { Future, create } from '../'

export function ap<A, B>(fn: Future<(value: A) => B>, value: Future<A>): Future<B> {
  return create((resolve, reject) =>
    value.fork().then(x => fn.fork().then(f => resolve(f(x)))).catch(reject)
  )
}
