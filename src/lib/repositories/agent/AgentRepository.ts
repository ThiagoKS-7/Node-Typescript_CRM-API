
import prisma from "../../../prisma"
import { Agent } from "@prisma/client";
import { ICreateAgentDto } from "../../dtos/agent/ICreateAgentDto";
import { IAgentRepository } from "./IAgentRepository";

class AgentRepository implements IAgentRepository {
    async findMany(): Promise<any> {
        const agents = await prisma.agent.findMany();
        return agents;
    }
    async create({ name, password, clients }: ICreateAgentDto): Promise<Agent> {
        const agent = await prisma.agent.create({data: {name, password, clients: clients}});
        return agent;
    }

}

export { AgentRepository }