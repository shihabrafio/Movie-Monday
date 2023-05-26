import allcomment from '../module/commentcounter.js';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(
    [
      {
        username: 'Rafio',
        creation_date: '2023-05-24',
        comment: 'How are you',
      },
      {
        creation_date: '2025-08-11',
        username: 'Xavi',
        comment: 'Yes Daddy',
      },
      {
        creation_date: '2027-01-02',
        username: 'Derick',
      },
    ],
  ),
}));
describe('comment counter tests using Jest', () => {
  test('test Comment Count ', async () => {
    const response = await allcomment(3);
    expect(response.length).toBe(3);
  });
  test('Wrong test Comment Count', async () => {
    const response = await allcomment(3);
    expect(response.length).not.toBe(1);
  });
});