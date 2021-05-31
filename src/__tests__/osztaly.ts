using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;

namespace Erettsegi19_Futar
{
    public class út
    {
        private Dictionary<int, int> díjak = new Dictionary<int, int>() { { 1, 500 }, { 3, 700 }, { 6, 900 }, { 11, 1400 }, { 21, 2000 } };
        public int nap { get; set; }
        public int fuvar { get; set; }
        public int táv { get; set; }

        public út(string f)
        {
            string[] t = f.Split(' ');
            nap = int.Parse(t[0]);
            fuvar = int.Parse(t[1]);
            táv = int.Parse(t[2]);
        }

        public int díj { get { return díjak.Where(x => x.Key <= táv).Last().Value; } }
    }

    class Erettsegi19_Futar
    {
        static void Main()
        {
            Console.WriteLine("1. feladat: Beolvasás");
            string[] forrás = File.ReadAllLines("tavok.txt");
            List<út> útak = new List<út>();
            foreach (var i in forrás) útak.Add(new út(i));

            Console.WriteLine("2. feladat: Az első út távolsága: {0} km", útak.OrderBy(x => x.nap).ThenBy(x => x.fuvar).First().táv);

            Console.WriteLine("3. feladat: Az utolsó út távolsága: {0} km", útak.OrderBy(x => x.nap).ThenBy(x => x.fuvar).Last().táv);

            Console.Write("4. feladat: A következő napokon nem dolgozott a futár:");
            for (int i = 1; i <= 7; i++) if (útak.Count(x => x.nap == i) == 0 ) Console.Write(" {0}.",i);

            Console.WriteLine("\n5. feladat: a legtöbb fuvar a(z) {0}. napon volt!", útak.OrderBy(x => x.fuvar).Last().nap);

            Console.WriteLine("6. feladat: Megtett távolságok:");
            for (int i = 1; i <= 7; i++) Console.WriteLine(útak.Where(x => x.nap == i).Sum(x => x.táv));

            Console.Write("7. feladat: Kérek egy távolságot: ");
            Console.WriteLine("Ezért {0} Ft díjazás jár!",new út("1 1 " + Console.ReadLine()).díj);

            Console.WriteLine("8. feladat: dijazas.txt");
            List<string> ki = new List<string>();
            foreach (var i in útak.OrderBy(x=>x.nap).ThenBy(x=>x.fuvar)) ki.Add(i.nap+". nap "+i.fuvar+". út: "+i.díj+" Ft");
            File.WriteAllLines("dijazás.txt", ki);

            Console.WriteLine("9. feladat: A futárnak jár: {0} Ft", útak.Sum(x=>x.díj));

            Console.ReadKey();
        }
    }
}
