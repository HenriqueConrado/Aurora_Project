using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AuroraBack.Models;
using System.Runtime.Serialization.Json;
using System.IO;
using System.Text;
using System.Web.Http.Cors;

namespace AuroraBack.Controllers
{
    [EnableCors(origins: "http://localhost:4000", headers: "*", methods: "*")]
    public class CategoriaController : ApiController
    {
        // GET: api/Categoria
        public IEnumerable<Categoria> Get()
        {
            List<Categoria> categorias = GetListCategoria();
            return categorias;
        }

        public IEnumerable<Models.DTO.Categoria> Get(int dado1, int dado2, int dado3, int dado4, int dado5)
        {
            List<Dado> dados = new List<Dado>()
            {
                new Dado(dado1),
                new Dado(dado2),
                new Dado(dado3),
                new Dado(dado4),
                new Dado(dado5)
            };
            List<Models.DTO.Categoria> categoriasDTO = new List<Models.DTO.Categoria>();
            List<Categoria> categorias = GetListCategoria();
            foreach (Categoria categoria in categorias)
            {
                Models.DTO.Categoria categoriaDTO = new Models.DTO.Categoria()
                {
                    Nome = categoria.Nome,
                    Valor = categoria.Funcao(dados).ToString(), 
                    Descricao = categoria.Descricao
                };
                categoriasDTO.Add(categoriaDTO);
            }
            return categoriasDTO;
        }

        private List<Categoria> GetListCategoria()
        {
            List<Categoria> categorias = new List<Categoria>();

            Categoria Uns = new Categoria() { Nome = "Uns", Condicao = Models.Enum.Condicao.Uns, Descricao = "Haver pelo menos 1 dado com valor \"um\" no rolamento: Pontue a soma de todos os dados de valor \"um\"" };
            categorias.Add(Uns);
            Categoria Dois = new Categoria() { Nome = "Dois", Condicao = Models.Enum.Condicao.Dois, Descricao = "Haver pelo menos 1 dado com valor \"dois\" no rolamento: Pontue a soma de todos os dados de valor \"dois\" " };
            categorias.Add(Dois);
            Categoria Três = new Categoria() { Nome = "Tres", Condicao = Models.Enum.Condicao.Tres, Descricao = "Haver pelo menos 1 dado com valor \"três\" no rolamento: Pontue a soma de todos os dados de valor \"três\"" };
            categorias.Add(Três);
            Categoria Quatros = new Categoria() { Nome = "Quatros", Condicao = Models.Enum.Condicao.Quatros, Descricao = "Haver pelo menos 1 dado com valor \"quatro\" no rolamento: Pontue a soma de todos os dados de valor \"quatro\" " };
            categorias.Add(Quatros);
            Categoria Cincos = new Categoria() { Nome = "Cincos", Condicao = Models.Enum.Condicao.Cincos, Descricao = "Haver pelo menos 1 dado com valor \"cinco\" no rolamento: Pontue a soma de todos os dados de valor \"cinco\"" };
            categorias.Add(Cincos);
            Categoria Seis = new Categoria() { Nome = "Seis", Condicao = Models.Enum.Condicao.Seis, Descricao = "Haver pelo menos 1 dado com valor \"seis\" no rolamento: Pontue a soma de todos os dados de valor \"seis\"" };
            categorias.Add(Seis);
            Categoria Par = new Categoria() { Nome = "Par", Condicao = Models.Enum.Condicao.Par, Descricao = "Haver pelo menos 2 dados de mesmo valor no rolamento: Pontue a soma dos dois dados de mesmo valor " };
            categorias.Add(Par);
            Categoria DoisPares = new Categoria() { Nome = "DoisPares", Condicao = Models.Enum.Condicao.DoisPares, Descricao = "Haver pelo menos 2 pares de dados distintos no rolamento: Pontue a soma dos quatro dados que integram os pares " };
            categorias.Add(DoisPares);
            Categoria Trio = new Categoria() { Nome = "Trio", Condicao = Models.Enum.Condicao.Trio, Descricao = "Haver pelo menos 3 dados de mesmo valor no rolamento: Pontue a soma dos três dados de mesmo valor " };
            categorias.Add(Trio);
            Categoria Quadra = new Categoria() { Nome = "Quadra", Condicao = Models.Enum.Condicao.Quadra, Descricao = "Haver pelo menos 4 dados de mesmo valor no rolamento: Pontue a soma dos quatro dados de mesmo valor " };
            categorias.Add(Quadra);
            Categoria SequenciaMenor = new Categoria() { Nome = "SequenciaMenor", Condicao = Models.Enum.Condicao.SequenciaMenor, Descricao = "Haver pelo menos 4 dados em ordem numérica no rolamento: Pontue 15 pontos " };
            categorias.Add(SequenciaMenor);
            Categoria SequenciaMaior = new Categoria() { Nome = "SequenciaMaior", Condicao = Models.Enum.Condicao.SequenciaMaior, Descricao = "Haver os 5 dados em ordem numérica no rolamento: Pontue 20 pontos " };
            categorias.Add(SequenciaMaior);
            Categoria FullHouse = new Categoria() { Nome = "FullHouse", Condicao = Models.Enum.Condicao.FullHouse, Descricao = "Haver 1 par e 1 trio no rolamento: Pontue a soma de todos os 5 dados" };
            categorias.Add(FullHouse);
            Categoria Aurora = new Categoria() { Nome = "Aurora", Condicao = Models.Enum.Condicao.Aurora, Descricao = "Haver 5 dados de mesmo valor no rolamento: Pontue 50 pontos" };
            categorias.Add(Aurora);

            return categorias;
        }
    }
}
