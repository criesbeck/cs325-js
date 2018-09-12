# js-exercise-tester

This is an evolving set of exercises for JavaScript, with test cases, for 
[my course on AI Programming](http://www.cs.northwestern.edu/academics/courses/325/). 
The exercises focus on symbolic AI knowledge
representation and inference techniques, using
modern JavaScript methods, parallel to classic Lisp code.

The demo [tests.html](https://criesbeck.github.io/js-exercise-tester/tests.html)
shows the interface, with just a few simple JavaScript
exercises specified,  one solved, and one partially solved.

![Exercise Tester Screenshot](js-tester.png?raw=true)

## Getting Started

You need one HTML file to test code in a JavaScript file you create.

### Prerequisites

  * Any modern web browser with a developer console, such as Chrome or Firefox
  * A good text editor, such as Visual Studio Code, BBedit, or Sublime, for editing your JavaScript file

### Installing

If you have git installed, clone this repository into the desired directory.

```
git clone https://github.com/criesbeck/cs325-js.git
```

Otherwise, download the Zip file and extract the files to the desired directory.

To run the tests, just open a **xxx-tests.html** file in your browser. You should see
a QUnit report on tests passed and failed.

Initially all tests will fail because you have not defined any functions. To define
solutions, create a corresponding file **xxx-solutions.js** in the same
directory to hold your JavaScript answers.

## The Exercises

The exercises are divided into separate files for different topic areas. 

* [Basic](https://github.com/criesbeck/cs325-js/blob/master/basic-tests.html) a few 
warmup exercises involving looping, to get you used to modern JavaScript iteration
with **map** and such, rather than **for** or **while**.
Solutions should be defined in the file **basic-solutions.js**.
* [Matcher](https://github.com/criesbeck/cs325-js/blob/master/matcher-tests.html): a more
challenging set of exercises that incrementally develops a recursive object pattern matcher.
Solutions should be defined in the file **matcher-solutions.js**.

Topics accumulate. Solutions to exercises in later modules will often require topics from earlier modules. Earlier exercises have simpler solutions, so do them in order.

Feel free to define helper functions if they make your solution clearer. Don't call helper functions ``helper``!

To do an exercise for a test page,
* Open the test page in your browser.
* Click the <button>?</button> button next to an exercise to see what is required. 
* Write your function definition(s) in the corresponding solutions file. 
* (Re)load the HTML page. 
* The page will show which tests your code passed, and the first one that failed.
* Fix your code and reload the page until it passes all the tests.

Hint: [Open the developer console in your browser](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools#How_to_open_the_devtools_in_your_browser) when working on exercises. That way you'll see any error messages that happen when your code is loaded or run. Some browsers won't reload a changed JavaScript source file unless the developer window is open.

Work your way down the list of exercises.

Unless specified otherwise by the exercise requirements, solution code should not
* modify input objects
* print anything

### Practice

Open **docs/tests.html** in your browser.

The first exercise in **docs/tests.html** is **sumOfSquares**. The QUnit report should say that
a few tests pass, but some file.

Click on <button>?</button>  next to **sumOfSquares** to see what is required.

Open the file **docs/solutions.html** in your text editor or IDE. Change the code there
to the correct answer:

```
function sumOfSquares(x, y) {
  return x * x + y * y;
}
```

Save **docs/solutions.js** and reload **docs/test.html**. The report should show that all tests for **sumOfSquares** pass. 

To see what tests were run, click on the **sumOfSquares** label in the report.

Now try to solve the other exercises in **docs/tests.html**.

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
