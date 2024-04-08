import { sql } from 'drizzle-orm';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const posts = sqliteTable('posts', {
    // id is set on insert, incrementing
    id: integer('id').primaryKey({ autoIncrement: false }),

    // title of the blog post
    title: text('title').notNull(),

    // content of the blog post
    description: text('description').notNull(),

    published: text('published', { length: 256 }),

    comments: integer('comments'),

    url: text('url').notNull(),

    // timestamp is set on insert
    timestamp: text('timestamp')
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
});

export const github_projects = sqliteTable('github_projects', {


    repo_name: text('repo_name').primaryKey(),

    repo_url: text('repo_url').notNull(),

    description: text('description'),

    // timestamp is set on insert
    timestamp: text('timestamp')
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
});

export const premiums = sqliteTable('premiums', {

    id: integer('id').primaryKey({ autoIncrement: true }),

    name: text('name'),

    url: text('url').notNull(),

    url_demo: text('url_demo').notNull(),

    description: text('description'),

    // timestamp is set on insert
    timestamp: text('timestamp')
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
});