using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AuroraBack.Models
{
    public class Dado
    {
        public Dado(int face)
        {
            if (face < 1)
                this.Face = 1;
            else if (face > 6)
                this.Face = 6;
            else
                this.Face = face;
        }

        public int Face { get; set; }
    }
}