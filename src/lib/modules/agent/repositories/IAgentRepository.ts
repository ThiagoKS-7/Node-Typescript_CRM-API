import { Agent } from "@prisma/client";
import { ICreateAgentDto } from "../dtos/ICreateAgentDto";

interface IAgentRepository {
  create({ name, password, clients }: ICreateAgentDto): Promise<Agent>;
  findMany(): Promise<Agent[]>;
  findByName(name: string): Promise<Agent[]>;
}

export { IAgentRepository };
