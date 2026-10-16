const test = require('node:test');
const assert = require('node:assert');
const http = require('node:http');
const app = require('../src/app');

let server;
let baseUrl;

test.before(async () => {
  await new Promise((resolve) => {
    server = http.createServer(app);
    server.listen(0, () => {
      const port = server.address().port;
      baseUrl = `http://localhost:${port}`;
      resolve();
    });
  });
});

test.after(async () => {
  await new Promise((resolve) => server.close(resolve));
});

test('🧪 TEST 1: GET /api/tasks returns HTTP 200 and task array', async () => {
  const res = await fetch(`${baseUrl}/api/tasks`);
  assert.strictEqual(res.status, 200, 'Expected status code 200');
  const body = await res.json();
  assert.strictEqual(body.success, true);
  assert.ok(Array.isArray(body.tasks), 'tasks should be an array');
  assert.ok(body.tasks.length >= 1, 'tasks should contain seeded records');
});

test('🧪 TEST 2: POST /api/tasks creates task with HTTP 201 Created', async () => {
  const payload = { title: 'Automated GitHub Actions Verification Task', priority: 'Critical' };
  const res = await fetch(`${baseUrl}/api/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  assert.strictEqual(res.status, 201, 'Expected status code 201 Created');
  const body = await res.json();
  assert.strictEqual(body.success, true);
  assert.strictEqual(body.task.title, payload.title);
  assert.strictEqual(body.task.priority, payload.priority);
});

test('🧪 TEST 3: POST /api/tasks with empty title returns HTTP 400 Bad Request', async () => {
  const res = await fetch(`${baseUrl}/api/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: '' })
  });

  assert.strictEqual(res.status, 400, 'Expected status code 400 for validation failure');
  const body = await res.json();
  assert.strictEqual(body.success, false);
});
