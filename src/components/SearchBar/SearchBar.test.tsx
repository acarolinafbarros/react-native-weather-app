import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { render } from '@testing-library/react-native';
import { SearchBar } from './SearchBar';

const SearchBarProps = {
  searchSubmit: jest.fn(),
  inputStatusError: false,
  inputMessageError: 'mock error',
};

describe('SearchBar', () => {
  let searchBar: HTMLElement;
  let searchInput: HTMLElement;
  let searchButton: HTMLElement;
  let searchError: HTMLElement;

  describe('when component is rendered', () => {
    describe('When all the props are provided', () => {
      beforeEach(() => {
        const { queryByTestId } = render(<SearchBar {...SearchBarProps} />);

        searchBar = queryByTestId('search-bar');
        searchInput = queryByTestId('search-input');
        searchButton = queryByTestId('search-button');
        searchError = queryByTestId('search-input-error');
      });

      it('should display the search bar container', () => {
        expect(searchBar).not.toBeNull();
      });

      it('should display the search input', () => {
        expect(searchInput).not.toBeNull();
      });

      it("should display the search button with the text equal to 'Search'", () => {
        expect(searchButton).toHaveTextContent('Search');
      });

      it('should not render the message input error', () => {
        expect(searchError).toBeNull();
      });
    });
  });
});
