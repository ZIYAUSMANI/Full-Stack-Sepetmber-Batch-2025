#include <stdio.h>

int main()
{
    int arr[5];
    int minnum;

    printf("Enter 5 Numbers: ");

    for (int i = 0; i < 5; i++)
    {
        scanf("%d", &arr[i]);
    }

    minnum = arr[0];

    for (int i = 1; i < 5; i++)
    {
        if (arr[i] < minnum)
        {
            minnum = arr[i];
        }
    }

    printf("Lowest Number is: %d", minnum);

    return 0;
}
