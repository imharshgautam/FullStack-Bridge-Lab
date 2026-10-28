// Q5. Boolean Logic Access System

function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
    // All four conditions must be true for the system to be Secure.
    const isSecure =
        isAlarmOn &&
        isDoorLocked &&
        isWindowClosed &&
        isOwnerInside;

    // Demonstrate ! and || in an additional safety check.
    const isUnsafe = !isSecure || !isDoorLocked || !isWindowClosed;

    console.log(
        `Door locked: ${isDoorLocked}, Window closed: ${isWindowClosed}, ` +
        `Alarm on: ${isAlarmOn}, Owner inside: ${isOwnerInside}`
    );
    console.log(isSecure && !isUnsafe ? "Secure" : "Unsafe");
    console.log("--------------------");
}

// Test multiple outcomes
checkSecurity(true, true, true, true);    // Secure
checkSecurity(true, true, false, true);   // Unsafe: alarm is off
checkSecurity(false, true, true, true);   // Unsafe: door is unlocked
checkSecurity(true, false, true, false);  // Unsafe: window open, owner outside
