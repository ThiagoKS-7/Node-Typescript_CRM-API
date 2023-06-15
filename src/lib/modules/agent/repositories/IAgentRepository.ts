import { Agent } from "@prisma/client";
import { ICreateAgentDto } from "../dtos/ICreateAgentDto";

interface IAgentRepository {
  create({ name, password, clients }: ICreateAgentDto): Promise<Agent>;
  findMany(): Promise<Agent[]>;
  findOneByName(name: string): Promise<Agent | null>;
  findOneById(id: string): Promise<Agent | null>;
}

export { IAgentRepository };
