export type FooterLinkType = {
    icon: any
    path: string
}

export type FooterLinkConditionType = {
    name: string
    path: string
}

export type FeatureItemType = {
    icon: any
    title: string
    content: string
}

export type TeamItemType = {
    pic: any
    name: string
    role: string
    description: string
}

export type FaqItemType = {
    title: string
    content: string
    lists?: string[]
}

export type HeaderItemType = {
    name: string
    path: string
}

export type AuthLoginType = {
    email: string
    password: string
}

export type AuthCreateType = {
    fullname: string
    email: string
    password: string
    phone: string
    adress: string
}

export type OrganisationCreateType = {
    fullname: string
    email: string
    phone: string
    adress: string
    code: string
    user: string
}

export type ItemProductType = {
    _id?: any
    nameItem: String
    descriptionItem: String
    prixAchatItem?: String
    prixGrosItem?: String
    prixVenteItem?: Boolean
    createdAt?: any
    organisation?: any
}

export type ItemType = {
    _id?: any
    nameItem: String
    descriptionItem: String
    urlItem: String
    path: String
    reportItem?: Boolean
    status?: String
    createdAt?: any
    publicLink?: boolean
    user?: any
}

export type ItemDesc = {
    title: string
    description: string
    items: string[]
    picture: any
    myswitch?: boolean
}