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

// test for Quotes component
describe('Quotes component', () => {
  test('Quotes Component is rendered', () => {
    render(<Quotes />);
    const heading = screen.getByText(/Where can I get some/);
    expect(heading).toBeInTheDocument();
  });

  test('Matches Snapshots', () => {
    const domTree = Renderer.create(<Quotes />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});

// test for calculator component
describe('Calculator component', () => {
  test('Calculator Component is rendered', () => {
    render(<Calculator />);

    // Arrange
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    const result = screen.getByTestId('total');

    // / Assert
    expect(result).toHaveTextContent('15');
  });

  test('Matches Snapshots', () => {
    const domTree = Renderer.create(<Calculator />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});