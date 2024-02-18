var name = prompt("Type your name: ");
let nameCasing0 = name.slice(0, 1);
let nameCasing1ToInfinity = name.slice(1, name.length);
alert(`Hello ${nameCasing0.toUpperCase()}${nameCasing1ToInfinity.toLowerCase}`);    // PN:Remember you can equate itself to itself after operating on one of itself
