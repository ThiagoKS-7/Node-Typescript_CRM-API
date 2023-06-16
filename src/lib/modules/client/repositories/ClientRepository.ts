import prisma from "../../../../prisma";
import { Client } from "@prisma/client";
import { ICreateClientDto } from "../dtos/ICreateClientDto";
import { IClientRepository } from "./IClientRepository";

class ClientRepository implements IClientRepository {
  private static _instance: ClientRepository;

  private constructor() {}

  static getInstance() {
    if (this._instance) {
      return this._instance;
    }

    this._instance = new ClientRepository();
    return this._instance;
  }
  async create({
    name,
    email,
    phone,
    address,
    status,
    agentName,
  }: ICreateClientDto): Promise<Client> {
    const Client = await prisma.client.create({
      data: { name, email, phone, address, status, agentName },
    });
    return Client;
  }
  async findMany(): Promise<any> {
    const waiting = await prisma.client.findMany({ where: { status: "Aguardando atendimento"}});
    const inAttendence = await prisma.client.findMany({ where: { status: "Em atendimento"}});
    const proposalMade =  await prisma.client.findMany({ where: { status: "Proposta feita"}});
    const notCompleted =  await prisma.client.findMany({ where: { status: "Não concluído"}});
    const sold =  await prisma.client.findMany({ where: { status: "Vendido"}});
    return {
      waiting,
      inAttendence,
      proposalMade,
      notCompleted,
      sold,
    }
  }
  async findByEmail(email: string): Promise<Client> {
    const client = await prisma.client.findFirst({
      where: { email },
    });
    return client as Client;
  }
  async findByAgentName(name: string): Promise<Client[]> {
    const client = await prisma.client.findMany({
      where: {
        agentName: name,
      },
    });
    return client as Client[];
  }
}

export { ClientRepository };
