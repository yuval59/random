# Yuval's stuff

A collection of learning exercises and short projects with no better place to go

This is really just a collection of independent smaller projects, learning exercises, and whatever else I do for fun.
There will be some good code, some less good code, some useful projects and examples and some things I write for fun only that will serve no easily conceiveable real-world application

## Current projects:

- ### linked-list:

  > A small, simple implementation of a (very) basic linked list data structure.

- ### noise-gen:

  > A learning project about Pseudo-random number generation, different types of noise generation, and Fractional Brownian Motion (fBm)
  > Including:
  >
  > - A complete implementation of a 2-dimensional vector library.
  > - Several different Pseudo-random number generator.
  > - Different hashing functions.
  > - Different types of noise.
  > - Fractional Brownian Motion.
  > - Type-safe implementation rules, for ease and safety of future use.

- ### n-dimensions:

  > A simple implementation of an n-dimensional vector library.

- ### primes:

  > Some learning exercises in different methods of calculating primes and comparisons of methods:
  >
  > Two "[checkers](src/primes/checkers/)" - `functions that receive a number and return whether it's a prime`:
  >
  > - [Basic](src/primes/checkers/basic.ts) - Iterates over any number below and returns `false` if the number is cleanly divisible.
  >
  > - [Optimized](src/primes/checkers/optimized.ts) - Same thing as basic, but with every pass decreases the maximum number to check.
  >
  > Four "[calculators](src/primes/calculators/)" - `functions that receive a range of numbers and return an array of all the primes in the range`:
  >
  > - [Naive](src/primes/calculators/naive.ts) - Iterates over all the numbers in range, using the [basic checker](src/primes/checkers/basic.ts).
  >
  > - [Optimized-naive](src/primes/calculators/optimized-naive.ts) - Iterates over all the numbers in range, using the [optimized checker](src/primes/checkers/optimized.ts).
  >
  > - [Sieve](src/primes/calculators/sieve.ts) - An implementation of the [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) - [More in-depth source](https://cp-algorithms.com/algebra/sieve-of-eratosthenes.html#asymptotic-analysis).
  >
  > - [Linear-sieve](src/primes/calculators/linear-sieve.ts) - An implementation of the [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) variation for linear time complexity, as [described here](https://cp-algorithms.com/algebra/prime-sieve-linear.html).
  >
  > > Note: The implementations of the sieve algorithm aren't what I'd consider "clean", since they both use a [checker function](src/primes/checkers/) to achieve a minimum cleanly; The other option is to run from 0 and then filter the results.
  >
  > A [typing system](src/primes/types.ts) to strongly type everything together - preventing bugs and misuse.
  >
  > > Note: This project heavily relies on [Tuples](https://www.w3schools.com/typescript/typescript_tuples.php).
  >
  > [Comparison functions](src/primes/utils/comparisons.ts) to help compare different "[Calculators](src/primes/calculators/)", written for flexibility in what you pass to it.
