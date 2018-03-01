using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace AuroraBack.Models.Enum
{
    public enum Condicao
    {
        [Description("Uns")]
        Uns = 1,
        [Description("Dois")]
        Dois = 2,
        [Description("Tres")]
        Tres = 3,
        [Description("Quatros")]
        Quatros = 4,
        [Description("Cincos")]
        Cincos = 5,
        [Description("Seis")]
        Seis = 6,
        [Description("Par")]
        Par = 11,
        [Description("DoisPares")]
        DoisPares = 22,
        [Description("Trio")]
        Trio = 33,
        [Description("Quadra")]
        Quadra = 44,
        [Description("SequenciaMenor")]
        SequenciaMenor = 12,
        [Description("SequenciaMaior")]
        SequenciaMaior = 34,
        [Description("FullHouse")]
        FullHouse = 23,
        [Description("Aurora")]
        Aurora = 50
    }
}