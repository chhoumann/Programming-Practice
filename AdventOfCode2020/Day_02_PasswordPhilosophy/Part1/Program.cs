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

            int min;
            int max;

            if (!int.TryParse(input.Substring(0, indexOfDash), out min))
            {
                Console.WriteLine($"Couldn't find min for {input}");
                return false;
            }

            if (!int.TryParse(input.Substring(indexOfDash + 1, indexOfFirstSpace - indexOfDash - 1), out max))
            {
                Console.WriteLine($"Couldn't find max for input {input}");
                return false;
            }
            
            char c = input[indexOfFirstSpace + 1];

            string password = input.Substring(indexOfLastSpace + 1);

            Dictionary<char, int> passwordCharacters = new Dictionary<char, int>();

            foreach (char character in password)
            {
                if (passwordCharacters.ContainsKey(character))
                    passwordCharacters[character]++;
                else
                    passwordCharacters.Add(character, 1);
            }

            bool passwordFulfillsRequirements = passwordCharacters.ContainsKey(c) && (passwordCharacters[c] >= min && passwordCharacters[c] <= max);

            return passwordFulfillsRequirements;
        }
    }
}
