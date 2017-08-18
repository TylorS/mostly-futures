import { Future } from '../types'
import { create } from './create'

export function of<A>(value: A): Future<never, A> {
  return create<never, A>((_, resolve) => resolve(value))
}
