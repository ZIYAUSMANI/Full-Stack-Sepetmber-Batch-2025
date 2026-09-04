#include <stdio.h>

int main()
{
    int arr[3];

    printf("Enter First Number: ");
    scanf("%d", &arr[0]);

    printf("Enter Second Number: ");
    scanf("%d", &arr[1]);

    printf("Enter Third Number: ");
    scanf("%d", &arr[2]);

    for (int i = 2; i >= 0; i--)
    {
        printf("%d ", arr[i]);
    }

    return 0;
}
