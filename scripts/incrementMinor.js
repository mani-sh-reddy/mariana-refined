#!/usr/bin/env node
const { incrementVersion } = require("./incrementVersion")

function incMinorVersion(version) {
  const [major, minor, patch] = version.split(".")
  if (isNaN(Number(minor)))
    throw Error(`Version is not made up of numbers! "${version}"`)
  const newMinor = String(Number(minor) + 1)
  return [major, newMinor, patch].join(".")
}

incrementVersion(incMinorVersion)