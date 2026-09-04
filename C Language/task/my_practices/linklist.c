#include <stdio.h>
#include <conio.h>
#include <stdlib.h>
struct node
{
    int num;
    struct node *next;
};
struct node *start = '\0', *last, *nn, *pt;
struct node *creactnode(int n)
{
    struct node *ppt;
    ppt = (struct node *)malloc(sizeof(struct node));
    ppt->num = n;
    ppt->next = '\0';
    return ppt;
}
void insert(int n)
{
    nn = creactnode(n);
    if (start == '\0')
        start = last = nn;
    else
    {
        last->next = nn;
        last = nn;
    }
}
void traverser(struct node *s)
{
    for (pt = s; pt != '\0'; pt = pt->next)
        printf("%d ->", pt->num);
}
void main()
{
    int c, n;
    while (1)
    {
        printf("1.insert\n2.traverser\n3.exit\n");
        printf("enter the choice");
        scanf("%d", &c);
        switch (c)
        {
        case 1:
            printf("enter number =");
            scanf("%d", &n);
            insert(n);
            break;
        case 2:
            traverser(start);
            break;
        case 3:
            exit(0);
        }
    }
}