/* 
  388. Longest Absolute File Path
  Suppose we abstract our file system by a string in the following manner:
  The string "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext" represents:
  dir 
    subdir1
    subdir2
      file.ext
  The diretory dir contains an empty sub-directory subdir1 and a sub-directory subdir2 containing a file.ext.
  .......
*/

export function lengthLongestPath(input: string) {
  let stack: number[] = [];
  stack.push(0);
  let files = input.split("\n");
  let max = 0;
  for (let f of files) {
    let level = f.lastIndexOf("\t") + 1;
    while (stack.length > level + 1) {
      stack.pop();
    }
    let len = stack[stack.length - 1] + f.length - level + 1;
    stack.push(len);
    if (f.includes(".")) {
      max = Math.max(max, len - 1);
    }
  }
  return max;
}
