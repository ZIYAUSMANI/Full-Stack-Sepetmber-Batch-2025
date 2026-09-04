#include <stdio.h>
#include <string.h>

int main()
{
    char password[] = "hello123";
    char enter[20];
    int count = 1;
    int check = 0;

    do
    {
        printf("Enter Password: ");
        scanf("%19s", enter);

        if (strcmp(enter, password) == 0)
        {
            printf("Password Match");
            check = 1;
            break;
        }
        else
        {
            printf("Password Not Match\n");
        }

        count++;

    } while (count <= 3);

    if (check == 0)
    {
        printf("3 Attempts Completed");
    }

    return 0;
}
