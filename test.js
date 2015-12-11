//----------------------------------------------------------
// modules
//----------------------------------------------------------
import test from 'ava'
import fm from './'

//----------------------------------------------------------
// fixtures
//----------------------------------------------------------
const str = `
---
foo: bar
baz: qux
---
One fish two fish

Red fish blue fish
`

const delim = '---'

//----------------------------------------------------------
// tests
//----------------------------------------------------------
test('parse frontmatter and content', t => {
  const fmOut = fm(delim)(str)

  const expected = {
    foo: 'bar',
    baz: 'qux',
    content: new Buffer(`One fish two fish\n\nRed fish blue fish`, 'utf8')
  }

  t.same(fmOut, expected)
})
