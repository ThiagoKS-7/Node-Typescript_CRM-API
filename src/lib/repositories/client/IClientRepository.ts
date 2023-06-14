import { Client } from "@prisma/client"
import { ICreateClientDto } from "../../dtos/client/ICreateClientDto"

interface IClientRepository {
    create({name, email, phone, address, status, agentId}: ICreateClientDto): Promise<Client>
    findMany(): Promise<Client[]>
}

export {IClientRepository}