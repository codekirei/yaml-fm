# `yaml-fm`

[![Build Status][1]][2]
[![Coverage Status][3]][4]
[![MIT License][5]][6]

[**About**](#about) |
[**Installation**](#installation) |
[**API**](#api) |
[**Usage**](#usage) |
[**License**](#license)

## About

`yaml-fm` is a [Node.js][node] module that converts a [String][string] with [YAML][yaml] [frontmatter][frontmatter] to an [Object][object].
It uses [currying][currying] to be [`.map()`][map] friendly and converts non-YAML content to a [trimmed][trim] [Buffer][buffer].
Use it to build your own personal [static-site generator][ssg]!

Turn this:

```md
---
title: Hello world
slug: post/hello_world/index.html
tags:
  - excellent
  - adventure
---

Hello world!
```

Into this:

```js
{
  title: 'Hello world',
  slug: 'post/hello_world/index.html',
  tags: ['excellent', 'adventure'],
  content: <Buffer 48 65 6c 6c 6f 20 77 6f 72 6c 64 21>
}
```

## Installation

**Install**

```
$ npm install --save yaml-fm
```

**Require**

```js
var fm = require('yaml-fm')
```

## API

### yaml-fm(*delim*)

`delim`: **string**: required delimiter before and after YAML frontmatter

Returns an anonymous function.

### fn(*string*)

`string`: **string**: string to parse containing YAML frontmatter

Returns a flat JS object.
Non-frontmatter is [trimmed][trim], converted to a [Buffer][buffer], and included in `Object.content`.

## Usage

### Without `.map()`

```js
// require module
var fm = require('yaml-fm')

// delimiter for YAML
var delim = '---'

// string containing YAML frontmatter
var stringWithFm = `
---
title: Hello world
slug: post/hello_world/index.html
tags:
  - excellent
  - adventure
---

Hello world!
`

// parse string
// NOTE: because fm is curried, it must be called twice
var fmObj = fm(delim)(stringWithFm)

/**
 fmObj:
  {
    title: 'Hello world',
    slug: 'post/hello_world/index.html',
    tags: ['excellent', 'adventure'],
    content: <Buffer 48 65 6c 6c 6f 20 77 6f 72 6c 64 21>
  }
 */

```

### With `.map()`

See [example][example].

```js
// modules
var fm = require('../')
var fs = require('fs')
var globby = require('globby')
var bb = require('bluebird')

// promisify fs.readFile
var read = path => bb.promisify(fs.readFile)(path, 'utf8')

// glob -> paths -> strings -> objects
globby('content/*.md')
  .then(paths => bb.all(paths.map(read)))
  .then(strs => strs.map(fm('---')))
  .then(console.log)
  .catch(console.log)

/**
  NOTE:
  The fm transform could also look like this:

  .then(strs => strs.map(str => fm('---')(str)))

  Because yaml-fm uses currying, we can shorten that to the code seen above:

  .then(strs => strs.map(fm('---')))
 */
```

## License

[MIT][6]

[1]: https://img.shields.io/travis/codekirei/yaml-fm.svg?style=flat-square
[2]: https://travis-ci.org/codekirei/yaml-fm
[3]: https://img.shields.io/coveralls/codekirei/yaml-fm.svg?style=flat-square
[4]: https://coveralls.io/github/codekirei/node-multispinner?branch=master
[5]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square
[6]: https://github.com/codekirei/yaml-fm/blob/master/license
[node]: https://nodejs.org/
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[yaml]: http://yaml.org/
[frontmatter]: http://jekyllrb.com/docs/frontmatter/
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[currying]: https://en.wikipedia.org/wiki/Currying
[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[buffer]: https://nodejs.org/api/buffer.html
[trim]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
[ssg]: https://staticsitegenerators.net/
[example]: https://github.com/codekirei/yaml-fm/blob/master/example
