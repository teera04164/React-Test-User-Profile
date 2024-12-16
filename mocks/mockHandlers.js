import { rest } from 'msw';

export const handlers = [
  rest.get('https://api.example.com/users/:id', (req, res, ctx) => {
    const { id } = req.params;
    if (id === '123') {
      return res(
        ctx.status(200),
        ctx.json({ id, name: 'John Doe', email: 'john.doe@example.com' })
      );
    }
    return res(
      ctx.status(500)
    );
  }),
];

