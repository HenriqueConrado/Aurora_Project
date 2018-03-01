using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AuroraBack.Models;

namespace AuroraBack.Models
{
    public class Categoria
    {
        public string Nome { get; set; }

        public string Descricao { get; set; }

        public Enum.Condicao Condicao { get; set; }

        public double Funcao(List<Dado> dados, int condicao = 0)
        {
            if (condicao == 0)
                condicao = Convert.ToInt32(Condicao);

            double retorno = 0;
            List<Dado> aux;
            List<Dado> aux2;
            switch (condicao)
            {
                case 50:
                    #region Aurora
                    aux = new List<Dado>();
                    aux = dados.FindAll(f => f.Face == dados[0].Face);
                    if (aux.Count == dados.Count)
                        retorno = 50;
                    break;
                    #endregion
                case 23:
                    #region Full House
                    aux = new List<Dado>();
                    aux = dados.FindAll(f => f.Face == dados[0].Face);
                    if (aux.Count == 2 || aux.Count == 3)
                    {
                        aux2 = new List<Dado>();
                        aux2 = dados.FindAll(f => f.Face != aux[0].Face);
                        if (aux2.Count == 2 || aux2.Count== 3)
                            retorno = dados.Sum(f => f.Face);
                    }
                    break;
                    #endregion
                case 34:
                    #region Sequencia Maior
                    bool seq = true;
                    bool menorParaMaior = true;
                    Dado dado = dados[0];
                    for (int i = 1; i < dados.Count; i++)
                    {
                        if (dado.Face == dados[i].Face - i)
                        {
                            if (i == 1)
                                menorParaMaior = true;
                            if (menorParaMaior)
                                seq = true;
                            else
                                seq = false;
                        }
                        else if (dado.Face == dados[i].Face + i)
                        {
                            if (i == 1)
                                menorParaMaior = false;
                            if (!menorParaMaior)
                                seq = true;
                            else
                                seq = false;
                        }
                        else
                            seq = false;

                        if (!seq)
                            break;
                    }
                    if (seq)
                        retorno = 20;
                    break;
                    #endregion
                case 12:
                    #region Sequencia Menor
                    bool seq2 = true;
                    bool menorParaMaior2 = true;
                    for (int x = 0; x < 2; x++)
                    {
                        Dado dado2 = dados[x];
                        int sub = 0;
                        if (x == 0)
                            sub = 1;
                        else
                            sub = 0;
                        for (int i = 1; i < dados.Count - sub; i++)
                        {
                            if (dado2.Face == dados[i].Face - i)
                            {
                                if (i == 1)
                                    menorParaMaior2 = true;
                                if (menorParaMaior2)
                                    seq2 = true;
                                else
                                    seq2 = false;
                            }
                            else if (dado2.Face == dados[i].Face + i)
                            {
                                if (i == 1)
                                    menorParaMaior2 = false;
                                if (!menorParaMaior2)
                                    seq2 = true;
                                else
                                    seq2 = false;
                            }
                            else
                                seq2 = false;

                            if (!seq2)
                                break;
                        }
                        if (seq2)
                            break;
                    }

                    if (seq2)
                        retorno = 15;
                    break;
                    #endregion
                case 44:
                    #region Quadra
                    for (int x = 0; x < 2; x++)
                    {
                        Dado dadoQuadra = dados[x];
                        List<Dado> iguais = dados.FindAll(f => f.Face == dadoQuadra.Face);
                        if (iguais.Count == 4)
                        {
                            retorno = iguais.Sum(f => f.Face);
                        }
                    }
                    break;
                    #endregion
                case 33:
                    #region Trio
                    for (int x = 0; x < 3; x++)
                    {
                        Dado dadoTrio = dados[x];
                        List<Dado> iguais = dados.FindAll(f => f.Face == dadoTrio.Face);
                        if (iguais.Count == 3)
                        {
                            retorno = iguais.Sum(f => f.Face);
                        }
                    }
                    break;
                    #endregion
                case 22:
                    #region Dois Pares
                    List<Dado> parUm = null;
                    List<Dado> parDois = null;
                    for (int x = 0; x < dados.Count; x++)
                    {
                        Dado dadoPar = dados[x];
                        List<Dado> iguais = dados.FindAll(f => f.Face == dadoPar.Face);
                        if (iguais.Count == 2)
                        {
                            if (parUm == null)
                                parUm = iguais;
                            else
                            {
                                if (parUm[0].Face != dadoPar.Face)
                                {
                                    if (parDois == null)
                                    {
                                        parDois = iguais;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    if (parUm != null && parDois != null)
                        retorno = parUm.Sum(f => f.Face) + parDois.Sum(f => f.Face);
                    break;
                    #endregion
                case 11:
                    #region Par
                    List<Dado> par = null;
                    for (int x = 0; x < dados.Count; x++)
                    {
                        Dado dadoPar = dados[x];
                        List<Dado> iguais = dados.FindAll(f => f.Face == dadoPar.Face);
                        if (iguais.Count == 2)
                        {
                            par = iguais;
                            break;
                        }
                    }
                    if (par != null)
                        retorno = par.Sum(f => f.Face);
                    break;
                    #endregion
                case 1:
                    #region
                    aux = new List<Dado>();
                    aux = dados.FindAll(f => f.Face == 1);
                    if (aux.Count > 0)
                        retorno = aux.Sum(f => f.Face);
                    break;
                    #endregion
                case 2:
                    #region
                    aux = new List<Dado>();
                    aux = dados.FindAll(f => f.Face == 2);
                    if (aux.Count > 0)
                        retorno = aux.Sum(f => f.Face);
                    break;
                    #endregion
                case 3:
                    #region
                    aux = new List<Dado>();
                    aux = dados.FindAll(f => f.Face == 3);
                    if (aux.Count > 0)
                        retorno = aux.Sum(f => f.Face);
                    break;
                    #endregion
                case 4:
                    #region
                    aux = new List<Dado>();
                    aux = dados.FindAll(f => f.Face == 4);
                    if (aux.Count > 0)
                        retorno = aux.Sum(f => f.Face);
                    break;
                    #endregion
                case 5:
                    #region
                    aux = new List<Dado>();
                    aux = dados.FindAll(f => f.Face == 5);
                    if (aux.Count > 0)
                        retorno = aux.Sum(f => f.Face);
                    break;
                    #endregion
                case 6:
                    #region
                    aux = new List<Dado>();
                    aux = dados.FindAll(f => f.Face == 6);
                    if (aux.Count > 0)
                        retorno = aux.Sum(f => f.Face);
                    break;
                    #endregion
                default:
                    retorno = 0;
                    break;
            }

            return retorno;
        }
    }
}