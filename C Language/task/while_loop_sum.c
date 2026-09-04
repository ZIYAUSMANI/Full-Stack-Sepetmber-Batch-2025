#include <stdio.h>

int main()
{
    int value;
    int i = 1;
    int total = 0;

    while (i <= 10)
    {
        printf("Enter Number %d: ", i);
        scanf("%d", &value);

        total = total + value;
        i++;
    }

    printf("Total Sum of 10 Numbers: %d", total);

    return 0;
}
