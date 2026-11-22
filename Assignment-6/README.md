# Assignment 6 – Asynchronous JavaScript

This folder contains separate solutions for Q1–Q10. Each question is implemented
in its own `.js` file using core JavaScript (ES6+), with comments explaining
the asynchronous behavior.

## Requirements
- Node.js 18 or newer is recommended.
- No npm packages or frameworks are required.
- Q6 uses the built-in `fetch()` available in Node.js 18+ and modern browsers.
  The optional HTML-card section runs only in a browser.

## Run a question
Open a terminal in this folder and run, for example:

```bash
node Q1_async_coffee_maker.js
node Q2_event_loop_micro_vs_macro.js
```

Replace the filename with any question file from Q1 through Q10.

## Notes
- Q1, Q3, Q4, Q7, Q8, and Q10 intentionally include random failures.
  Run them again if a simulated failure occurs.
- Q5 runs the nested-callback demonstration first, then the async/await
  demonstration so their console output does not overlap.
- Q4 uses the same two server Promises for `Promise.all()` and `Promise.race()`.
  `Promise.race()` settles with the first Promise to settle, including rejection.
- Q6 checks `response.ok` because `fetch()` does not reject just because the
  server returns an HTTP error status.
