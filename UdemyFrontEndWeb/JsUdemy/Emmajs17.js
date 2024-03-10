window; // is the root parent because obviously you are using a window

window.document; // Then document is a child of window

document; // But like this it works in the console because the browser knows that the window is the root parent and document is a method of window so it should work

write("This won't work "); // But this won't work because the write method is not a method of window but a method of document 

document.write("This will work"); // This is the right way of doing it 

// NB: don't always use the .write() method in your web page or else everything will get cleared
