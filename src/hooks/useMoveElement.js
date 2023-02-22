import { useState } from 'react';

export function useMoveElement(initialPosition) {
  const [position, setPosition] = useState(initialPosition);
  
  function moveElement(direction) {
    // Get the current position of the element
    const currentPosition = position;
    let newPosition;
    
    // Move the element based on the direction
    switch (direction) {
      case 'north':
        newPosition = currentPosition - 42;
        break;
      case 'south':
        newPosition = currentPosition + 42;
        break;
      case 'east':
        newPosition = currentPosition + 1;
        if (newPosition % 42 === 0) {
          newPosition -= 42;
        }
        break;
      case 'west':
        newPosition = currentPosition - 1;
        if ((newPosition + 1) % 42 === 0) {
          newPosition += 42;
        }
        break;
      case 'northwest':
        newPosition = currentPosition - 43;
        if ((newPosition + 1) % 42 === 0) {
          newPosition += 42;
        }
        break;
      case 'northeast':
        newPosition = currentPosition - 41;
        if (newPosition % 42 === 0) {
          newPosition -= 42;
        }
        break;
      case 'southwest':
        newPosition = currentPosition + 41;
        if ((newPosition + 1) % 42 === 0) {
          newPosition -= 42;
        }
        break;
      case 'southeast':
        newPosition = currentPosition + 43;
        if (newPosition % 42 === 0) {
          newPosition -= 42;
        }
        break;
      default:
        break;
    }
    
    // Check if the element is at column 42 and move to column 1 if necessary
    if (currentPosition % 42 === 41 && direction === 'east') {
      newPosition -= 41;
    }
    
    // Update the element position
    setPosition(newPosition);
  }
  
  return [position, moveElement];
}
