# js-exercise-tester

This is a set of introductory exercises for JavaScript, with test cases. The exercises emphasize modern JavaScript iteration methods, such as map and filter, over the older while and for forms.

This is neither a tutorial, nor an attempt at an exhaustive set of exercises. The goal is to offer some simple challenges that are not completely inane. 

The demo [tests.html](https://criesbeck.github.io/js-exercise-tester/tests.html)
shows the interface a few exercises defined,  one solution, and one partial
solution.

## Getting Started

Everything you need is in one HTML file. In addition, you have to create a file to hold your JavaScript code.

### Prerequisites

  * Any modern web browser with a developer console, such as Chrome or Firefox
  * A good text editor, such as Visual Studio Code, BBedit, or Sublime

### Installing

  * Download [tests.html](tests.html) into a folder.
  * Create an empty text file called **solutions.js** in the same folder. 
  * Open **tests.html** in your browser to see the QUnit report on tests passed and failed.

Initially all tests will fail because you have not defined any functions.

## The Exercises

The exercises are divided into modules. Each module introduces a topic in JavaScript. Topics accumulate. Solutions to exercises in later modules will often require topics from earlier modules.

Solutions should be functionally clean. Unless specified by the exercise,
* No input objects should be modified.
* Results should be returned as values, not printed.

Most exercises can be done with one short function, but feel free to define helper functions if they make the solution clearer.

Start with the first exercise. 

* Click on _Show exercise_ to see what you need to define. 
* Write a function definition in the file **solutions.js** that you think will work. 
* Save that file, and load (or reload) your local copy of **tests.html** in your browser. 
* Fix your code until it passes all the tests.

Work your way down the list of exercises.

### Example

The first exercise is **sumOfSquares**.

Clicking on _Show exercise_ next to **sumOfSquares** shows a box that says you need to define the function **sumOfSquares** to take two numbers, square them, and return the sum. The description includes the tests cases your code needs to pass, e.g., <tt>sumOfSquares(3, 4)</tt> should return 25.

Put the following code into your file **solutions.js**. This code is deliberately wrong, so that you can see what partial success looks like.

```
function sumOfSquares(x, y) {
  return 25;
}
```

Save **solutions.js** and reload **test.html**. The report should show that the some tests pass, but some fail. 

Now change your solution to the correct code:

```
function sumOfSquares(x, y) {
  return x * x + y * y;
}
```

Save **solutions.js** and reload **test.html**. The report should show that all tests for **sumOfSquares** pass. To see what those tests were, click on the **sumOfSquares** label in the report.

## Resources

A readable, reasonably up to date, reference that covers all the JavaScript you need is [The Modern JavaScript Tutorial](https://javascript.info/). 

For more on using the QUnit test interface, see [this tutorial](https://code.tutsplus.com/tutorials/how-to-test-your-javascript-code-with-qunit--net-9077).

## Built With

* [QUnit](https://qunitjs.com/) - The in-browser testing framework used

## Authors

* **Chris Riesbeck** - *Initial work* - [home page](http://www.cs.northwestern.edu/~riesbeck/)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to QUnit for in-browser testing and lots of hooks
