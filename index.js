const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}
function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}
function destructivelyRemoveFirstDriver() {
  drivers.shift();
}
function destructivelyRemoveLastDriver() {
  drivers.pop()
}
function appendDriver(name) {
  return [...drivers, name]
}
function prependDriver(name) {
  return [name, ...drivers]
}
function removeLastDriver() {
  return drivers.slice(0, 2);
}
function removeFirstDriver() {
  return drivers.slice(1, 3);
}
