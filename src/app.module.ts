// Importa o decorador Module do pacote @nestjs/common, usado para definir um módulo no NestJS.
import { Module } from '@nestjs/common';
// Importa ConfigModule e ConfigService do pacote @nestjs/config para carregar e acessar variáveis de ambiente.
import { ConfigModule, ConfigService } from '@nestjs/config';
// Importa MongooseModule do pacote @nestjs/mongoose para integração com MongoDB.
import { MongooseModule } from '@nestjs/mongoose';
// Importa ClienteModule, ContaModule e GerenteModule, que são módulos específicos da aplicação.
import { ClienteModule } from './cliente/cliente.module';
import { ContaModule } from './conta/conta.module';
import { GerenteModule } from './gerente/gerente.module';

// Decorador que marca a classe como um módulo do NestJS.
@Module({
  // Array de importações de outros módulos e configurações.
  imports: [
    // Configura o módulo de configuração para ser global, permitindo acessar as variáveis de ambiente em toda a aplicação.
    ConfigModule.forRoot({
      isGlobal: true, // Torna o módulo de configuração disponível globalmente
    }),
    // Configura o módulo do Mongoose de forma assíncrona, permitindo usar o serviço de configuração para acessar a URI do MongoDB.
    MongooseModule.forRootAsync({
      imports: [ConfigModule], // Importa o ConfigModule para injetar o ConfigService.
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URL'), // Usa o ConfigService para obter a URI do MongoDB das variáveis de ambiente.
      }),
      inject: [ConfigService], // Injeta o ConfigService para ser usado na fábrica.
    }),
    // Importa os módulos específicos da aplicação.
    ClienteModule,
    ContaModule,
    GerenteModule,
  ],
})
// Exporta a classe AppModule, que é o módulo raiz da aplicação.
export class AppModule {}