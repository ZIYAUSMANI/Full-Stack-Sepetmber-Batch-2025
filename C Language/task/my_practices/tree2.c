#include <stdio.h>
#include <stdlib.h>

struct node
{
    int num;
    struct node *left, *right;
};

struct node *createnode(int);
struct node *push(struct node *, int);
void inorder(struct node *);
void preorder(struct node *);
void postorder(struct node *);
int findmin(struct node *);
int findmax(struct node *);
int fulltree(struct node *);
int menu();
struct node *deletleaf(struct node *, int);
void swap(struct node *, struct node *);

struct node *root = NULL;

int main()
{
    int x, m, c, d;

    while (1)
    {
        m = menu();

        switch (m)
        {
        case 1:
            printf("Enter a Number : ");
            scanf("%d", &x);
            root = push(root, x);
            break;

        case 2:
            printf("==inorder traverser==\n");
            inorder(root);
            break;

        case 3:
            printf("==preorder traverser==\n");
            preorder(root);
            break;

        case 4:
            printf("==postorder traverser==\n");
            postorder(root);
            break;

        case 5:
            if (root == NULL)
                printf("Tree is empty\n");
            else
            {
                c = findmin(root);
                printf("minimum number = %d\n", c);
            }
            break;

        case 6:
            if (root == NULL)
                printf("Tree is empty\n");
            else
            {
                c = findmax(root);
                printf("maximum number = %d\n", c);
            }
            break;

        case 7:
            c = fulltree(root);

            if (c == 1)
                printf("full binary tree\n");
            else if (c == 0)
                printf("not a full binary tree\n");
            else
                printf("tree is empty\n");

            break;

        case 8:
            printf("enter delete number = ");
            scanf("%d", &d);
            root = deletleaf(root, d);
            break;

        case 9:
            exit(0);
        }
    }

    return 0;
}

int menu()
{
    int choice;

    printf("\n1.push\n");
    printf("2.inorder\n");
    printf("3.preorder\n");
    printf("4.postorder\n");
    printf("5.minimum number\n");
    printf("6.maximum number\n");
    printf("7.full tree\n");
    printf("8.deletleaf\n");
    printf("9.exit\n");
    printf("=========================\n");
    printf("enter the choice = ");
    scanf("%d", &choice);

    if (choice > 9 || choice < 1)
    {
        printf("invalid choice!\n");
        return menu();
    }

    return choice;
}

struct node *createnode(int n)
{
    struct node *pp;

    pp = (struct node *)malloc(sizeof(struct node));

    pp->num = n;
    pp->left = NULL;
    pp->right = NULL;

    return pp;
}

struct node *push(struct node *r, int n)
{
    if (r == NULL)
        return createnode(n);

    if (n < r->num)
        r->left = push(r->left, n);
    else
        r->right = push(r->right, n);

    return r;
}

void inorder(struct node *r)
{
    if (r != NULL)
    {
        inorder(r->left);
        printf("%d\n", r->num);
        inorder(r->right);
    }
}

void preorder(struct node *r)
{
    if (r != NULL)
    {
        printf("%d\n", r->num);
        preorder(r->left);
        preorder(r->right);
    }
}

void postorder(struct node *r)
{
    if (r != NULL)
    {
        postorder(r->left);
        postorder(r->right);
        printf("%d\n", r->num);
    }
}

int findmin(struct node *r)
{
    if (r->left == NULL)
        return r->num;

    return findmin(r->left);
}

int findmax(struct node *r)
{
    if (r->right == NULL)
        return r->num;

    return findmax(r->right);
}

int fulltree(struct node *r)
{
    if (r == NULL)
        return 2;

    if (r->left == NULL && r->right == NULL)
        return 1;

    if (r->left != NULL && r->right != NULL)
        return fulltree(r->left) && fulltree(r->right);

    return 0;
}

void swap(struct node *a, struct node *b)
{
    int temp;

    temp = a->num;
    a->num = b->num;
    b->num = temp;
}

struct node *deletleaf(struct node *r, int delet)
{
    struct node *temp;

    if (r == NULL)
    {
        printf("Number not found\n");
        return NULL;
    }

    if (delet < r->num)
    {
        r->left = deletleaf(r->left, delet);
    }
    else if (delet > r->num)
    {
        r->right = deletleaf(r->right, delet);
    }
    else
    {
        if (r->left == NULL && r->right == NULL)
        {
            printf("delete node = %d\n", r->num);
            free(r);
            return NULL;
        }

        if (r->left == NULL)
        {
            temp = r->right;

            while (temp->left != NULL)
                temp = temp->left;

            r->num = temp->num;
            r->right = deletleaf(r->right, temp->num);
        }
        else if (r->right == NULL)
        {
            temp = r->left;

            while (temp->right != NULL)
                temp = temp->right;

            r->num = temp->num;
            r->left = deletleaf(r->left, temp->num);
        }
        else
        {
            temp = r->right;

            while (temp->left != NULL)
                temp = temp->left;

            r->num = temp->num;
            r->right = deletleaf(r->right, temp->num);
        }
    }

    return r;
}