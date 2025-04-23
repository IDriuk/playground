/* 
  71. Simplify Path
  Given an absolute path for a file (Unix-style), simplify it.

  In a Unix-style file system, a period ('.') refers to the current directory, so it can be ignored in a simplified path.
  Additionally, a double period ("..") moves up a directory, so it cancels out whatever the last directory was.
*/

export function simplifyPath(s: string): string {
  if (s == null || s.length == 0) {
    return "";
  }

  let dirs = s.split("/").filter((d) => d.length > 0 && d != ".");
  let q: string[] = [];

  for (let d of dirs) {
    if (d == "..") {
      q.pop();
      continue;
    }
    q.push(d);
  }

  if (q.length == 0) {
    return "/";
  }

  return `/${q.join("/")}`;
}
