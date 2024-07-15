// Importa os decoradores Prop, Schema e SchemaFactory do pacote @nestjs/mongoose, usados para definir esquemas do Mongoose.
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// Importa a interface Document do pacote mongoose, que representa um documento MongoDB.
import { Document } from 'mongoose';
// Importa a classe Cliente do diretório de esquemas, para ser usada como tipo de referência nos documentos Gerente.
import { Cliente } from '../../cliente/schemas/cliente.schema';
// Importa o pacote mongoose para usar tipos e funções específicas do MongoDB.
import * as mongoose from 'mongoose'; 

// Decorador que marca a classe como um esquema do Mongoose, permitindo sua utilização para modelar documentos no banco de dados.
@Schema()
export class Gerente extends Document {
  // Decorador que define uma propriedade 'nome' como obrigatória no esquema do documento.
  @Prop({ required: true })
  nome: string;

  // Decorador que define uma propriedade 'identificacao' como obrigatória no esquema do documento.
  @Prop({ required: true })
  identificacao: string;

  // Decorador que define uma propriedade 'clientes' como um array de referências ao documento Cliente.
  // Cada elemento do array é um ObjectId que referencia um documento Cliente.
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' }])
  clientes: Cliente[];
}

// Cria e exporta um esquema Mongoose para a classe Gerente, permitindo sua utilização para interagir com o banco de dados.
export const GerenteSchema = SchemaFactory.createForClass(Gerente);
