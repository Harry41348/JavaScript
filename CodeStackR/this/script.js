'use strict';

function showFace() {
  return this.face;
}

const jeff = {
  face: '👽',
};

const showJeffsFace = showFace.bind(jeff);

// console.log(showJeffsFace());

showFace.call(jeff);
