# Calculator

An on-screen calculator built with vanilla JavaScript, HTML, and CSS — no eval(), no new Function(), all arithmetic and expression evaluation built from scratch. Built as the capstone project for The Odin Project's Foundations JavaScript curriculum.

# Overview

A functional four-operator calculator (add, subtract, multiply, divide) supporting chained operations, decimal input, and proper handling of edge cases like consecutive operators, incomplete input, and division by zero.

Open index.html in a browser to use it.

# Features

- Digit buttons (0–9, plus a 00 shortcut) and a decimal point button
- All four basic operators, with correct chaining behavior (e.g. 12 + 7 - 1 = correctly evaluates left to right: 12 + 7 first, then 19 - 1)
- Clear button that fully resets calculator state
- Decimal point is disabled after one use per number, and re-enabled automatically at the start of a new number
- Pressing an operator immediately after another operator does not silently evaluate an incomplete expression
- Pressing = with incomplete input (no operator, or no second number) is safely ignored rather than producing an error or NaN
- Division by zero displays a friendly message instead of Infinity or crashing
- Results are rounded to 2 decimal places for display, while full precision is retained internally for any further chained calculations

# How It Works
- add, subtract, multiply, divide — the four raw math operations
- operate(operator, a, b) — dispatches to the correct function based on the operator symbol
- safeOperate(operator, a, b) — wraps operate, intercepting division by zero before it reaches Infinity
- formatResult(num) — rounds a number to 2 decimal places for display only, leaving the stored value at full precision
- Calculator state (firstNumber, operatorSelected, currentInput) is tracked at the top level of the script and updated by each button's click handler, forming a small state machine that decides, on every operator press, whether a pending calculation needs to be evaluated first before storing the new operator

# Key Concepts Practiced
- Building a multi-step state machine entirely from if/else logic and shared variables — no framework, no external state library
- Careful ordering of operations inside event handlers (evaluating before overwriting shared state, checking for error conditions before formatting/displaying results)
- Guard clauses and early returns to prevent invalid calculations
- Flexbox for a from-scratch calculator grid and full-page centering
- Debugging real logic bugs around variable scope, execution order, and side-effect timing inside click handlers

# Known Limitations / Extra Credit Not Yet Implemented
- No backspace button
- No keyboard input support
- Long decimal chains beyond 2 places are always rounded for display; there's no user control over precision

# Acknowledgments

Project spec from The Odin Project Foundations curriculum.