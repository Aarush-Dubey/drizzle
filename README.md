# Owned weather target

This independently versioned Next.js repository intentionally starts with the conversion defect `20°C → 20°F`. The only generated-code edit surface is `lib/temperature.ts`; `protected/` contains fixed target fixtures and provenance outside generated edit scope; independent browser regression definitions remain in the separate controller repository. The expected conversions are 20→68, 0→32, −40→−40 and 100→212.

Use Bun 1.4.2, pinned in `package.json` and `.bun-version`. Install with `bun install --frozen-lockfile --ignore-scripts` from this repository root. Run `bun run dev` for port 3001, or `bun run build` followed by `bun run start`. `bun run typecheck` checks TypeScript. The scripts use Bun's runtime explicitly. This app has its own package manifest, `bun.lock` and Git history; it has no dependency on a checkout of the controller application.

The controller checks out this repository at the exact engineer-approved base SHA, applies only `lib/temperature.ts`, verifies inside a restricted container, and creates the candidate PR here. Staging reads committed build files directly from this repository root. Configure the controller with this repository's GitHub owner/name; configure `WEATHER_TARGET_PATH` in local controller tests when this checkout is not the default sibling `../hackathon-weather`.

`/api/version` and the page expose identical public provenance. Local development uses `protected/provenance.json` and is visibly fixture mode. The trusted staged deployment sets `WEATHER_RUN_ID`, `WEATHER_CANDIDATE_ID`, `WEATHER_HEAD_SHA`, `WEATHER_TREE_DIGEST`, `WEATHER_TRUSTED_TEST_REVISION`, `WEATHER_BUILD_CONFIG_REVISION`, and `WEATHER_DEPLOYMENT_MODE=live` at build time. None of these values are credentials. Keep this target free of social, model, release and controller secrets.

The coding workflow creates the fix only after an approved budgeted model proposal passes isolated protected verification. A passing baseline-reproduction test does not mean the seeded app has been fixed.
