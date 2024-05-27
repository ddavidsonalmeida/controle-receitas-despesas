export interface Transacao{
    cliente_id: string;
    id: string;
    descricao: string;
    tipo: string;
    categoria: string,
    valor: number;
    data: Date;
}