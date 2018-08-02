# js-exercise-tester

This is a set of introductory exercises for JavaScript, with test cases. The exercises emphasize modern JavaScript iteration methods, such as map and filter, over the older while and for forms.

## Getting Started

Everything you need is in one HTML file. In addition, you have to create a file to hold your JavaScript code.

### Prerequisites

  * Any modern web browser with a developer console, such as Chrome or Firefox
  * A good text editor, such as Visual Studio Code, BBedit, or Sublime

### Installing

  * Download [tests.html](tests.html) into a folder.
  * Create an empty text file called ***solutions.js** in the same folder. 
  * Open **tests.html** in your browser to see the QUnit report on tests passed and failed.

Initially all tests will fail because you have not defined any functions.

### Using

Your goal is to write function definitions in the file **solutions.js** to pass all the tests.

For example, the first test that fails is **sumOfSquares**.

Clicking on _Show exercise_ next to **sumOfSquares** to see a description of what you need to do. For this example, you need to define a function **sumOfSquares** to take two numbers, square them, and return the sum. The description lists the tests cases your code needs to pass, e.g., <tt>sumOfSquares(3, 4)</tt> should return 5.

In your file **solutions.js**, add the following code. This is deliberately wrong so that you can see what partial success looks like.

```
function sumOfSquares(x, y) {
  return 25;
}
```

Reload **test.html**. The report should show that the first two tests pass, but the third test fails. 

Now change your solution to the correct code:

```
function sumOfSquares(x, y) {
  return x * x + y * y;
}
```

Reload **test.html**. The report should show that all tests for **sumOfSquares** pass. To see what those tests were, click on the **sumOfSquares** label in the report.

For more on using the QUnit test interface, see [this tutorial](https://code.tutsplus.com/tutorials/how-to-test-your-javascript-code-with-qunit--net-9077).


## Built With

* [QUnit](https://qunitjs.com/) - The in-browser testing framework used

## Authors

* **Chris Riesbeck** - *Initial work* - [home page](http://www.cs.northwestern.edu/~riesbeck/)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to QUnit for in-browser testing and lots of hooks
