import { expect } from 'chai';
import { render } from '@testing-library/react';
import SimpleComponent from './SimpleComponent';

describe('SimpleComponent', () => {
  it('should render hello world', () => {
    const { getByText } = render(<SimpleComponent />);
    expect(getByText('Hello, world!')).to.exist;
  });
});
