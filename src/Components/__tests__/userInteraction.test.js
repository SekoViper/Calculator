import { render, screen } from '@testing-library/react';
import Renderer from 'react-test-renderer';
import Home from '../Home';
import '@testing-library/jest-dom';

describe('Home component', () => {
  test('Home Component is rendered', () => {
    render(<Home />);
    const cont = screen.getByText(/Welcome/);
    expect(cont).toBeInTheDocument();
  });

  test('Matches Snapshots', () => {
    const domTree = Renderer.create(<Home />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});
