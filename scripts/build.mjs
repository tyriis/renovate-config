import "zx/globals"
import fs from "fs"
import json5 from "json5"
import merge from "deepmerge"
/* global $ echo */

$.verbose = false

// read json5 entry point
// parse imports and merge into single object
// run recursice function to merge all imports

let parse = (entryPoint) => {
  let data = fs.readFileSync(entryPoint, "utf8")
  let parsed = json5.parse(data)
  let result = { ...parsed }
  if (parsed.extends) {
    let githubRefs = parsed.extends.filter((extend) => extend.indexOf("github>") >= 0)
    for (let githubRef of githubRefs) {
      // expect gitubRef to be local
      let path = githubRef.split("//")[1]
      if (path.indexOf(".json") < 0) {
        path += ".json"
      }
      const data = parse(path)
      result = merge(result, data)
    }
  }
  if (result.extends) {
    result.extends = result.extends.filter((extend) => extend.indexOf("github>") < 0)
  }
  return result
}

if (!argv.preset) {
  console.log("No preset provided")
  process.exit(1)
}

// echo(chalk.blue(`> render preset: ${argv.preset}`))
let result = parse(argv.preset)
result.description = `Generated from ${argv.preset}`
echo`${json5.stringify(result, null, 2)}`
