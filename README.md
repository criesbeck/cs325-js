# js-exercise-tester

This is an evolving set of exercises for JavaScript, with test cases, for 
[my course on AI Programming](http://www.cs.northwestern.edu/academics/courses/325/). 
The exercises focus on symbolic AI knowledge
representation and inference techniques, using
modern JavaScript methods, parallel to classic Lisp code.

Tests are stored in JSON files, and run by a generic HTML file, **js-tester.html**.

![Exercise Tester Screenshot](js-tester.png?raw=true)

## Prerequisites for use

  * Any modern web browser with a developer console, such as Chrome or Firefox
  * A good text editor, such as Visual Studio Code, BBedit, or Sublime, for editing your JavaScript file
  * A local web server, e.g., node, PHP, or VS Code's Live Server; only static assets are served

## Installing and testing

If you have git, clone this repository into the desired directory.

```
git clone https://github.com/criesbeck/cs325-js.git
```

Otherwise, download the Zip file and extract the files to the desired directory.

Start a local server and open the URL **http://localhost:5500/js-tester.html#demo** to 
run the demo set of tests and code. Change 5500 to whatever port your local server
is using.

You should see a QUnit report on tests that have passed and failed.

## Practice solving exercises

The first failing exercise is **sumOfSquares**. Click on <button>?</button>
next to **sumOfSquares** to see what is required.

The code being tested is in
**demo-solutions.js**. Open this file in your text editor or IDE. Change the definition
of **sumOfSquares** to the correct answer:

```
function sumOfSquares(x, y) {
  return x * x + y * y;
}
```

Save **demo-solutions.js** and reload the web page. The report should show that all tests for **sumOfSquares** pass. 

To see what tests were run, click on the **sumOfSquares** label in the report.

Now try to solve the other exercises on that page.

Hint: [Open the developer console in your browser](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools#How_to_open_the_devtools_in_your_browser) when working on exercises. That way you'll see any error messages that happen when your code is loaded or run. Some browsers won't reload a changed JavaScript source file unless the developer window is open.

## The exercise sets

The exercises are divided into separate JSON files for different topic areas. These files
are in the **tests** subdirectory.

Note that if you change the hash in a URL, you need to explicitly reload the page.

* [basic](https://github.com/criesbeck/cs325-js/blob/master/tests/basic-tests.json): a few 
warmup exercises involving looping, to get you used to modern JavaScript iteration
with **map** and such, rather than **for** or **while**. Create the file
 **basic-solutions.js** in the same directory as **js-tester.html** to hold your solutions.
* [matcher](https://github.com/criesbeck/cs325-js/blob/master/tests/matcher-tests.json): a more
challenging set of exercises that incrementally develops a recursive object pattern matcher.
Put your solutions in the file **matcher-solutions.js**.

Topics accumulate. Solutions to exercises in later modules will often require topics from earlier modules. Earlier exercises have simpler solutions, so do them in order.

Feel free to define helper functions if they make your solution clearer. Don't call helper functions ``helper``!

Work your way down the list of exercises.

Unless specified otherwise by the exercise requirements, solution code should not
* modify input objects
* print anything

## Resources

A readable, reasonably up to date, reference that covers all the JavaScript you need is [The Modern JavaScript Tutorial](https://javascript.info/). 

For more on using the QUnit test interface, see [this tutorial](https://code.tutsplus.com/tutorials/how-to-test-your-javascript-code-with-qunit--net-9077).

## Built with

* [QUnit](https://qunitjs.com/) - The in-browser testing framework used

## Authors

* **Chris Riesbeck** - *Initial work* - [home page](http://www.cs.northwestern.edu/~riesbeck/)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to QUnit for in-browser testing and lots of hooks
