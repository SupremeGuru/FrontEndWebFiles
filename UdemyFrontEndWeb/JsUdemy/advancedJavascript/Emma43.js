// js Modules
/*
    Levels of js modules from lowest used to highest used
    1)  inline script 
    2)  script tags
    3)  IIFE : This just wraps the functions in brackets e.g
    4)  Browserify + CommonJS
    5)  Webpack + ES6

    Their inefficiencies
    inline script : Lack of Code Reusability, Pollution of Global Namespace
    script tag : Lack of Dependency Resolution(This means the scripts must be added in the correct order)

    IIFE : 
*/
// IIFE Examples
(function(){
    myApp.add = (a,b)=> {
        return a+b; 
    }
})

// Browserify + commonJS Examples
module.exports = function add(a, b) {
    return a+b;
}

var add = require("./add");
// NB: Browserify uses what we call a Module Bundler

// Webpack + ES6
export const add = (a, b) => a+b;
// or
export default function add() {
    return a+b;
}

import {add} from './add';
// or
import add from './add'
// Webpack also bundles js files but with ES6 syntax instead of commonJS syntax
// In react we will be using Webpack and es6 syntax alot




// How webpack does what it does is by using a config file e.g of code
// Webpack config file code example
module.exports = {
    entry: './app/main.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    }
}