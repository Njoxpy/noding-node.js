// create function to notify user
let username = "Njox"; // variable acts like implementation detail

function notifyUser(user) {
  return `hello ${user}`;
}

module.exports.notifyUser = notifyUser;
