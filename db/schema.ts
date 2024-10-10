import { pgTable, serial, varchar, text } from 'drizzle-orm/pg-core';

// Define the 'contests' table
export const contests = pgTable('contests', {
  id: serial('id').primaryKey(),
  category: varchar('category', { length: 255 }).notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description').notNull(),
  prize: varchar('prize', { length: 50 }).notNull(),
});

// Define the 'users' table schema
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  clerkId: varchar('clerk_id', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  username: varchar('username', { length: 255 }).notNull(),
});
