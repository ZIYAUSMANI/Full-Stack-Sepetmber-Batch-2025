#include <stdio.h>

    int main()
{
    int number;
    int square;

    printf("Enter a Number: ");
    scanf("%d", &number);

    for (int i = 1; i <= number; i++)
    {
        square = i * i;
        printf("%d Square = %d\n", i, square);
    }

    return 0;
}

