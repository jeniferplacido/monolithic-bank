// Importa o decorador Module do pacote @nestjs/common, usado para organizar a aplicação em módulos.
import { Module } from '@nestjs/common';
// Importa MongooseModule do pacote @nestjs/mongoose, para integração com MongoDB.
import { MongooseModule } from '@nestjs/mongoose';
// Importa ClienteController do mesmo diretório, responsável por manipular as requisições HTTP.
import { ClienteController } from './cliente.controller';
// Importa ClienteService do mesmo diretório, que contém a lógica de negócios para clientes.
import { ClienteService } from './cliente.service';
// Importa Cliente e ClienteSchema do diretório de esquemas, que define a estrutura dos dados de clientes.
import { Cliente, ClienteSchema } from './schemas/cliente.schema';

// Decorador que marca a classe como um módulo do NestJS.
@Module({
  // Array de importações. forFeature registra o esquema Cliente no MongooseModule.
  imports: [MongooseModule.forFeature([{ name: Cliente.name, schema: ClienteSchema }])],
  // Array de controladores. ClienteController é responsável por manipular as requisições HTTP para clientes.
  controllers: [ClienteController],
  // Array de provedores. ClienteService contém a lógica de negócios e é injetado nos controladores.
  providers: [ClienteService],
})
// Exporta a classe ClienteModule, tornando-a disponível para ser importada por outros módulos.
export class ClienteModule {}