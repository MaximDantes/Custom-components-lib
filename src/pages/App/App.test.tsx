/**
 * @jest-environment jsdom
 **/
import { describe, test } from '@jest/globals'
import { render } from '@testing-library/react'
import App from './App'
import React from 'react'

describe('app', () => {
    test('app', () => {
        render(<App />)
    })
})
