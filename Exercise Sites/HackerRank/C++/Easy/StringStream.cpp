#include <sstream>
#include <vector>
#include <iostream>
using namespace std;

vector<int> parseInts(string str) {
	// Complete this function
    vector<int> numbers;
    stringstream string(str);
    char ch;
    int temp;

    while (string >> temp) { // Becomes false when it's no longer possible to extract from string (when extracted is not of type int) and terminates
        numbers.push_back(temp); // Pushes the extracted integer to numbers array
        string >> ch; // Unnecessary commas are extracted to ch
    }

    return numbers;

}

int main() {
    string str;
    cin >> str;
    vector<int> integers = parseInts(str);
    for(int i = 0; i < integers.size(); i++) {
        cout << integers[i] << "\n";
    }
    
    return 0;
}