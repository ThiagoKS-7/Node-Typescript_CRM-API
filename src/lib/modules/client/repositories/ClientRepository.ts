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
    const waiting = await prisma.client.findMany({ 
      where: { status: "Aguardando atendimento"},       
      orderBy: {createdAt: 'desc',},
    });
    const inAttendence = await prisma.client.findMany({ where: { status: "Em atendimento"},
    orderBy: {createdAt: 'desc',},
  });
    const proposalMade =  await prisma.client.findMany({ where: { status: "Proposta feita"},
    orderBy: {createdAt: 'desc',},
  });
    const notCompleted =  await prisma.client.findMany({ where: { status: "Não concluído"},
    orderBy: {createdAt: 'desc',},
  });
    const sold =  await prisma.client.findMany({ where: { status: "Vendido"},
    orderBy: {createdAt: 'desc',},
  });
    return {
      waiting,
      inAttendence,
      proposalMade,
      notCompleted,
      sold,
    }
  }
  async findManyByAgentName(name:string): Promise<any> {
    const waiting = await prisma.client.findMany({ 
      where: { status: "Aguardando atendimento", agentName: name },       
      orderBy: {createdAt: 'desc',},
    });
    const inAttendence = await prisma.client.findMany({ 
      where: { status: "Em atendimento", agentName: name },
      orderBy: {createdAt: 'desc',},
    });
    const proposalMade =  await prisma.client.findMany({
      where: { status: "Proposta feita", agentName: name },
      orderBy: {createdAt: 'desc',},
    });
    const notCompleted =  await prisma.client.findMany({ 
      where: { status: "Não concluído", agentName: name },
      orderBy: {createdAt: 'desc',},
    });
    const sold =  await prisma.client.findMany({ 
      where: { status: "Vendido", agentName: name },
      orderBy: {createdAt: 'desc',},
    });

    return {
      waiting,
      inAttendence,
      proposalMade,
      notCompleted,
      sold,
    }
  }
  async findOne(id: string): Promise<Client> {
    const client = await prisma.client.findFirst({
      where: { id },
    });
    return client as Client;
  }
  async findByEmail(email: string): Promise<Client> {
    const client = await prisma.client.findFirst({
      where: { email },
    });
    return client as Client;
  }
  async update(id: string, {
    name,
    email,
    phone,
    address,
    status,
    agentName,
  }: ICreateClientDto): Promise<Client> {
    const Client = await prisma.client.update({
      where: {id},
      data: { name, email, phone, address, status, agentName },
    });
    return Client;
  }
  async updateStatus(id: string, status: string) {
    const Client = await prisma.client.update({
      where: {id},
      data: { status },
    });
    return Client;
  }
  async updateAgent(id: string, name: string) {
    const Client = await prisma.client.update({
      where: {id},
      data: { agentName: name },
    });
    return Client;
  }

  async delete(id: string) {
    const Client = await prisma.client.delete({
      where: {id}
    });
    return Client;
  }
}

export { ClientRepository };
