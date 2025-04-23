/*
  165. Compare Version Numbers
  Compare two version numbers version1 and version2.
  If version1 > version2 return 1;
  if version1 < version2 return -1;
  otherwise return 0

  You may assume that the version strings are non-empty and contain only digits and the . character.
  The . character does not represent a decimal point and is used to separate number sequences.
  For instance, 2.5 is not "two and a half" of "half way to version three",
  it is the fifth second-level revision of the second first-level revision.
*/

export function compareVersion(version1: string, version2: string): number {
  if (version1 == null && version2 == null) {
    return 0;
  }
  if (version1 == null || version2 == null) {
    return version1 == null ? -1 : 1;
  }

  let list1 = version1.split(".");
  let list2 = version2.split(".");
  let i = 0;

  while (i < list1.length || i < list2.length) {
    let a = i < list1.length ? +list1[i] : 0;
    let b = i < list2.length ? +list2[i] : 0;
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }
    i++;
  }

  return 0;
}
