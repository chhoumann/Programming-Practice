#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    // Creating and populating vector
    vector<int> vec;
    int n;
    cin >> n;
    for (int i = 0; i < n; i++) {
        int temp;
        cin >> temp;
        vec.push_back(temp);
    }
    // Simply using the sort from the <algorithm> header.
    sort(vec.begin(), vec.end());
    // Output
    for (int i = 0; i < vec.size(); i++) {
        cout << vec[i] << " ";
    }
    cout << "\n";


    return 0;
}
