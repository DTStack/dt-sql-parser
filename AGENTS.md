# Agent Guidelines

## Repository

This is a TypeScript SQL parser built with ANTLR4/antlr4ng and antlr4-c3. It supports Flink, Generic, Hive, Impala, MySQL, PostgreSQL, Spark, and Trino SQL.

- `src/grammar/<dialect>`: hand-maintained ANTLR grammars
- `src/lib/<dialect>`: generated Lexer, Parser, Listener, and Visitor files
- `src/parser/<dialect>`: dialect-specific parser implementations
- `src/parser/common`: shared parser base classes and utilities
- `test/parser/<dialect>`: syntax, completion, splitting, and context-collection tests
- `benchmark`: performance benchmarks

## Working Rules

- Understand the relevant implementation, callers, and tests before editing
- Make the smallest complete change; avoid unrelated refactors and repository-wide formatting
- Analysis or review requests are read-only unless the user explicitly asks for changes
- Preserve existing uncommitted work and do not modify unrelated files
- Do not upgrade dependencies, change the lockfile, or adjust build tooling unless required
- Do not bypass type errors with `any`, `@ts-ignore`, or unnecessary type assertions
- Add concise Chinese comments only when a new method or complex conditional needs rationale; omit trailing punctuation
- Treat changes under `src/parser/common` as cross-dialect changes and inspect affected callers
- Do not trade correctness across dialects for completion or parsing performance

## Environment and Commands

- Use Node.js 18 or later, `pnpm`, and Java when generating ANTLR files
- Use `pnpm install --frozen-lockfile` for normal installs; use plain `pnpm install` only for intentional dependency changes

```bash
pnpm install --frozen-lockfile
pnpm antlr4 --lang <dialect>
pnpm test -- <test-file-or-pattern>
pnpm check-types
pnpm prettier-check
pnpm benchmark --lang <dialect>
```

## Grammar and Generated Code

- Never edit files under `src/lib` manually
- After changing `src/grammar/<dialect>`, run `pnpm antlr4 --lang <dialect>` and regenerate only that dialect
- The generator may log an error without a nonzero exit code. Require `Compile <dialect> succeeded!`, then inspect the generated files and diff
- Prefer official SQL documentation or official grammar implementations
- Keep the `KW_` prefix for keyword lexer rules
- Add or update the corresponding dialect tests for grammar behavior changes

## Verification

- Add a focused regression test for parser behavior changes
- Run directly related tests for parser or utility changes
- For shared parser or completion changes, add representative cross-dialect verification
- Run `pnpm check-types` for TypeScript changes and `pnpm prettier-check` for formatting
- Establish correctness before running performance benchmarks
- `pnpm benchmark` without `--lang` is interactive; use the command above for non-interactive cold-start benchmarks
- Do not run `pnpm benchmark:release` by default. It requires Node.js 21 or later, and its wrapper may reject the version without a nonzero exit code, so confirm that the benchmark process starts
- Report timeouts or OOM failures with the exact command and scope; reduced inputs or increased heap limits do not prove the original command passes

## Git and Delivery

- Unless explicitly requested, do not stage, commit, push, reset, restore, rebase, or create branches
- Never use destructive commands such as `git reset --hard`
- Use the repository's Conventional Commit types when asked to create a commit
- Before completion, inspect the final diff and report the commands actually run, their results, and any verification limits
