export function navbar(location) {
  // The navbar is always active
  return true;
}

export function people(location) {
  return location.pathname.startsWith("/people");
}

export function planets(location) {
  return location.pathname.startsWith("/planets");
}

export function cars(location) {
  return location.pathname.startsWith("/cars");
}

export function detail(location) {
  return location.pathname.startsWith("/detail");
}
