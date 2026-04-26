import test from 'node:test'
import assert from 'node:assert/strict'
import { getNextStepLabel, getPathActionLabel, getPathProgress } from './learningPath.js'

test('getPathProgress returns default starter progress', () => {
  assert.equal(getPathProgress(false), 8)
})

test('getPathProgress returns in-progress percentage', () => {
  assert.equal(getPathProgress(true), 48)
})

test('getPathActionLabel maps to proper call to action', () => {
  assert.equal(getPathActionLabel(false), 'Start Path')
  assert.equal(getPathActionLabel(true), 'Continue Path')
})

test('getNextStepLabel maps to detail panel helper text', () => {
  assert.equal(getNextStepLabel(false), 'Start now and open recommended topics')
  assert.equal(getNextStepLabel(true), 'Continue with recommended topics')
})
