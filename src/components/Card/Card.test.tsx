import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { render } from '@testing-library/react-native';
import { Card } from './Card';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const CardProps = {
  weatherData: {
    cityId: 2,
    country: 'PT',
    date: '8 Out 2021',
    description: 'sunny',
    icon: '05c',
    name: 'Porto',
    temperature: '27.5',
    temperatureMax: '30.0',
    temperatureMin: '26.3',
  },
  forecastData: [
    {
      date: '9 Out 2021',
      id: 2,
      temperature: '30.0',
    },
  ],
  isFavorite: false,
  addFavoriteCb: jest.fn(),
  removeFavoriteCb: jest.fn(),
};

describe('Card', () => {
  let card: HTMLElement;
  let cardAddIcon: HTMLElement;
  let cardTrashIcon: HTMLElement;
  let cardName: HTMLElement;
  let cardDate: HTMLElement;
  let cardDescription: HTMLElement;
  let cardTemperature: HTMLElement;
  let cardTemperatureMaxMin: HTMLElement;

  describe('when component is rendered', () => {
    describe('When all the props are provided and the card is not favorite', () => {
      beforeEach(() => {
        const { queryByTestId } = render(<Card {...CardProps} />);

        card = queryByTestId('card');
        cardAddIcon = queryByTestId('card-add-icon');
        cardTrashIcon = queryByTestId('card-trash-icon');
        cardName = queryByTestId('card-name');
        cardDate = queryByTestId('card-date');
        cardDescription = queryByTestId('card-description');
        cardTemperature = queryByTestId('card-temperature');
        cardTemperatureMaxMin = queryByTestId('card-temperature-max-min');
      });

      it('should display the card container', () => {
        expect(card).not.toBeNull();
      });

      it('should display the add icon button', () => {
        expect(cardAddIcon).not.toBeNull();
      });

      it('should not display the remove icon button', () => {
        expect(cardTrashIcon).toBeNull();
      });

      it("should display the card name equal to 'Porto (PT)'", () => {
        expect(cardName).toHaveTextContent('Porto (PT)');
      });

      it("should display the card date equal to '8 Out 2021'", () => {
        expect(cardDate).toHaveTextContent('8 Out 2021');
      });

      it("should display the card description equal to 'sunny'", () => {
        expect(cardDescription).toHaveTextContent('sunny');
      });

      it("should display the card temperature equal to '27.5'", () => {
        expect(cardTemperature).toHaveTextContent('27.5');
      });

      it("should display the card temperature max and min equal to 'Máx. 30.0ºC Min. 26.3ºC'", () => {
        expect(cardTemperatureMaxMin).toHaveTextContent(
          'Máx. 30.0ºC Min. 26.3ºC',
        );
      });
    });
  });
});
