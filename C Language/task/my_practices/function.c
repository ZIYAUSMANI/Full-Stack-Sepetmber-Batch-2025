#include <stdio.h>
#include <conio.h>

char* getString() {
    static char str[50];

    printf("Enter your name: ");
    gets(str);   

    return str;
}

void main() {
    char *result;

    result = getString();

    printf("You entered: %s", result);

  
}