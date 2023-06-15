import * as fs from "fs";
import { verify } from "jsonwebtoken";
import { Agent } from "@prisma/client";
import { EnsureAuthAgentUseCase } from "../lib/modules/agent/useCases/ensureAuthAgent/EnsureAuthAgentUseCase";
import path from "path";

interface IPayload {
  id: string;
  name: string;
}

export async function ensureAuthenticated(request: any, reply: any) {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    return reply.status(401).send({
      statusCode: 401,
      error: "Unauthorized",
      message: "Authentication failed: token not found",
    });
  }
  const [, token] = authHeader.split(" ");
  const secret = process.env.JWT_SECRET;
  const { id, name } = (await verify(token, secret as string )) as IPayload;
  const usecase = new EnsureAuthAgentUseCase();
  const response = await usecase.execute(id);
  if (typeof response != "object") {
    return reply.status(401).send({
      statusCode: 401,
      error: "Unauthorized",
      message: "Invalid token. Check your auth headers and try again.",
    });
  }
}
