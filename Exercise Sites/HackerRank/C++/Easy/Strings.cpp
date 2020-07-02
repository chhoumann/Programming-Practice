#include <iostream>
#include <string>
using namespace std;

int main() {
    string a, b;
    cin >> a >> b;

	// Print length of the two strings separated by a space
    cout << a.size() << " " << b.size() << endl;

    // Print the two strings concatenated
    cout << a + b << endl;

    // Print the two strings separated by a space, but switch their first characters
    char temp = a[0];
    a[0] = b[0];
    b[0] = temp;
    cout << a << " " << b << endl;

    return 0;
}