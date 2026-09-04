#include <stdio.h>

    int main()
{
    int total = 0;
    int n;

    printf("Enter a Number: ");
    scanf("%d", &n);

    for (int j = 1; j <= n; j++)
    {
        if (j % 2 == 0)
        {
            printf("Even Number: %d\n", j);
            total++;
        }
    }

    printf("Number of Even Numbers: %d", total);

    return 0;
}

