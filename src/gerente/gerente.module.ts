// Importa o decorador Module do pacote @nestjs/common, usado para organizar a aplicação em módulos.
import { Module } from '@nestjs/common';
// Importa MongooseModule do pacote @nestjs/mongoose, para integração com MongoDB.
import { MongooseModule } from '@nestjs/mongoose';
// Importa GerenteController do mesmo diretório, responsável por manipular as requisições HTTP para a entidade Gerente.
import { GerenteController } from './gerente.controller';
// Importa GerenteService do mesmo diretório, que contém a lógica de negócios para a entidade Gerente.
import { GerenteService } from './gerente.service';
// Importa Gerente e GerenteSchema do diretório de esquemas, que define a estrutura dos dados de Gerente no MongoDB.
import { Gerente, GerenteSchema } from './schemas/gerente.schema';

// Decorador que marca a classe como um módulo do NestJS.
@Module({
  // Array de importações. forFeature registra o esquema Gerente no MongooseModule para esta entidade.
  imports: [MongooseModule.forFeature([{ name: Gerente.name, schema: GerenteSchema }])],
  // Array de controladores. GerenteController é responsável por manipular as requisições HTTP para a entidade Gerente.
  controllers: [GerenteController],
  // Array de provedores. GerenteService contém a lógica de negócios para a entidade Gerente e é injetado nos controladores.
  providers: [GerenteService],
})
// Exporta a classe GerenteModule, tornando-a disponível para ser importada por outros módulos.
export class GerenteModule {}