import prisma from "../../../../prisma";
import { Agent } from "@prisma/client";
import { ICreateAgentDto } from "../dtos/ICreateAgentDto";
import { IAgentRepository } from "./IAgentRepository";

class AgentRepository implements IAgentRepository {
  private static _instance: AgentRepository;

  private constructor() {}

  static getInstance() {
    if (this._instance) {
      return this._instance;
    }

    this._instance = new AgentRepository();
    return this._instance;
  }
  async create({ name, password, clients }: ICreateAgentDto): Promise<Agent> {
    const agent = await prisma.agent.create({
      data: { name, password, clients },
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
  async findOneById(id: string): Promise<Agent | null> {
    if (!id) {
      return null;
    }
    const agent = await prisma.agent.findUnique({ where: { id: id } });
    return agent;
  }
  async updateClient(id: string, clients:any) :  Promise<Agent | null>{
    if (!id) {
      return null;
    }
    const agent = await prisma.agent.update({ where: { id}, data: { clients}} );
    return agent;
  }
}

export { AgentRepository };
