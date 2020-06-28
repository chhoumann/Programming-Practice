#include <iostream>
using namespace std;

int main() {

    int wm_weight;
    cin >> wm_weight;
    (wm_weight % 2 == 0 && wm_weight > 2) ? cout << "YES" : cout << "NO";

    return 0;
}