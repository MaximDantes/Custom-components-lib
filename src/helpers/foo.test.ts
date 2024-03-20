import { describe, expect, test } from '@jest/globals'
import foo from './foo'

describe('foo', () => {
    test('foo', () => {
        expect(foo(5, 5)).toBe(10)
    })
})
