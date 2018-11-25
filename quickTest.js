let logo = require('./lib/index')

let commands = `
TO square :len
  repeat 4 [fd :len rt 90]
end

SQUARE 2
`

logo.convert(commands, (err, obj) => {
  let output = ""
  if (err) {
    // Something went wrong
    output = JSON.stringify({ error: err })
  } else {
    // Success, return the command stream
    output = `ok ${obj.length}\n`
    obj.forEach((command, i) => { output += `${i}: ${JSON.stringify(command)}\n` })
  }

  console.log(output)
})
