"use strict";

const util = require('util');
const Instance = require('./Instance');

/**
 * The bitmap object
 * @class ShapeInstance
 * @extends Instance
 * @constructor
 * @param {LibraryItem} libraryItem The bitmap data
 * @param {Array} commands
 */
const ShapeInstance = function(libraryItem, commands)
{
    Instance.call(this, libraryItem, commands);
};

// Extends the prototype
util.inherits(ShapeInstance, Instance);
const p = ShapeInstance.prototype;

/**
 * Render the element
 * @method render
 * @param {Renderer} renderer
 * @return {string} Buffer of object
 */
p.renderContent = function(renderer)
{
    return renderer.template('shape-instance', {
        name: this.libraryItem.name,
        func: renderer.compress ? "d" : "drawCommands"
    });
};

module.exports = ShapeInstance;