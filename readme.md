# `yaml-fm`

[![Build Status][1]][2]
[![Coverage Status][3]][4]
[![MIT License][5]][6]

[**About**](#about) |
[**Installation**](#installation) |
[**Usage**](#usage) |
[**License**](#license)

## About

`yaml-fm` converts a [String][string] with [YAML][yaml] [frontmatter][frontmatter] to an [Object][object].
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

## Usage

## License

[MIT][6]

[1]: https://img.shields.io/travis/codekirei/yaml-fm.svg?style=flat-square
[2]: https://travis-ci.org/codekirei/yaml-fm
[3]: https://img.shields.io/coveralls/codekirei/yaml-fm.svg?style=flat-square
[4]: https://coveralls.io/github/codekirei/node-multispinner?branch=master
[5]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square
[6]: https://github.com/codekirei/yaml-fm/blob/master/license
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[yaml]: http://yaml.org/
[frontmatter]: http://jekyllrb.com/docs/frontmatter/
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[currying]: https://en.wikipedia.org/wiki/Currying
[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[buffer]: https://nodejs.org/api/buffer.html
[trim]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
[ssg]: https://staticsitegenerators.net/
