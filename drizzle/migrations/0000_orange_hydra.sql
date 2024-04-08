CREATE TABLE `github_projects` (
	`repo_name` text PRIMARY KEY NOT NULL,
	`repo_url` text NOT NULL,
	`description` text,
	`timestamp` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `posts` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`published` text(256),
	`comments` integer,
	`url` text NOT NULL,
	`timestamp` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `premiums` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`url` text NOT NULL,
	`url_demo` text NOT NULL,
	`description` text,
	`timestamp` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
