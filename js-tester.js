// define the test modules

let exercises = {};

function defineTestModules() {
  Object.keys(exercises).forEach((moduleName) => {
    const module = exercises[moduleName];
    QUnit.module(moduleName);
    Object.keys(module).forEach((name) => {
      const exercise = module[name];
      QUnit.test(name, (assert) => {
        assert.ok(window[name], `${name} is defined`);
        exercise.tests.forEach(({ inputs, output }) => {
          const inStr = inputs.map(JSON.stringify).join(', ');
          assert.deepEqual(window[name].apply(null, inputs), output, `${inStr} tested`);
        });
      });
    });
  });
}

function loadSolutions() {
  const script = document.createElement('script');
  script.onload = defineTestModules;
  script.src = `${exercises.name}-solutions.js`;

  document.head.appendChild(script);
}

function loadTests(url) {
  fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response);
    }
    return response.json();
  }).then((json) => {
    exercises = json;
    loadSolutions();
  })
    .catch((error) => { console.log('Error', error); });
}

// add exercise descriptions to the report when tests complete

QUnit.done(() => {
  const modal = createModal();
  Array.from(document.querySelectorAll('.module-name'))
    .forEach((elt) => { attachDescriptionLink(elt.closest('[id]'), modal); });
});

function attachDescriptionLink(elt, modal) {
  const moduleName = elt.querySelector('.module-name').innerText;
  const testName = elt.querySelector('.test-name').innerText;
  const exercise = exercises[moduleName] && exercises[moduleName][testName];
  if (exercise) {
    const rerunLink = elt.querySelector('a');
    const exerciseLink = document.createElement('button');
    exerciseLink.classList.add('link');
    exerciseLink.appendChild(document.createTextNode('?'));
    exerciseLink.onclick = () => { showExercise(moduleName, testName, modal); };
    elt.insertBefore(exerciseLink, rerunLink.nextSibling);
  }
}

// modal for displaying the exercise definition
function createModal() {
  const modal =
    addElement('<div class="modal"><span class="close-btn">&cross;</span><div class="content"></div></div>');
  modal.querySelector('span').onclick = () => {
    modal.classList.remove('visible');
  }
  return modal;
}

// https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro/35385518#35385518
function addElement(html) {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  document.body.appendChild(template.content.firstChild);
  return document.body.lastChild;
}

function showExercise(moduleName, testName, modal) {
  const oldEx = modal.dataset.showing;
  const newEx = moduleName + ':' + testName;
  if (oldEx === newEx) {
    modal.classList.toggle('visible');  
  }
  else {
    modal.dataset.showing = newEx;
    const contentElt = modal.querySelector('.content');
    contentElt.innerHTML = makeDescriptionHtml(moduleName, testName);
    modal.classList.add('visible');
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
