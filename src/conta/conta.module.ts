// Importa o decorador Module do pacote @nestjs/common, usado para organizar a aplicação em módulos.
import { Module } from '@nestjs/common';
// Importa MongooseModule do pacote @nestjs/mongoose, para integração com MongoDB.
import { MongooseModule } from '@nestjs/mongoose';
// Importa ContaController do mesmo diretório, responsável por manipular as requisições HTTP.
import { ContaController } from './conta.controller';
// Importa ContaService do mesmo diretório, que contém a lógica de negócios para contas.
import { ContaService } from './conta.service';
// Importa Conta e ContaSchema do diretório de esquemas, que define a estrutura dos dados de contas.
import { Conta, ContaSchema } from './schemas/conta.schema';

// Decorador que marca a classe como um módulo do NestJS.
@Module({
  // Array de importações. forFeature registra o esquema Conta no MongooseModule.
  imports: [MongooseModule.forFeature([{ name: Conta.name, schema: ContaSchema }])],
  // Array de controladores. ContaController é responsável por manipular as requisições HTTP para contas.
  controllers: [ContaController],
  // Array de provedores. ContaService contém a lógica de negócios e é injetado nos controladores.
  providers: [ContaService],
})
// Exporta a classe ContaModule, tornando-a disponível para ser importada por outros módulos.
export class ContaModule {}