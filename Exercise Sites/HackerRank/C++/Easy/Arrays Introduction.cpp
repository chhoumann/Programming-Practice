#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */ 
    // Input
    int n = 0;
    std::cin >> n; // first input = amount
    int vArr[1000]; // Due to constraints. Could have used vectors instead. Probably better.
    for (int i = 0; i <= n; i++)
    {
        std::cin >> vArr[i];
    }
    // Output
    for (int i = n - 1; i >= 0; i--)
    {
        std::cout << vArr[i] << " ";
    }
    
      
    return 0;
}
