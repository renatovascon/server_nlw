import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { db } from "../../db/connection.ts";
import { schema } from "../../db/schema/index.ts";
import { z } from "zod";

export const createQuestionRoute: FastifyPluginCallbackZod = (app) => {
    app.post("/rooms/:roomId/questions", {
        schema: {
            params: z.object({
                roomId: z.string()
            }),
            body: z.object({
                question: z.string().min(1),
            })
        }
    },
    async (request, reply) => {
        const { roomId } = request.params;
        const { question } = request.body;  
        const result = await db.insert(schema.questions).values({
            roomId,
            question,
            answer: "", // Provide a default or empty answer as required by your schema
        }).returning()
        const insertedQuestion = result[0]?.id;
        if(!insertedQuestion) {
            throw new Error("Failed to create question");
        }
        return reply.status(201).send({
            questionId: insertedQuestion
        })
    }
    );
}