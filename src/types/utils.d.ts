type NullablePartial<T> = {
  [P in keyof T]?: T[P] | null
}

type Optional<T extends Record<string, any>, K extends keyof T = keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>
