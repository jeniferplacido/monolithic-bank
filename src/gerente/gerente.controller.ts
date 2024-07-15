// Importa os decoradores Controller, Get, Post, Body e Param do pacote @nestjs/common para criar controladores e manipular requisições HTTP.
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
// Importa o serviço GerenteService do mesmo diretório, que contém a lógica de negócios para gerentes.
import { GerenteService } from './gerente.service';
// Importa a classe Gerente do diretório de esquemas, que define a estrutura dos dados de gerentes.
import { Gerente } from './schemas/gerente.schema';

// Decorador que marca a classe como um controlador com o caminho base 'gerentes' para as rotas.
@Controller('gerentes')
export class GerenteController {
  // Construtor da classe, que injeta uma instância do serviço GerenteService.
  constructor(private readonly gerenteService: GerenteService) {}

  // Decorador que marca o método seguinte como um manipulador de requisições POST para a rota base.
  @Post()
  // Método para criar um novo gerente. Recebe os dados do gerente do corpo da requisição.
  async criar(@Body() gerente: Gerente) {
    // Chama o método criar do serviço GerenteService passando os dados do gerente e retorna o resultado.
    return this.gerenteService.criar(gerente);
  }

  // Decorador que marca o método seguinte como um manipulador de requisições GET para a rota base.
  @Get()
  // Método para encontrar todos os gerentes.
  async encontrarTodos() {
    // Chama o método encontrarTodos do serviço GerenteService e retorna o resultado.
    return this.gerenteService.encontrarTodos();
  }

  // Decorador que marca o método seguinte como um manipulador de requisições GET para a rota com um parâmetro 'id'.
  @Get(':id')
  // Método para encontrar um gerente pelo seu ID. Recebe o ID como parâmetro da URL.
  async encontrarPorId(@Param('id') id: string) {
    // Chama o método encontrarPorId do serviço GerenteService passando o ID recebido e retorna o resultado.
    return this.gerenteService.encontrarPorId(id);
  }
}
