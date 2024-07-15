// Importa decoradores e funções do NestJS Mongoose para definir esquemas de dados.
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// Importa a interface Document do Mongoose, que representa um documento MongoDB.
import { Document } from 'mongoose';
// Importa o esquema Cliente de um diretório relativo, para uso como referência.
import { Cliente } from '../../cliente/schemas/cliente.schema';
// Importa o Mongoose para usar tipos de dados específicos do MongoDB.
import * as mongoose from 'mongoose'; 

// Define um tipo que combina a classe Conta com a interface Document, facilitando a manipulação de documentos.
export type ContaDocument = Conta & Document;

// Decorador que marca uma classe como um esquema do Mongoose.
@Schema()
export class Conta {
  // Decorador que define uma propriedade do documento como obrigatória. Representa o tipo da conta.
  @Prop({ required: true })
  tipo: string;

  // Decorador que define uma propriedade do documento como obrigatória. Representa o saldo da conta.
  @Prop({ required: true })
  saldo: number;

  // Decorador opcional para a propriedade limiteChequeEspecial. Pode ou não estar presente.
  @Prop()
  limiteChequeEspecial?: number;

  // Decorador opcional para a propriedade taxaJuros. Pode ou não estar presente.
  @Prop()
  taxaJuros?: number;

  // Decorador que define uma propriedade como uma referência a outro documento. Liga a conta a um cliente.
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' })
  cliente: Cliente;
}

// Cria e exporta um esquema Mongoose para a classe Conta, permitindo sua utilização para interagir com o banco de dados.
export const ContaSchema = SchemaFactory.createForClass(Conta);
