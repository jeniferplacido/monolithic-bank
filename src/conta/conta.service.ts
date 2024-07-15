// Importa o decorador Injectable do pacote @nestjs/common, que permite a injeção de dependências em outras classes.
import { Injectable } from '@nestjs/common';
// Importa o decorador InjectModel do pacote @nestjs/mongoose, usado para injetar um modelo do Mongoose.
import { InjectModel } from '@nestjs/mongoose';
// Importa a classe Model do pacote mongoose, que fornece métodos para operações de banco de dados.
import { Model } from 'mongoose';
// Importa a interface Conta do arquivo de esquemas, que define a estrutura do documento Conta no MongoDB.
import { Conta } from './schemas/conta.schema';

// Decorador que marca a classe como um provedor de serviço, tornando-a injetável em outras partes da aplicação.
@Injectable()
export class ContaService {
  // Construtor da classe. @InjectModel injeta o modelo Conta do Mongoose, permitindo operações de banco de dados.
  constructor(@InjectModel(Conta.name) private contaModel: Model<Conta>) {}

  // Método assíncrono para criar uma nova conta. Recebe um objeto Conta e retorna uma Promise de Conta.
  async criar(conta: Conta): Promise<Conta> {
    // Cria uma nova instância do modelo Conta com os dados fornecidos.
    const novaConta = new this.contaModel(conta);
    // Salva a nova conta no banco de dados e retorna o documento salvo.
    return novaConta.save();
  }

  // Método assíncrono para encontrar todas as contas. Retorna uma Promise de um array de Conta.
  async encontrarTodos(): Promise<Conta[]> {
    // Busca todos os documentos Conta no banco de dados, populando a referência 'cliente', e executa a query.
    return this.contaModel.find().populate('cliente').exec();
  }

  // Método assíncrono para encontrar uma conta pelo seu ID. Retorna uma Promise de Conta.
  async encontrarPorId(id: string): Promise<Conta> {
    // Busca um documento Conta pelo ID fornecido, populando a referência 'cliente', e executa a query.
    return this.contaModel.findById(id).populate('cliente').exec();
  }
}