const test = require("node:test");
const assert = require("node:assert");
const app = require("./server");

test("rota / responde 200", async () => {
  const server = app.listen(0);
  try {
    const { port } = server.address();
    const res = await fetch(`http://localhost:${port}/`);
    assert.strictEqual(res.status, 200);
  } finally {
    server.close();
  }
});

test("rota /health responde ok", async () => {
  const server = app.listen(0);
  try {
    const { port } = server.address();
    const res = await fetch(`http://localhost:${port}/health`);
    const body = await res.json();
    assert.strictEqual(body.status, "ok");
  } finally {
    server.close();
  }
});
