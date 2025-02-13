# Type 'string[]' is not assignable to type 'string'

This repository demonstrates a common TypeScript error: assigning an array of strings to a variable that expects a single string.

## Bug

The `greeter` function expects a single string argument. However, the code attempts to pass an array of strings. TypeScript correctly identifies this as a type mismatch.

## Solution

The solution modifies the `greeter` function to accept an array of strings.  It then iterates through the array to greet each person individually.