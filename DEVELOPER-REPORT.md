# Voxgig SDK Generator -- Building Experience

I spent some time reviewing the assignment to make sure I understood the project structure and Voxgig’s SDK-generation workflow. After outlining the key steps, I checked the Voxgig catalogue and picked the Frankfurter API since it met all the requirements and wasn't already in the catalogue. I then sourced and downloaded its OpenAPI specification. `api.frankfurter.dev/v2/openapi.json` 

I then set up the project in VS Code and installed the project dependencies. The hands-on SDK work took about 24 minutes. Separately, I spent about five minutes checking the API-key requirement. Frankfurter's public rates endpoint does not require a key, so I did not use credentials for the live test.

The generator produced a useful SDK, but I hit two setup issues. First, on Windows, the generator failed with `spawn npm ENOENT`: it tried to launch `npm` directly, while Windows exposes it as a command script. Trying `npm.cmd` directly then produced `spawn EINVAL` on my Node installation. I got generation working by patching the cached Voxgig package to spawn npm through a shell on Windows. This was a local npx-cache workaround, not a permanent fix to the generator, so I think Windows process spawning should be handled upstream.`[Feedback]`

I also had model include paths that were resolved from the `.sdk` working directory rather than relative to each model file. That caused an Aontu `source not found` error even though the source file existed under `model/`. I updated the local includes and verified generation repeatedly. `npm run generate` then completed, including the model test stage. It still prints a Node deprecation notice and two nonfatal warnings about optional documentation components.

For a real API check, I added `ts/test-sdk.ts` and called `client.Rate().list({ base: 'USD', quote: 'EUR,GBP,INR' })`. My first attempt used `client.Rate.list()` and a `quotes` field; the generated SDK uses a callable `Rate()` accessor and the singular `quote` filter. After correcting that, the request succeeded and returned rates for all three currencies.

I also verified the TypeScript sources compile with `npx tsc --build src test`. The package's `npm run build` script itself does not run in PowerShell because it uses Unix `rm -rf`; making that script cross-platform would improve the Windows developer experience.`[Feedback]`

Overall, the generator produced a working client and made the API operations straightforward to use. The most time-consuming friction was environment-specific process spawning and understanding the model's include-resolution rules. The live smoke test confirmed the generated client can make a real request without an API key.