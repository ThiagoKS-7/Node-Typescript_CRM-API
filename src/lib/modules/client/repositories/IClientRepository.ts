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
  findOne(id: string): Promise<Client>;
  findByEmail(email: string): Promise<Client>;
  findManyByAgentName(name:string): Promise<Client[]>;
  update( id: string,{
    name,
    email,
    phone,
    address,
    status,
    agentName,
  }: ICreateClientDto): Promise<Client>;
  updateStatus( id: string, status: string): Promise<Client>;
  updateAgent( id: string, name: string): Promise<Client>;
  delete( id: string): Promise<Client>;
}

export { IClientRepository };
