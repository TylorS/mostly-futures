import { Future, create } from '../'

export function chain<A, B>(f: (value: A) => Future<B>, future: Future<A>): Future<B> {
  return create<B>((resolve, reject) =>
    future.fork().then(value => f(value).fork().then(resolve)).catch(reject)
  )
}
