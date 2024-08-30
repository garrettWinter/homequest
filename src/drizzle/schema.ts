import { pgTable, uuid, varchar, timestamp } from "drizzle-orm/pg-core"
export const UserTable = pgTable("user_table", {
    userId: uuid("userId").primaryKey().defaultRandom(),
    username: varchar("username", { length: 255 }).notNull(),
    dateCreated: timestamp("dateCreated").defaultNow(),
    lastUpdated: timestamp("lastUpdated").defaultNow(),
});