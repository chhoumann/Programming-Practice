using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace CSharp_Learning
{
    class Program
    {
        public static void Main(string[] args)
        {
            List<string> input = File.ReadAllLines("inputLines.txt").ToList();

            int amountOfOkPasswords = input.Count(CheckIfPasswordMatchesPolicy);

            Console.WriteLine($"Valid passwords: {amountOfOkPasswords}");
        }

        private static bool CheckIfPasswordMatchesPolicy(string input)
        {
            int indexOfDash = input.IndexOf('-');
            int indexOfFirstSpace = input.IndexOf(' ');
            int indexOfLastSpace = input.LastIndexOf(' ');

            int position1;
            int position2;

            if (!int.TryParse(input.Substring(0, indexOfDash), out position1))
            {
                Console.WriteLine($"Couldn't find position1 for {input}");
                return false;
            }

            if (!int.TryParse(input.Substring(indexOfDash + 1, indexOfFirstSpace - indexOfDash - 1), out position2))
            {
                Console.WriteLine($"Couldn't find position1 for input {input}");
                return false;
            }

            char c = input[indexOfFirstSpace + 1];

            string password = input.Substring(indexOfLastSpace + 1);

            return (password[position1 - 1] == c && password[position2 - 1] != c) ||
                   (password[position1 - 1] != c && password[position2 - 1] == c);
        }
    }
}