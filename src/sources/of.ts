import { Future } from '../types'
import { create } from './create'

export function of<A>(value: A): Future<A> {
  return create<A>(resolve => resolve(value))
}
