// define the test modules
Object.keys(exercises).forEach(moduleName => {
  const module = exercises[moduleName];
  QUnit.module(moduleName);
  Object.keys(module).forEach(name => {
    const exercise = module[name];
    QUnit.test(name, assert => {
      assert.ok(window[name], `${name} is defined`);
      exercise.tests.forEach(({inputs, output}) => {
        const inStr = inputs.map(JSON.stringify).join(', ');
        assert.deepEqual(window[name].apply(null, inputs), output, `${inStr} tested`);
      });
    });
  });
});

// add exercise descriptions to the report when tests complete

QUnit.done(details => {
  Array.from(document.querySelectorAll('.module-name'))
    .forEach(elt => { attachDescriptionLink(elt.closest('[id]')); });
});

function attachDescriptionLink(elt) {
  const moduleName = elt.querySelector('.module-name').innerText;
  const testName = elt.querySelector('.test-name').innerText;
  const exercise = exercises[moduleName] && exercises[moduleName][testName];
  if (exercise) {
    const rerunLink = elt.querySelector('a');
    const exerciseLink = document.createElement('button');
    exerciseLink.classList.add('link');
    exerciseLink.appendChild(document.createTextNode('?'));
    exerciseLink.onclick = () => { showExercise(moduleName, testName); };
    elt.insertBefore(exerciseLink, rerunLink.nextSibling);
  }
}

// display the exercise definition 
const exerciseModal = document.querySelector('#exercise-description');

function showExercise(moduleName, testName) {
  const oldEx = exerciseModal.dataset.showing;
  const newEx = moduleName + ':' + testName;
  if (oldEx === newEx) {
    exerciseModal.classList.toggle('visible');  
  }
  else {
    exerciseModal.dataset.showing = newEx;
    const contentElt = exerciseModal.querySelector('.content');
    contentElt.innerHTML = makeDescriptionHtml(moduleName, testName);
    exerciseModal.classList.add('visible');
  }
}

function makeDescriptionHtml(moduleName, testName) {
  const exercise = exercises[moduleName][testName];
  const links = makeUl('Links', exercise.links, makeLinkHtml);
  const testCases = 
    makeUl('Tests', exercise.tests, test => makeTestCaseHtml(testName, test));
  return `Define <b>${testName}</b> to take ${exercise.arguments} \
and return ${exercise.returns}.\
${links}${testCases}`;
}

function makeUl(label, lst, fn) {
  return (!lst || lst.length === 0) ? '' : 
   `<div class="block">${label}:<ul>${lst.map(item => `<li>${fn(item)}</ii>`)
      .join('')}</ul></div>`;
}

function makeTestCaseHtml(name, test) {
  const inStr = test.inputs.map(escapeHtml).join(', ');
  const outStr = escapeHtml(test.output);
  return `<tt>${name}(${inStr})</tt> returns <tt>${outStr}</tt>`;
}

function makeLinkHtml(link) {
  return `<a href="${link.href}" target="_blank">${link.text || link.href}</a>`;
}

function escapeHtml(str) {
  return JSON.stringify(str).replace(/&/g, '&amp;').replace(/</g, '&lt;');
}

exerciseModal.querySelector('.close-btn').onclick = () => {
  exerciseModal.classList.remove('visible');
};