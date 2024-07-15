// Importa os decoradores Controller, Get, Post, Body e Param do pacote @nestjs/common.
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
// Importa o serviço ClienteService do mesmo diretório.
import { ClienteService } from './cliente.service';
// Importa a classe Cliente do diretório de esquemas.
import { Cliente } from './schemas/cliente.schema';

// Decorador que marca a classe como um controlador com o caminho base 'clientes'.
@Controller('clientes')
export class ClienteController {
  // Declara um construtor com uma propriedade privada clienteService do tipo ClienteService.
  constructor(private readonly clienteService: ClienteService) {}

  // Decorador que marca o método seguinte como um manipulador de POST requests.
  @Post()
  // Método para criar um cliente. Recebe os dados do corpo da requisição.
  async criar(@Body() cliente: Cliente) {
    // Chama o método criar do serviço clienteService passando o cliente recebido e retorna o resultado.
    return this.clienteService.criar(cliente);
  }

  // Decorador que marca o método seguinte como um manipulador de GET requests.
  @Get()
  // Método para encontrar todos os clientes.
  async encontrarTodos() {
    // Chama o método encontrarTodos do serviço clienteService e retorna o resultado.
    return this.clienteService.encontrarTodos();
  }

  // Decorador que marca o método seguinte como um manipulador de GET requests com um parâmetro 'id'.
  @Get(':id')
  // Método para encontrar um cliente pelo ID. Recebe o ID como parâmetro da URL.
  async encontrarPorId(@Param('id') id: string) {
    // Chama o método encontrarPorId do serviço clienteService passando o ID recebido e retorna o resultado.
    return this.clienteService.encontrarPorId(id);
  }
}