// Unknown is similar to any but it forces type checking for mutating a variable
let wat: unknown = 'hello world'
if (typeof wat === 'string') console.log(wat.toUpperCase())
