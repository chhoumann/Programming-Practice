#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    // Creating vector
    vector<int> vec;
    int n, l;
    cin >> n;
    // Populating vector
    for (int i = 0; i < n; i++) {
        int temp;
        cin >> temp;
        vec.push_back(temp);
    }

    // Query 1
    cin >> n;
    vec.erase(vec.begin() + n - 1);

    // Query 2
    cin >> n >> l;
    vec.erase(vec.begin() + n - 1, vec.begin() + l - 1);

    // Outputting results
    cout << vec.size() << endl;
    for (int i = 0; i < vec.size(); i++) {
        cout << vec[i] << " ";
    }
    cout << "\n";

    

    return 0;
}
