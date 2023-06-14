
import prisma from "../../../prisma"
import { Client } from "@prisma/client";
import { ICreateClientDto } from "../../dtos/client/ICreateClientDto";
import { IClientRepository } from "./IClientRepository";

class ClientRepository implements IClientRepository {
    async findMany(): Promise<any> {
        const Clients = await prisma.client.findMany();
        return Clients;
    }
    async create({name, email, phone, address, status, agentId}: ICreateClientDto): Promise<Client> {
        const Client = await prisma.client.create({data: {name, email, phone, address, status, agentId}});
        return Client;
    }

}

export { ClientRepository }