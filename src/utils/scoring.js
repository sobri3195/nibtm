export function calculatePortfolioScore(state) {
  const activePathScore = state.activePaths.length > 0 ? 15 : 0;
  const savedTopicScore = Math.min(state.savedTopics.length * 5, 20);
  const savedDatasetScore = Math.min(state.savedDatasets.length * 10, 20);
  const researchIdeaScore = state.researchIdeas.length > 0 ? 20 : 0;
  const mentorBookingScore = state.mentorBookings.length > 0 ? 15 : 0;
  const completedModuleScore = Math.min(state.completedModules.length * 5, 30);
  return Math.min(100, activePathScore + savedTopicScore + savedDatasetScore + researchIdeaScore + mentorBookingScore + completedModuleScore);
}
