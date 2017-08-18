export interface Future<A, B> {
  readonly fork: (reject: Reject<A>, resolve: Resolve<B>) => void
}

export type Resolve<A> = (value: A) => any
export type Reject<A> = (value: A) => any
