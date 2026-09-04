#include <stdio.h>

    int main()
{
    int value;
    int total = 0;

    for (int i = 1; i <= 10; i++)
    {
        printf("Enter Number %d: ", i);
        scanf("%d", &value);

        total = total + value;
    }

    printf("Total of 10 Numbers: %d", total);

    return 0;
}

