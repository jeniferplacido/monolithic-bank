// Importa o decorador Injectable do pacote @nestjs/common, que permite a injeção de dependências.
import { Injectable } from '@nestjs/common';
// Importa o decorador InjectModel do pacote @nestjs/mongoose, usado para injeção do modelo no serviço.
import { InjectModel } from '@nestjs/mongoose';
// Importa a classe Model do pacote mongoose, que fornece uma interface para o banco de dados.
import { Model } from 'mongoose';
// Importa a classe Cliente do arquivo de esquemas, que define a estrutura do documento Cliente no MongoDB.
import { Cliente } from './schemas/cliente.schema';

// Decorador que marca a classe como um provedor de serviço, tornando-a injetável em outras partes da aplicação.
@Injectable()
export class ClienteService {
  // Construtor da classe, que injeta um modelo Mongoose para o documento Cliente.
  constructor(@InjectModel(Cliente.name) private clienteModel: Model<Cliente>) {}

  // Método assíncrono para criar um novo cliente. Retorna uma Promise que resolve para um documento Cliente.
  async criar(cliente: Cliente): Promise<Cliente> {
    // Cria uma nova instância do modelo Cliente com os dados fornecidos.
    const novoCliente = new this.clienteModel(cliente);
    // Salva o novo cliente no banco de dados e retorna o documento salvo.
    return novoCliente.save();
  }

  // Método assíncrono para encontrar todos os clientes. Retorna uma Promise que resolve para um array de documentos Cliente.
  async encontrarTodos(): Promise<Cliente[]> {
    // Busca todos os documentos Cliente no banco de dados, populando as referências 'contas' e 'gerente', e executa a query.
    return this.clienteModel.find().populate('contas gerente').exec();
  }

  // Método assíncrono para encontrar um cliente pelo seu ID. Retorna uma Promise que resolve para um documento Cliente.
  async encontrarPorId(id: string): Promise<Cliente> {
    // Busca um documento Cliente pelo ID fornecido, populando as referências 'contas' e 'gerente', e executa a query.
    return this.clienteModel.findById(id).populate('contas gerente').exec();
  }
}