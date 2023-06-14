import prisma from "../../../../prisma";
import { Agent } from "@prisma/client";
import { ICreateAgentDto } from "../dtos/ICreateAgentDto";
import { IAgentRepository } from "./IAgentRepository";

class AgentRepository implements IAgentRepository {
  async create({ name, password, clients }: ICreateAgentDto): Promise<Agent> {
    const agent = await prisma.agent.create({
      data: { name, password, clients: clients },
    });
    return agent;
  }
  async findMany(): Promise<Agent[]> {
    const agents: Agent[] = await prisma.agent.findMany();
    return agents;
  }
  async findOneByName(name: string): Promise<Agent | null> {
    const agent = await prisma.agent.findFirst({ where: { name } });
    return agent;
  }
}

export { AgentRepository };
