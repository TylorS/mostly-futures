import { Future } from '../'
import { flip } from '167'

export const toPromise = <A>({ fork }: Future<any, A>) => new Promise<A>(flip(fork))
