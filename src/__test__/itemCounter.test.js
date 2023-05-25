import { allShows } from '../module/itemCounter.js';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(
    [
      {
        show: {
          id: 479,
          url: 'https://www.tvmaze.com/shows/83/the-simpsons',
          name: 'Hommer',
          type: 'Scripted',
          language: 'English',
        },
      },
      {
        show: {
          id: 694,
          url: 'https://www.tvmaze.com/shows/46562/the-last-of-us',
          name: 'Joel',
          type: 'Scripted',
          language: 'English',
        },
      },
    ],
  ),
}));

describe('items counter tests using Jest', () => {
  test('items count ', async () => {
    const response = await allShows();

    expect(response).toBe(2);
  });
});