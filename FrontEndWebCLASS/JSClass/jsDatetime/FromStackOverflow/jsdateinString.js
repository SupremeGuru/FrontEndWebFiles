let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};
let today= new Date();
// To see in any language in its date format google its language locale then change any en-US to the locale and run
console.log(today.toLocaleDateString("en-US"));
console.log(today.toLocaleDateString("en-US", options));
console.log(today.toLocaleDateString("hi-lN", options));
console.log(today.toLocaleDateString("ja-JP", options));
console.log(today.toLocaleDateString("ig-IG", options));