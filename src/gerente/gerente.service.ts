// Importa o decorador Injectable do pacote @nestjs/common, que permite a injeção de dependências em outras classes.
import { Injectable } from '@nestjs/common';
// Importa o decorador InjectModel do pacote @nestjs/mongoose, usado para injetar um modelo do Mongoose.
import { InjectModel } from '@nestjs/mongoose';
// Importa a classe Model do pacote mongoose, que fornece métodos para operações de banco de dados.
import { Model } from 'mongoose';
// Importa a classe Gerente do arquivo de esquemas, que define a estrutura do documento Gerente no MongoDB.
import { Gerente } from './schemas/gerente.schema';

// Decorador que marca a classe como um provedor de serviço, tornando-a injetável em outras partes da aplicação.
@Injectable()
export class GerenteService {
  // Construtor da classe. @InjectModel injeta o modelo Gerente do Mongoose, permitindo operações de banco de dados.
  constructor(@InjectModel(Gerente.name) private gerenteModel: Model<Gerente>) {}

  // Método assíncrono para criar um novo gerente. Recebe um objeto Gerente e retorna uma Promise de Gerente.
  async criar(gerente: Gerente): Promise<Gerente> {
    // Cria uma nova instância do modelo Gerente com os dados fornecidos.
    const novoGerente = new this.gerenteModel(gerente);
    // Salva o novo gerente no banco de dados e retorna o documento salvo.
    return novoGerente.save();
  }

  // Método assíncrono para encontrar todos os gerentes. Retorna uma Promise de um array de Gerente.
  async encontrarTodos(): Promise<Gerente[]> {
    // Busca todos os documentos Gerente no banco de dados, populando a referência 'clientes', e executa a query.
    return this.gerenteModel.find().populate('clientes').exec();
  }

  // Método assíncrono para encontrar um gerente pelo seu ID. Retorna uma Promise de Gerente.
  async encontrarPorId(id: string): Promise<Gerente> {
    // Busca um documento Gerente pelo ID fornecido, populando a referência 'clientes', e executa a query.
    return this.gerenteModel.findById(id).populate('clientes').exec();
  }
}