CREATE TABLE IF NOT EXISTS "user_table" (
	"userId" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"username" varchar(255) NOT NULL,
	"dateCreated" timestamp DEFAULT now(),
	"lastUpdated" timestamp DEFAULT now()
);
