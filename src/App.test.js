import React from 'react';

import App from './App';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';



describe('<App />', () => {
 
  
 
  it('renders without crashing', () => {
    render(<App />);
    cleanup();
  })

  it('renders "Hello World"', () => {
    const { getByText } = render(<App />);

    const text = getByText(/hello world/i);

    expect(text).toBeInTheDocument();
    cleanup();
  })

  it('greets the team', () => {
    const { getByText } = render(<App />);

    const greetButton = getByText(/greet/i);

    fireEvent.click(greetButton)

    getByText(/hello web students/i);
  })

});




