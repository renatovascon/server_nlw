
import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";
import { rooms } from "./rooms.ts";

export const questions = pgTable("questions", {
    id: uuid().primaryKey().defaultRandom(),
    roomId: uuid().references(() => rooms.id).notNull(), //cria uma chave estrangeira para a tabela rooms
    question: text().notNull(),
    answer: text().notNull(),
    createdAt: timestamp().defaultNow().notNull(),
 })