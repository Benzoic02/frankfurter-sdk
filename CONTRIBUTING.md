# Contributing

The TypeScript SDK is generated from the project in `.sdk/`. Make changes to
its model, components, or templates, then regenerate; changes made directly
under `ts/src/` can be overwritten.

## Generate the SDK

From the repository root:

```bash
cd .sdk
npm install
npm run build       # after changing a component
npm run generate
```

The model and API definition live in `.sdk/model/` and `.sdk/def/`.
API-specific generated code and documentation are produced by components in
`.sdk/src/cmp/`; reusable TypeScript runtime files come from `.sdk/tm/ts/`.

## Build and test

From the repository root:

```bash
cd ts
npm install
npm run build
npm test
```

`npm test` builds the SDK and runs the generated test suite, including checks
that the README examples type-check or execute as documented.

## Runtime extensions

SDK operations pass through Point, Spec, Request, Response, and Result
stages. Features can observe or modify those stages through hooks and can be
provided with the `extend` constructor option. The built-in `test` feature
replaces the network transport with an in-memory mock.

For the full generator workflow, model syntax, and regeneration caveats, see
[AGENTS.md](AGENTS.md). For reusable template customization, see the
[sdkgen guide](https://github.com/voxgig/sdkgen/blob/main/docs/how-to/customize-and-propagate-templates.md).
