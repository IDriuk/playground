/*
  291. Word Pattern II
  Given a pattern and a string str, find if str follows the same pattern.
  Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty substring in str.
*/

export function wordPattern2(pattern: string, str: string) {
  let map = new Map<string, string>();
  let set = new Set<string>();

  return match(pattern, str);

  function match(pattern: string, str: string) {
    if (pattern.length == 0) {
      return str.length == 0;
    }
    if (map.has(pattern.charAt(0))) {
      let value = map.get(pattern.charAt(0))!;
      if (
        str.length < value.length ||
        str.substring(0, value.length) != value
      ) {
        return false;
      }
      if (match(pattern.substring(1), str.substring(value.length))) {
        return true;
      }
    } else {
      for (let i = 1; i <= str.length; i++) {
        if (set.has(str.substring(0, i))) {
          continue;
        }
        map.set(pattern.charAt(0), str.substring(0, i));
        set.add(str.substring(0, i));
        if (match(pattern.substring(1), str.substring(i))) {
          return true;
        }
        set.delete(str.substring(0, i));
        map.delete(pattern.charAt(0));
      }
    }

    return false;
  }
}
