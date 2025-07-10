import fastify from "fastify";
import { sql } from "./db/connection.ts";
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from "fastify-type-provider-zod";
import fastifyCors from "@fastify/cors";
import { env } from "./env.ts";
import { getRoomsRoute } from "./http/routes/get-rooms.ts";
import { createRoomsRoute } from "./http/routes/create-room.ts";
import { getRoomsQuestions } from "./http/routes/get-rooms-questions.ts";
import { createQuestionRoute } from "./http/routes/create-questions.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
    origin: "http://localhost:5173",
    });

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.get("/health", () => {
    return "OK";
});

app.register(getRoomsRoute);
app.register(createRoomsRoute)
app.register(getRoomsQuestions)
app.register(createQuestionRoute);
app.listen({port: env.PORT})