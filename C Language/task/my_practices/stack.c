#include <stdio.h>
#include <stdlib.h>

int arr[20], top = -1;

void push(int);
void traverser();
void pop();
int menu();

int menu()
{
    int choice;

    printf("\n1. Push\n2. Traverser\n3. Pop\n4. Exit\n");
    printf("=======================\n");
    printf("Enter choice = ");
    scanf("%d", &choice);

    if (choice < 1 || choice > 4)
    {
        printf("Invalid choice\n");
        return menu();
    }

    return choice;
}

void push(int x)
{
    if (top >= 19)
        printf("Stack is full!\n");
    else
    {
        top++;
        arr[top] = x;
    }
}

void traverser()
{
    int i;

    if (top == -1)
        printf("Stack is empty\n");
    else
    {
        for (i = 0; i <= top; i++)
            printf("%d\n", arr[i]);
    }
}

void pop()
{
    if (top == -1)
        printf("Stack is empty\n");
    else
    {
        printf("Delete number = %d\n", arr[top]);
        top--;
    }
}

int main()
{
    int c, n;

    while (1)
    {
        c = menu();

        switch (c)
        {
        case 1:
            printf("Enter number = ");
            scanf("%d", &n);
            push(n);
            break;

        case 2:
            traverser();
            break;

        case 3:
            pop();
            break;

        case 4:
            exit(0);
        }
    }

    return 0;
}