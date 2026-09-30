
import { cmp, Content, installCommand, isPublished } from '@voxgig/sdkgen'


const ReadmeInstall = cmp(function ReadmeInstall(props: any) {
  const { target, ctx$ } = props
  const { model } = ctx$

  if (isPublished(model, target.name)) {
    Content('```bash')
    Content(`
${installCommand(model, target.name)}
`)
    Content('```')
    return
  }

  Content(`This package is not yet published to npm. For exact clone, build,
and local-install commands, see the [source installation guide](../README.md#install-from-source).

`)
})


export {
  ReadmeInstall
}
