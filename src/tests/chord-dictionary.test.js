import test from 'tape';
import React from 'react';
import reactDOMServer from 'react-dom/server';
import dom from 'cheerio';

const render = reactDOMServer.renderToString;

test('Chord dictionary component', nest => {
  nest.test('. render', assert => {
    const message = 'It should render the chord dictionary component.';
    const actual = null;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });
});