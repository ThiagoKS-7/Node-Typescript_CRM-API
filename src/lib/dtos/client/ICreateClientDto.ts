interface ICreateClientDto {
    name: string; 
    email: string;
    phone: string;
    status: string;
    address: any;
    agentId: string | null;
}

export { ICreateClientDto }