/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// Importa decoradores e funções do NestJS Mongoose para definir esquemas de dados.

import { Document } from 'mongoose';
// Importa a interface Document do Mongoose, que representa um documento MongoDB.

import { Conta } from '../../conta/schemas/conta.schema';
// Importa o esquema Conta de um diretório relativo.

import { Gerente } from '../../gerente/schemas/gerente.schema';
// Importa o esquema Gerente de um diretório relativo.

import * as mongoose from 'mongoose'; 
// Importa o Mongoose para usar tipos de dados específicos do MongoDB.

@Schema()
// Decorador que marca uma classe como um esquema do Mongoose.

export class Cliente extends Document {
// Define a classe Cliente que estende Document, permitindo que instâncias de Cliente sejam tratadas como documentos MongoDB.

  @Prop({ required: true })
  // Decorador que define uma propriedade do documento como obrigatória.

  nome: string;
  // Define a propriedade nome do tipo string.

  @Prop({ required: true })
  // Decorador que define uma propriedade do documento como obrigatória.

  identificacao: string;
  // Define a propriedade identificação do tipo string.

  @Prop({ required: true })
  // Decorador que define uma propriedade do documento como obrigatória.

  endereco: string;
  // Define a propriedade endereço do tipo string.

  @Prop({ required: true })
  // Decorador que define uma propriedade do documento como obrigatória.

  telefone: string;
  // Define a propriedade telefone do tipo string.

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Conta' }])
  // Decorador que define uma propriedade como um array de referências a outro documento.

  contas: Conta[];
  // Define a propriedade contas como um array de documentos do tipo Conta.

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Gerente' })
  // Decorador que define uma propriedade como uma referência a outro documento.

  gerente: Gerente;
  // Define a propriedade gerente como um documento do tipo Gerente.
}

export const ClienteSchema = SchemaFactory.createForClass(Cliente);
// Cria e exporta um esquema Mongoose para a classe Cliente, permitindo sua utilização para interagir com o banco de dados.
