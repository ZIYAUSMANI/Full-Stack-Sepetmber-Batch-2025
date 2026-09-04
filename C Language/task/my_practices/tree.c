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
void sreaching(struct node *, int);
int totalnode(struct node *);
int totalleafnode(struct node *);
int totalnonleafnode(struct node *);
int heightoftree(struct node *);
int degreeoftree(struct node *);
int depthoftree(struct node *);
int menu();

int count, leafcount, nonleafcount;
struct node *root = NULL;

int main()
{
    int x, m, s, c, q;

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
            q = degreeoftree(root);
            printf("Degree of tree = %d\n", q);
            break;

        case 4:
            exit(0);
        }
    }

    return 0;
}

int menu()
{
    int choice;

    printf("\n1.push\n2.inorder\n3.degree of tree\n4.exit\n");
    printf("=========================\n");
    printf("enter the choice = ");
    scanf("%d", &choice);

    if (choice > 4 || choice < 1)
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

int degreeoftree(struct node *r)
{
    int leftdegree, rightdegree;

    if (r == NULL)
        return 0;

    leftdegree = degreeoftree(r->left);
    rightdegree = degreeoftree(r->right);

    if (r->left != NULL && r->right != NULL)
        return 2;

    if (r->left != NULL || r->right != NULL)
    {
        if (leftdegree > rightdegree)
            return leftdegree;
        else
            return rightdegree;
    }

    return 0;
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

void sreaching(struct node *r, int sreach)
{
    if (r == NULL)
    {
        printf("sreach number is not in tree\n");
        return;
    }

    if (sreach == r->num)
        printf("sreach number = %d\n", sreach);
    else if (sreach < r->num)
        sreaching(r->left, sreach);
    else
        sreaching(r->right, sreach);
}

int totalnode(struct node *r)
{
    if (r != NULL)
    {
        count++;
        totalnode(r->left);
        totalnode(r->right);
    }

    return count;
}

int totalleafnode(struct node *r)
{
    if (r == NULL)
        return leafcount;

    if (r->left == NULL && r->right == NULL)
        leafcount++;

    totalleafnode(r->left);
    totalleafnode(r->right);

    return leafcount;
}

int totalnonleafnode(struct node *r)
{
    if (r == NULL)
        return nonleafcount;

    if (r->left != NULL || r->right != NULL)
        nonleafcount++;

    totalnonleafnode(r->left);
    totalnonleafnode(r->right);

    return nonleafcount;
}

int heightoftree(struct node *r)
{
    int lh, rh;

    if (r == NULL)
        return 0;

    lh = heightoftree(r->left);
    rh = heightoftree(r->right);

    return (lh > rh ? lh + 1 : rh + 1);
}

int depthoftree(struct node *r)
{
    int ld, rd;

    if (r == NULL)
        return 0;

    ld = depthoftree(r->left);
    rd = depthoftree(r->right);

    return (ld > rd ? ld + 1 : rd + 1);
}