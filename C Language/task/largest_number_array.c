#include <stdio.h>

int main()
{
    int arr[5];
    int maxnum;

    printf("Enter 5 Numbers: ");

    for (int i = 0; i < 5; i++)
    {
        scanf("%d", &arr[i]);
    }

    maxnum = arr[0];

    for (int i = 1; i < 5; i++)
    {
        if (arr[i] > maxnum)
        {
            maxnum = arr[i];
        }
    }

    printf("Largest Number is: %d", maxnum);

    return 0;
}
