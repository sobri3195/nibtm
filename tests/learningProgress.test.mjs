import test from 'node:test'
import assert from 'node:assert/strict'

import { buildLearningPathId, getLearningPathState, getStartedPathCount, startLearningPath } from '../src/utils/learningProgress.js'

test('buildLearningPathId creates stable ids from tab and title', () => {
  assert.equal(buildLearningPathId('Beginner', 'Biomedical Foundations'), 'beginner-biomedical-foundations')
})

test('getLearningPathState returns a safe not-started default', () => {
  assert.deepEqual(getLearningPathState({}, 'missing'), {
    started: false,
    completedModules: 0,
    percent: 0,
    status: 'not-started',
  })
})

test('startLearningPath marks a path as started without dropping existing progress', () => {
  const progress = startLearningPath({ pathId: 'beginner-foundation', modules: 8, now: '2026-05-06T00:00:00.000Z' }, {})

  assert.equal(progress['beginner-foundation'].started, true)
  assert.equal(progress['beginner-foundation'].completedModules, 1)
  assert.equal(progress['beginner-foundation'].percent, 13)
  assert.equal(progress['beginner-foundation'].startedAt, '2026-05-06T00:00:00.000Z')
})

test('startLearningPath preserves higher existing progress', () => {
  const progress = startLearningPath(
    { pathId: 'advanced-ai', modules: 10, now: '2026-05-06T01:00:00.000Z' },
    { 'advanced-ai': { started: true, completedModules: 6, percent: 60, startedAt: '2026-05-01T00:00:00.000Z' } },
  )

  assert.equal(progress['advanced-ai'].completedModules, 6)
  assert.equal(progress['advanced-ai'].percent, 60)
  assert.equal(progress['advanced-ai'].startedAt, '2026-05-01T00:00:00.000Z')
  assert.equal(progress['advanced-ai'].updatedAt, '2026-05-06T01:00:00.000Z')
})

test('getStartedPathCount counts only started entries', () => {
  assert.equal(getStartedPathCount({ a: { started: true }, b: { started: false }, c: null }), 1)
})
