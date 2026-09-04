#include <stdio.h>

int main()
{
    int arr[5];
    int swap;

    printf("Enter 5 Numbers:\n");

    for (int i = 0; i < 5; i++)
    {
        scanf("%d", &arr[i]);
    }

    for (int i = 0; i < 4; i++)
    {
        for (int j = i + 1; j < 5; j++)
        {
            if (arr[j] < arr[i])
            {
                swap = arr[i];
                arr[i] = arr[j];
                arr[j] = swap;
            }
        }
    }

    printf("Numbers in Ascending Order:\n");

    for (int i = 0; i < 5; i++)
    {
        printf("%d ", arr[i]);
    }

    return 0;
}
