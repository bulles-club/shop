export function merge(array1, array2) {
  return array1
    .concat(array2)
    .sort()
    .filter((item, pos, ary) => !pos || item !== ary[pos - 1]);
}
