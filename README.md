# Yuval's stuff

A collection of learning exercises and short projects with no better place to go

This is really just a collection of independent smaller projects, learning exercises, and whatever else I do for fun.
There will be some good code, some less good code, some useful projects and examples and some things I write for fun only that will serve no easily conceiveable real-world application

## Current projects:

- ## linked-list:

  > A small, simple implementation of a (very) basic linked list data structure.

- ## noise-gen:

  > A learning project about Pseudo-random number generation, different types of noise generation, and Fractional Brownian Motion (fBm) - including:
  >
  > - A complete implementation of a 2-dimensional vector library.
  > - Several different Pseudo-random number generator.
  > - Different hashing functions.
  > - Different types of noise.
  > - Fractional Brownian Motion.
  > - Type-safe implementation rules, for ease and safety of future use.

- ## n-dimensions:

  > A simple implementation of an n-dimensional vector library.

- ## primes:

  Some learning exercises in different methods of calculating primes and comparisons of methods.

  This project developed to include:

  ### [_Two checkers_](src/primes/checkers/):

  - [Basic](src/primes/checkers/basic.ts) - Iterates over any number below and returns `false` if the number is cleanly divisible.

  - [Optimized](src/primes/checkers/optimized.ts) - Same thing as basic, but with every pass decreases the maximum number to check.

  > "Checkers", in this context, are `functions that receive a number and return whether it's a prime`

  ### [_Six calculators_](src/primes/calculators/):

  > "Calculators", in this context, are `functions that receive a range of numbers and return an array of all the primes in the range`

  ### These calculators, currently, are split into two categories:

  - ### The [_naive approach_](src/primes/calculators/naive-approach/):

    Iterate over all the numbers in range, and check each one:

    - [Basic](src/primes/calculators/naive-approach/basic.ts) - Iterates over all the numbers in range, using the [basic checker](src/primes/checkers/basic.ts).

    - [Optimized](src/primes/calculators/naive-approach/optimized.ts) - Iterates over all the numbers in range, using the [optimized checker](src/primes/checkers/optimized.ts).

  - ### The [_Sieve of Eratosthenes approach_](src/primes/calculators/sieve/):

    > [**Sieve of Eratosthenes**](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) | [**Different source**](https://cp-algorithms.com/algebra/sieve-of-eratosthenes.html#asymptotic-analysis)

    I've used two "methods" to implement the sieve functions - [_the clean implementation_](src/primes/calculators/sieve/clean/) and [_the optimized implementation_](src/primes/calculators/sieve/optimized/).

    The [_clean implementation_](src/primes/calculators/sieve/clean/) uses the described algorithm and _nothing else_, which means it always goes from 2 to the maximum and filters the results after the run

    The [_optimized implementation_](src/primes/calculators/sieve/optimized/) was written as a sort of "vacuum answer" to this non-optimal behavior, and while very similar in look and execution, the difference is that these functions start at the minimum, thus needing to [_check each number_](src/primes/checkers/), instead of assuming the check-list always got rid of non-primes.

    > Note: The "optimized" versions of the algorithm use the [optimized checker](src/primes/checkers/optimized.ts)

    - [Clean basic](src/primes/calculators/sieve/clean/basic.ts) | [Optimized basic](src/primes/calculators/sieve/optimized/basic.ts) - A basic implementation of the sieve algorithm.

    - [Clean linear](src/primes/calculators/sieve/clean/linear.ts) | [Optimized linear](src/primes/calculators/sieve/optimized/linear.ts) - An implementation of the algorithm with a linear time complexity, as [**described here**](https://cp-algorithms.com/algebra/prime-sieve-linear.html).

  ### Note:

  The [_optimized implementation_](src/primes/calculators/sieve/optimized/) has a big issue!

  > See if you can figure out the issue yourself, as a challenge.

  The reason this implementation has a big issue is that I assumed that the "doubling" in functions executed (remember, we are _checking each number_) would be compensated for by the fact that we need to run this process on less numbers.

  ### After more thought, I realized this is wrong for two reasons:

  1.  The "doubling" would mean that in order to (in theory) do less actions, one would need to have the minimum value over half the maximum.
      > Remember, this is the starting point!
  2.  The second (and more important) reason this is wrong, and why doubling was in quotation marks, is simply that the [optimized check](src/primes/checkers/optimized.ts) we are using _doesn't scale linearly_ with the size of the number that is being checked.

      > This is not an issue with the implementation. The [**best currently known algorithm**](https://en.wikipedia.org/wiki/AKS_primality_test) for checking if a number is prime has a time complexity of $O(log (n)^ 6) $ - as described in [**this paper**](https://math.dartmouth.edu/~carlp/PDF/complexity12.pdf).

      This means that we are not so much "doubling" the run time of one loop cycle as much as we are making it non-linear, unlike before.

      > The [_clean implementations_](src/primes/calculators/sieve/clean/) of the algorithm only use a boolean table, so while setting the table takes linear time (each loop cycle), each check of the value of the boolean table runs in constant time.

  What this means, in practice, is that the [_optimized implementations_](src/primes/calculators/sieve/optimized/) of the algorithm are (at least theoretically) faster than the corresponding [_clean implementation_](src/primes/calculators/sieve/clean/) only when **two conditions are met**:

  1.  The minimum parameter is _a significant percentage_ of the maximum parameter.

  2.  The numbers we are checking _are not very big_.

  ### [A typing system](src/primes/types.ts):

  Used to strongly type everything together - preventing bugs and misuse.

  Note: This project heavily relies on [**Tuples**](https://www.w3schools.com/typescript/typescript_tuples.php).

  ### [Comparison functions](src/primes/utils/comparisons.ts):

  To help compare different [_calculators_](src/primes/calculators/) - written for flexibility in what you pass to it.
