import { pgTable, uuid, varchar, timestamp, integer, smallint, date } from "drizzle-orm/pg-core";

export const UserTable = pgTable("user_table", {
    userId: uuid("user_id").primaryKey().defaultRandom(),
    username: varchar("username", { length: 255 }).notNull(),
    dateCreated: timestamp("date_created").defaultNow(),
    lastUpdated: timestamp("last_updated").defaultNow(),
});

export const ListTable = pgTable("list_table", {
    listId: uuid("list_id").primaryKey(),
    listName: varchar("list_name", {length: 255})
});

export const TaskTable = pgTable("task_table", {
    taskId: uuid("task_id").primaryKey().defaultRandom(),
    taskName: varchar("task_name").notNull(), ///// SHould this have a set max length?
    listId: varchar("list_id").notNull(), //// This should be updated to a array of varchars
    taskRank: smallint("task_rank"),
    taskStatus: varchar("task_status"),
    assignee: varchar("assignee"), //// Change into a array
    dueDate: date("due_date"),
    dateCreated: timestamp("date_created").defaultNow(),
    lastUpdated: timestamp("last_updated").defaultNow(),
});