import * as fs from "fs";
import path from "path";
import { compare } from "bcrypt";
import { sign, SignOptions } from "jsonwebtoken";
import { AgentRepository } from "../../repositories/AgentRepository";
import { IAgentRepository } from "../../repositories/IAgentRepository";

class AuthenticateAgentUseCase {
  constructor(
    private agentRepository: IAgentRepository = AgentRepository.getInstance()
  ) {
    this.agentRepository = agentRepository;
  }

  async generateToken(agent: any) {
    const payload = {
      id: agent.id,
      name: agent.name,
    };

    const signInOptions: SignOptions = {
      expiresIn: "1h",
    };
    return sign(payload, process.env.JWT_SECRET as string, signInOptions);
  }

  async execute(name: string, password: string) {
    const agent = await this.agentRepository.findOneByName(name);
    if (!agent) {
      return "Invalid email or password! Check your payload and try again.";
    }
    const passwordMatch = await compare(password, agent.password);
    if (!passwordMatch) {
      return "Invalid email or password! Check your payload and try again.";
    }

    const token = await this.generateToken(agent);
    return { data: token };
  }
}

export { AuthenticateAgentUseCase };
