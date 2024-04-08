import { Hono } from 'hono'
import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/d1';

import { posts } from './db/schema';

export type Env = {
  MY_VAR: string;
  DB_BLOG: D1Database;
}

const api = new Hono<{ Bindings: Env }>();
api
  .get('/posts', async (c) => {
    const db = drizzle(c.env.DB_BLOG);
    const result = await db.select().from(posts).all();
    return c.json(result);
  })
  .get('/posts/:id', async (c) => {
    const db = drizzle(c.env.DB_BLOG);
    const id = Number(c.req.param('id'));
    const result = await db.select().from(posts).where(eq(posts.id, id));
    return c.json(result);
  })
  .post('/posts', async (c) => {
    const db = drizzle(c.env.DB_BLOG);
    const { id, title, description, url, published, comments } = await c.req.json();
    const result = await db.insert(posts)
      .values({ id, title, description, url, published, comments })
      .returning();
    return c.json(result);
  });

const app = new Hono();
app.route('/api', api);

export default app;