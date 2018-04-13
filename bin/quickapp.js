#!/usr/bin/env node

const program = require('commander')
const pkg = require('../package')
const quickapp = require('..')

program
  .version(pkg.version)
  .usage('<input>')
  .option('-H, --host', 'Email host')
  .on('--help', console.log)
  .parse(process.argv)
  .args.length || program.help()

const { args, host } = program
const [ input ] = args

console.log(quickapp(input, { host }))
