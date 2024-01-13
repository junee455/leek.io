export const BASE_URL = `${process.env.BASE_URL}/api`

export function testFetch() {
  return fetch(BASE_URL)
}
