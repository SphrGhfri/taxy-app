export type TItemType = {
    name: string;
    slug: string;
    path?: string;
    items?: TItemType[];
}


export const MenuItems: TItemType[] = [
    {
        name: 'Home',
        slug: 'home',
        path: '/',
    },
    {
        name: 'Parent01',
        slug: 'parent01',
        items: [
            {
                name: 'Child01',
                slug: 'child01',
                path: '/parent01/child01',
            },
            {
                name: 'Child02',
                slug: 'child02',
                path: '/parent01/child02',
            },
            {
                name: 'Child03',
                slug: 'child03',
                path: '/parent01/child03',
            }

        ],
    },
    {
        name: 'Parent02',
        slug: 'parent02',
        items: [
            {
                name: 'Child01',
                slug: 'child01',
                path: '/parent02/child01',
            },
            {
                name: 'Child02',
                slug: 'child02',
                path: '/parent02/child02',
            }

        ],
    },

];
