'use strict'

//----------------------------------------------------------
// modules
//----------------------------------------------------------
const yaml = require('js-yaml')

//----------------------------------------------------------
// functions
//----------------------------------------------------------
/**
  Build flat object with yaml frontmatter and content.
  @param {String[]} strs - array of strings separated by delimiter
  @param {Buffer} content - buffer of non-frontmatter content
  @returns {Object} flat object with frontmatter and content
 */
const fmOb = (strs, content) => Object.assign(yaml.load(strs[1]), {content})

/**
  Build buffer of all content after frontmatter.
  @returns {Buffer} buffer of non-frontmatter content
 */
const fmContent = (strs, delim) => new Buffer(strs.slice(2).join(delim), 'utf8')

/**
  Curried function to apply strs to fmOb and fmContent.
  @param {String[]} strs - array of strings separated by delimiter
  @param {String} delim - delimiter for frontmatter
  @returns {Object} flat object with frontmatter and content
 */
const fm = (strs, delim) => fmOb(strs, fmContent(strs, delim))

/**
  Curried function to apply delim to anonymous function that calls fm.
  @param {String} delim - delimiter for frontmatter
  @returns {Function} anonymous function that parses string with frontmatter
 */
const frontmatter = module.exports = delim => str => fm(str.split(delim), delim)
