#!/usr/local/bin/node
import userGreeting from '../src/welcome.js';
import requestEven from '../src/even.js';

const name = userGreeting();

console.log(requestEven(name));
