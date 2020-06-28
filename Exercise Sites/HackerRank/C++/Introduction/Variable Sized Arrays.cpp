#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
    int n, q;
    std::cin >> n >> q;
    // Making array of arrays with n pre-reserved space
    std::vector<std::vector<int>> arr(n);

    // Building arrays inside 'arr'
    for (int i = 0; i < n; i++)
    {
        // Need to get amount of entries to put into the array (first index of all n inputs)
        int entries = 0;
        std::cin >> entries;
        // Putting each entry into array
        for (int j = 0; j < entries; j++)
        {
            int k;
            std::cin >> k;
            arr[i].push_back(k);
        }
    }

    // Outputting q queries
    for (int l = 0; l < q; l++)
    {
        int idx1, idx2;
        std::cin >> idx1 >> idx2;
        std::cout << arr[idx1][idx2] << "\n";
    }
    
    
    
    return 0;
}