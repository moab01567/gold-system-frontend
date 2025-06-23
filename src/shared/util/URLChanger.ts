

export function ChangeUrlPath(path: string) {
  window.history.replaceState("", "", window.location.origin + path);
}

