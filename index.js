const assert = require("assert");

/**
 * Given a music return a score based on the singer performance.
 * @param {string} music
 */
function byCCR(music) {
  // How you get this score.
  return 100;
}

function byRacyneRafael(music) {
  return 50;
}

function singSong(singer) {
  return singer;
}

// Given
let singByCCR = singSong(byCCR); // Your contract

// When
let score = singByCCR("Have You ever seen the Rain");

// Then
assert.equal(score > 50, true, "Bad singer");
