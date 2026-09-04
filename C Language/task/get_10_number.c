#include <stdio.h>

int main()
{
    int arr[10];

    printf("Enter 10 Numbers:\n");

    for (int i = 0; i < 10; i++)
    {
        printf("Number %d: ", i + 1);
        scanf("%d", &arr[i]);
    }

    return 0;
}
