#include <stdio.h>

int main()
{
    int first, last;

    printf("Enter First Number: ");
    scanf("%d", &first);

    printf("Enter Last Number: ");
    scanf("%d", &last);

    if (first <= last)
    {
        for (int num = first; num <= last; num++)
        {
            printf("%d\n", num);
        }
    }
    else
    {
        printf("Invalid Range");
    }

    return 0;
}
