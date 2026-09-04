#include <stdio.h>

int main()
{
    char fullname[50];

    printf("Enter Full Name: ");
    scanf(" %[^\n]", fullname);

    printf("Entered Name: %s", fullname);

    return 0;
}
