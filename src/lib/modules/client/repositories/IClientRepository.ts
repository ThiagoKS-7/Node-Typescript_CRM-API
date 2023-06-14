import { Client } from "@prisma/client";
import { ICreateClientDto } from "../dtos/ICreateClientDto";

interface IClientRepository {
  create({
    name,
    email,
    phone,
    address,
    status,
    agentName,
  }: ICreateClientDto): Promise<Client>;
  findMany(): Promise<Client[]>;
  findByEmail(email: string): Promise<Client>;
  findByAgentName(email: string): Promise<Client[]>;
}

export { IClientRepository };
