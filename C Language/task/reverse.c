#include <stdio.h>

int main()
{
    int arr[10];

    printf("Enter 10 Numbers:\n");

    for (int i = 0; i < 10; i++)
    {
        scanf("%d", &arr[i]);
    }

    printf("Numbers in Reverse Order:\n");

    for (int i = 0; i < 10; i++)
    {
        printf("%d\n", arr[9 - i]);
    }

    return 0;
}
