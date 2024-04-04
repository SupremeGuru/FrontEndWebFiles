// Destructuring
const bps = "BulletsPerSecond"
const redBean = Object(height=30,width=15,firePower=Symbol(30|bps))                                                
const {height , width , firePower } = redBean;

// Now you can console.log height, width or firePower
console.log(firePower);
console.log(width);
console.log(height);