interface ICreateClientDto {
  name: string;
  email: string;
  phone: string;
  status: string;
  address: any;
  agentName: string | null;
}

export { ICreateClientDto };
