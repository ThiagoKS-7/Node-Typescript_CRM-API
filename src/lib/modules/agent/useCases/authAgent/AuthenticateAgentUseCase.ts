import * as fs from "fs";
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
    const privateKey = fs.readFileSync(
      "/home/thiago/node/crm-api/private.pem",
      "utf8"
    );

    const signInOptions: SignOptions = {
      // RS256 uses a public/private key pair. The API provides the private key
      // to generate the JWT. The client gets a public key to validate the
      // signature
      algorithm: "RS256",
      expiresIn: "1h",
    };
    return sign(payload, privateKey, signInOptions);
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

    const token = this.generateToken(agent);
    return token;
  }
}

export { AuthenticateAgentUseCase };
