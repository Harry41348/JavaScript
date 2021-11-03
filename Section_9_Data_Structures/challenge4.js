'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const textArea = document.querySelector('textarea').value;
  let rows = textArea.split('\n');
  for (const row of rows) {
    let newStr = row.trim().toLowerCase();
    const replaceText = newStr.substr(newStr.indexOf('_'), 2);
    newStr = newStr.replace(replaceText, replaceText[1].toUpperCase());
    console.log(newStr);
  }
});
