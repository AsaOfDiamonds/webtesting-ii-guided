import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';


import Players from './Players';

describe('<Players />', () => {
  it('should render "No players available" when no players passed in from props', () => {
    const { getByText } = render(<Players />);

    getByText(/no players/i);
    cleanup();
  })

  it('should render "No players available" when no players provided', () => {
    const { queryByText } = render(<Players />);

    // queryByText will return null, but it won't fail the test
    // so we need to do an assertion
    expect(queryByText(/no players/i)).not.toBeNull();
    expect(queryByText(/no players/i)).toBeInTheDocument();
    cleanup();
  })

  it('should render the provided list of players', () => {
    const players = [
      { id: 1, name: 'Anna' },
      { id: 1, name: 'Jen' },
      { id: 1, name: 'Sarah' },
      { id: 1, name: 'Pat' }
    ]

    // uses the data-testid property
    const { getAllByTestId } = render(<Players players={players} 
      />);

    const playerNames = getAllByTestId('player-name').map(name =>
      name.textContent); // playerNames looks like ['Anna', 'Jen', 'Sarah', 'Pat']
      
      expect(playerNames).toHaveLength(players.length);

      const names = players.map(players => players.name) // array of names passed in

      expect(playerNames).toEqual(names);
    cleanup();
  })

})




