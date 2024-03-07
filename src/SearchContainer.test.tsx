// SearchContainer.test.tsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios'; // Mock this module if needed
import SearchContainer from './components/SearchContainer';
jest.mock('axios');

test('SearchContainer renders and fetches results', async () => {
  const mockResults = ['Result 1', 'Result 2'];
  (axios.get as jest.Mock).mockResolvedValue({ data: { results: mockResults } });


  render(<SearchContainer />);

  const searchInput = screen.getByPlaceholderText('Search...');
  fireEvent.change(searchInput, { target: { value: 'test' } });

  await waitFor(() => {
    // expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('https://api.publicapis.org/entries?q=test');
    // expect(screen.getByText('Result 1')).toBeInTheDocument();
    // expect(screen.getByText('Result 2')).toBeInTheDocument();
  });
});
