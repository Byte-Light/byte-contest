import { pgTable, serial, varchar, text } from 'drizzle-orm/pg-core';

// Define the 'contests' table
export const contests = pgTable('contests', {
  id: serial('id').primaryKey(),
  category: varchar('category', { length: 255 }).notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description').notNull(),
  prize: varchar('prize', { length: 50 }).notNull(),
});

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull(),
  password: varchar('password', { length: 255 }).notNull(),
  name: varchar('name', { length: 100 }).notNull(),
});
