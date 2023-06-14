import { Agent } from "@prisma/client"
import { ICreateAgentDto } from "../../dtos/agent/ICreateAgentDto"

interface IAgentRepository {
    create({name, password, clients}: ICreateAgentDto): Promise<Agent>
    findMany(): Promise<Agent[]>
}

export {IAgentRepository}