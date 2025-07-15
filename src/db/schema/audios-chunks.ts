
import { pgTable, uuid, text, timestamp, vector } from "drizzle-orm/pg-core";
import { rooms } from "./rooms.ts";

export const audioChunks = pgTable("audio_chunks", {
    id: uuid().primaryKey().defaultRandom(),
    roomId: uuid().references(() => rooms.id).notNull(), //cria uma chave estrangeira para a tabela rooms
    transcription: text().notNull(),
    embeddings: vector({ dimensions: 768 }).notNull(), // Assuming embeddings is a vector type
    createdAt: timestamp().defaultNow().notNull(),
 })