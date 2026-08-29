/**
 * Make some property opitional on type
 *
 * @example
 * ```typescript
 * type Post {
 * id: string;
 * name: string;
 * email: string;
 * }
 *
 * Opitional<Post, 'id' | 'email'>
 * ```
 */

export type Opitional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>
