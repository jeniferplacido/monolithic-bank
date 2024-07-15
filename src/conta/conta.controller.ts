// Importa os decoradores Controller, Get, Post, Body e Param do pacote @nestjs/common para criar controladores e manipular requisições.
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
// Importa o serviço ContaService do mesmo diretório, que contém a lógica de negócios para contas.
import { ContaService } from './conta.service';
// Importa a classe Conta do diretório de esquemas, que define a estrutura dos dados de contas.
import { Conta } from './schemas/conta.schema';

// Decorador que marca a classe como um controlador com o caminho base 'contas' para as rotas.
@Controller('contas')
export class ContaController {
  // Construtor da classe, que injeta uma instância do serviço ContaService.
  constructor(private readonly contaService: ContaService) {}

  // Decorador que marca o método seguinte como um manipulador de requisições POST para a rota base.
  @Post()
  // Método para criar uma nova conta. Recebe os dados da conta do corpo da requisição.
  async criar(@Body() conta: Conta) {
    // Chama o método criar do serviço ContaService passando os dados da conta e retorna o resultado.
    return this.contaService.criar(conta);
  }

  // Decorador que marca o método seguinte como um manipulador de requisições GET para a rota base.
  @Get()
  // Método para encontrar todas as contas.
  async encontrarTodos() {
    // Chama o método encontrarTodos do serviço ContaService e retorna o resultado.
    return this.contaService.encontrarTodos();
  }

  // Decorador que marca o método seguinte como um manipulador de requisições GET para a rota com um parâmetro 'id'.
  @Get(':id')
  // Método para encontrar uma conta pelo seu ID. Recebe o ID como parâmetro da URL.
  async encontrarPorId(@Param('id') id: string) {
    // Chama o método encontrarPorId do serviço ContaService passando o ID recebido e retorna o resultado.
    return this.contaService.encontrarPorId(id);
  }
}
