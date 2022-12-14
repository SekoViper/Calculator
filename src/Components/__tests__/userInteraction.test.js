import { render, screen, fireEvent } from '@testing-library/react';
import Renderer from 'react-test-renderer';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from '@remix-run/router';
import Home from '../Home';
import Quotes from '../Quotes';
import Calculator from '../Calculator';
import '@testing-library/jest-dom';
import App from '../../App';

// test for home component
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

