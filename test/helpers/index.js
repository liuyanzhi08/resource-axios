import sinon from 'sinon';

let server;
const beforeHook = () => {
  server = sinon.createFakeServer();
  // get
  server.respondWith('GET', '/1', [
    200,
    { 'Content-Type': 'application/json' },
    '{ "id": 1, "name": "book 1" }',
  ]);
  // query
  server.respondWith('GET', '/?name=1', [
    200,
    { 'Content-Type': 'application/json' },
    '[{ "id": 1, "name": "book 1" }]',
  ]);
  // create
  server.respondWith('POST', '/1', [
    200,
    { 'Content-Type': 'application/json' },
    '{ "id": 1, "name": "book 1" }',
  ]);
  // update
  server.respondWith('UPDATE', '/1', [
    200,
    { 'Content-Type': 'application/json' },
    '{ "id": 1, "name": "book 1" }',
  ]);
  // delete
  server.respondWith('DELETE', '/1', [
    200,
    { 'Content-Type': 'application/json' },
    '{ "id": 1, "name": "book 1" }',
  ]);
};

const afterHook = () => {
  server.restore();
};

const makeSuite = (desc, behave) => {
  describe(desc, () => {
    before(beforeHook);
    behave();
    after(afterHook);
  });
}

export default makeSuite;
