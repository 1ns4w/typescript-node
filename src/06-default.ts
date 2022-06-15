// We saw we can set undefined as a default value for a parameter using ?
// We can set other default values for parameters using =
const hi = (name: string = 'world') => console.log(`hello ${name || 'troll'}`)

// Sanity checks
hi('') // hello troll
hi() // hello world
hi('Angel') // hello Angel
