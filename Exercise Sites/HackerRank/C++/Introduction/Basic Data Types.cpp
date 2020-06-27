#include <iostream>

int main(int argc, char const *argv[])
{
    // Faster to use scanf & printf than cin and cout (especially for many inputs and outputs).
    int i; long l; char c; float f; double d;
    scanf("%d %ld %c %f %lf", &i, &l, &c, &f, &d);
    printf("%d\n%ld\n%c\n%f\n%lf", i, l, c, f, d);

    return 0;
}
