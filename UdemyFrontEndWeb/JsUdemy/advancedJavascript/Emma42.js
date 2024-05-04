// Imagine being asked these questions
// How does javascript work ?
// Explain the difference between asynchronous and synchronous programming?
// Explain the statement "Javascript is a single threaded language that can be non-blocking" ?
// Why does this code cause a stack overflow
const foo = () => {
    foo();
}
foo();
