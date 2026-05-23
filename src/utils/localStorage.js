import { calculatePortfolioScore } from './scoring';

const KEY = 'nibtm7_local_state';
export const initialLocalState = {
  activePaths: [],
  completedModules: [],
  savedTopics: [],
  savedDatasets: [],
  researchIdeas: [],
  mentorBookings: [],
  savedThreads: [],
  preferredLanguage: 'en',
  theme: 'dark',
  portfolioScore: 0,
};

export function getLocalState() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return initialLocalState;
    const parsed = JSON.parse(raw);
    return { ...initialLocalState, ...parsed };
  } catch {
    return initialLocalState;
  }
}

export function saveLocalState(nextState) {
  const merged = { ...initialLocalState, ...nextState };
  merged.portfolioScore = calculatePortfolioScore(merged);
  localStorage.setItem(KEY, JSON.stringify(merged));
  return merged;
}

export function resetLocalState() {
  localStorage.setItem(KEY, JSON.stringify(initialLocalState));
  return initialLocalState;
}

export function exportLocalState() {
  return JSON.stringify(getLocalState(), null, 2);
}

export function importLocalState(jsonText) {
  const parsed = JSON.parse(jsonText);
  return saveLocalState(parsed);
}
