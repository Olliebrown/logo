let logo = require('./lib/index')

let commands = `
to out :first :second
  (print :first :second)
end

(out "hello "world)
(SETSC 99 0 99)
clean
REPEAT 4 [FD 100 RT 90]
`

logo.convert(commands, (err, obj) => {
  let output = ""
  if (err) {
    // Something went wrong
    output = JSON.stringify({ error: err })
  } else {
    // Success, return the command stream
    output = JSON.stringify(obj, null, 2)
  }

  console.log(output)
})
