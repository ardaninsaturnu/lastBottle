export function removeValue(value, index, arr) {
  // If the value at the current array index matches the specified value (2)
  if (value === 2) {
    // Removes the value from the original array
    arr.splice(index, 1);
    return true;
  }
  return false;
}
