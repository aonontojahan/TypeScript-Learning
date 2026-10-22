"use strict";
function infiniteLoop() {
    while (true) {
        console.log("Running ...");
    }
}
infiniteLoop();
// The above function will run forever and never return a value, so its return type is never.
// Never type is used to represent the type of values that never occur. For example, a function that always throws an error or a function that never returns (like an infinite loop) can be typed as never.
// In real-world error handing scenarios, we can use never type to represent the type of values that never occur. For example, if we have a function that always throws an error, we can type it as never. This way, we can catch the error and handle it appropriately.
// For gameloop or serverloop scenarios, we can use never type to represent the type of values that never occur. For example, if we have a function that runs forever, we can type it as never. This way, we can catch the error and handle it appropriately.
//# sourceMappingURL=neverdatatype.js.map