export interface Future<A> {
  readonly fork: () => Promise<A>
}
