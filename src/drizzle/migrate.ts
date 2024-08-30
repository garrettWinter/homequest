import "dotenv/config";
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

// for migrations
const migrationClient = postgres(`${process.env.DATABASE_URL}?sslmode=require` as string, { max: 1 });

async function main() {
    await migrate(drizzle(migrationClient), {
        migrationsFolder: "./src/drizzle/migrations"
    })
    await migrationClient.end()
};

main();

// // for query purposes
// const queryClient = postgres("postgres://postgres:adminadmin@0.0.0.0:5432/db");
// const db = drizzle(queryClient);
// await db.select().from(...)...