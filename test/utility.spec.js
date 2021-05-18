import { jest } from '@jest/globals';
import * as utility from '../src/utility';

describe('toggleShowElement', () => {
  const mockElement = {
    classList: {
      toggle: jest.fn(),
    },
  };

  it('should call toggle with "hide"', () => {
    utility.toggleShowElement(mockElement);
    expect(mockElement.classList.toggle).toBeCalledWith('hide');
  });
});