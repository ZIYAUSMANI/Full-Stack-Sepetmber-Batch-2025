#include <stdio.h>
#include <conio.h>
void main()
{
    int arr[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, deletnum, j, i, c = 0;
    printf("enter the delete number");
    scanf("%d", &deletnum);
    for (i = 0; i < 10; i++)
    {
        if (arr[i] == deletnum)
        {
            for (j = i; j < 10 - 1; j++)
            {
                arr[j] = arr[j + 1];
            }
            c = 1;
            break;
        }
    }
    if (c == 0)
    {
        printf("it is not in list\n");
    }
    else
    {
        printf("delete number is deleted succssfully!");
        for (i = 0; i < 10 - 1; i++)
        {
            printf("%d\n", arr[i]);
        }
    }
}