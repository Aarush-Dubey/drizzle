import baseline from "./provenance.json";

// Only trusted build orchestration sets these public values. This module is outside patch scope.
// Keeping identity in build configuration avoids a self-referential Git tree hash in source files.
export const provenance = {
  schemaVersion: 1,
  runId: process.env.WEATHER_RUN_ID ?? baseline.runId,
  candidateId: process.env.WEATHER_CANDIDATE_ID ?? baseline.candidateId,
  headSha: process.env.WEATHER_HEAD_SHA ?? baseline.headSha,
  treeDigest: process.env.WEATHER_TREE_DIGEST ?? baseline.treeDigest,
  trustedTestRevision: process.env.WEATHER_TRUSTED_TEST_REVISION ?? baseline.trustedTestRevision,
  buildConfigRevision: process.env.WEATHER_BUILD_CONFIG_REVISION ?? baseline.buildConfigRevision,
  mode: process.env.WEATHER_DEPLOYMENT_MODE === "live" ? "live" : baseline.mode,
};
