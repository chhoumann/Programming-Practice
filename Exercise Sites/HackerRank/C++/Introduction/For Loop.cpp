#include <iostream>

void print(int num) {
    // Using the solution to "Conditional Statements" here
    switch(num) {
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
}

void evenOrOdd(int num) {
    (num % 2 == 0) ? std::cout << "even" : std::cout << "odd";
}

int main(int argc, char const *argv[])
{
    int a, b;
    scanf("%d\n%d", &a, &b);
    // Could also have array of strings instead of print function.
    for (int i = a; i <= b; i++)
    {
        (i<=9) ? print(i) : evenOrOdd(i);    
    }
    
    return 0;
}
