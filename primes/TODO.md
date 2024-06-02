# TODO:

- [x] Change return values from Tuples

  > Using Tuples was nice when the project was first starting, but if I wanna expand this more I'm gonna need some better return values (objects please).
  >
  > The Tuples are fine and everything, and _some_ things are made more convenient by using them, but the readability of some parts of the code is just awful. (Basically [this entire file](utils/comparisons.ts))

- [x] Changing the calculator types

  > I'd like to have a type-safe function implementation, which is why I wrote this in the first place, but having different types of functions and then manually [flagging whether the function uses a checker or not](index.ts#L20) is just the definition of [**DRY**](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)

  - [x] Removing PrimeCalculator<IsChecked>
  - [x] Implementing a check for the calculator function that was passed

    > I can just implement this using two different comparisons, but where's the fun in that?
