import { render, screen } from '@testing-library/react';
import Renderer from 'react-test-renderer';
import Quotes from '../Quotes';
import '@testing-library/jest-dom';

describe('Home component', () => {
  test('Home Component is rendered', () => {
    render(<Quotes />);
    const cont = screen.getByText(/Where can I get some/);
    expect(cont).toBeInTheDocument();
  });

  test('Matches Snapshots', () => {
    const domTree = Renderer.create(<Quotes />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});
