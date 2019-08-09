const haiku = require("./haiku");

const users = {};

// Random ID until the ID is not in use
async function randomId() {
  let id = haiku();
  while (id in users) {
    await Promise.delay(5);
    id = haiku();
  }
  return id;
}

exports.create = async socket => {
  const id = await randomId();
  users[id] = socket;
  return id;
};

exports.get = id => users[id];

exports.remove = id => delete users[id];
