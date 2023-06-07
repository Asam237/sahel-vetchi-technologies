export interface mangaOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
}
export const mangaOptions: readonly mangaOption[] = [
    { value: 'Action', label: 'Action', color: '#00B8D9' },
    { value: 'Science', label: 'Science', color: '#0052CC' },
    { value: 'Sport', label: 'Sport', color: '#5243AA' },
    { value: 'Football', label: 'Football', color: '#FF5630', isFixed: true },
    { value: 'Racing', label: 'Racing', color: '#FF8B00' },
    { value: 'Motor', label: 'Motor', color: '#FFC400' },
    { value: 'Fiction', label: 'Fiction', color: '#36B37E' },
    { value: 'Aventure', label: 'Aventure', color: '#00875A' },
    { value: 'Vampire', label: 'Vampire', color: '#253858' },
    { value: 'Romance', label: 'Romance', color: '#666666' },
];

export const datas = {
    items: [
        {
            logo: require("../images/opm.png"),
            title: "One Punch Man",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa dolor eaque facilis numquam obcaecati sapiente, sunt totam vitae? Blanditiis eligendi",
            stars: 5,
            tags: ["Action", "Combat"]
        },
        {
            logo: require("../images/naruto.png"),
            title: "Naruto",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa dolor eaque facilis numquam obcaecati sapiente, sunt totam vitae? Blanditiis eligendi",
            stars: 5,
            tags: ["Action", "Romance"]
        },
        {
            logo: require("../images/bl.png"),
            title: "Blue Lock",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa dolor eaque facilis numquam obcaecati sapiente, sunt totam vitae? Blanditiis eligendi",
            stars: 5,
            tags: ["Action", "Football"]
        },
        {
            logo: require("../images/mha.png"),
            title: "MHA",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa dolor eaque facilis numquam obcaecati sapiente, sunt totam vitae? Blanditiis eligendi",
            stars: 5,
            tags: ["Action", "Combat"]
        }
    ]
}
