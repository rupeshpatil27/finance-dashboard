CREATE TABLE IF NOT EXISTS "categories" (
	"id" text PRIMARY KEY NOT NULL,
	"plainId" text,
	"name" text NOT NULL,
	"user_id" text NOT NULL
);
