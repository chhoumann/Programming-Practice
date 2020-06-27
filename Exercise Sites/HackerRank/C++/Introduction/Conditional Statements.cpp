#include <iostream>

int main()
{
    int n;
    std::cin >> n;

    // Easier than writing lots of if else statements.
    switch(n) {
        case 1: std::cout << "one"; break;
        case 2: std::cout << "two"; break;
        case 3: std::cout << "three"; break;
        case 4: std::cout << "four"; break;
        case 5: std::cout << "five"; break;
        case 6: std::cout << "six"; break;
        case 7: std::cout << "seven"; break;
        case 8: std::cout << "eight"; break;
        case 9: std::cout << "nine"; break;
    }
    if (n > 9) {std::cout << "Greater than 9";}

    return 0;
}
