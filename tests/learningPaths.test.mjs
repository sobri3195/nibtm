import test from 'node:test'
import assert from 'node:assert/strict'

import { getLearningPathById, getSafeLearningPaths } from '../src/utils/learningPaths.js'

test('getSafeLearningPaths returns safe defaults for missing fields', () => {
  const [path] = getSafeLearningPaths([{ id: '', name: '', description: '', duration: '', materials: 'bad' }])

  assert.equal(path.id, 'path-1')
  assert.equal(path.name, 'Untitled Learning Path')
  assert.equal(path.description, 'Path description is not available yet.')
  assert.equal(path.duration, 'Self-paced')
  assert.deepEqual(path.materials, [])
  assert.equal(path.level, 'General')
  assert.equal(path.category, 'Learning')
})

test('getSafeLearningPaths returns empty array for non-array inputs', () => {
  assert.deepEqual(getSafeLearningPaths(null), [])
  assert.deepEqual(getSafeLearningPaths(undefined), [])
})

test('getLearningPathById returns null for unknown ids', () => {
  const paths = getSafeLearningPaths([{ id: 'a', name: 'Alpha' }])
  assert.equal(getLearningPathById(paths, 'unknown'), null)
})

test('getLearningPathById returns path for matching id', () => {
  const paths = getSafeLearningPaths([{ id: 'student-path', name: 'Student Path' }])
  const path = getLearningPathById(paths, 'student-path')

  assert.ok(path)
  assert.equal(path.name, 'Student Path')
})
