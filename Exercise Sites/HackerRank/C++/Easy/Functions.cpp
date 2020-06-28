#include <iostream>
#include <cstdio>
#include <vector>
using namespace std;

/*
Add `int max_of_four(int a, int b, int c, int d)` here.
*/
int max_of_four(int a, int b, int c, int d) {
    // In my opinion it's easiest to just iterative over an array(vector).
    // Remember to #include <vector>
    std::vector<int> values = {a,b,c,d};
    int max = values[0];
    for (int i = 1; i < 4; i++)
    {
        if (values[i] > max) {
            max = values[i];
        }
    }
    return max;
}

int main() {
    int a, b, c, d;
    scanf("%d %d %d %d", &a, &b, &c, &d);
    int ans = max_of_four(a, b, c, d);
    printf("%d", ans);
    
    return 0;
}