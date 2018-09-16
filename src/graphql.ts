export enum CurrencyInput {
    NA = 'NA',
    USD = 'USD',
    EU = 'EU',
    PD = 'PD',
    AUD = 'AUD',
}

export interface ChangePasswordInput {
    oldPassword: string;
    newPassword: string;
}

export interface CreateBrandInput {
    name: string;
    description?: string;
    price: number;
    currency: CurrencyInput;
    brandId: string;
}

export interface CreateProductInput {
    name: string;
    description?: string;
    price: number;
    currency: CurrencyInput;
    brandId: string;
}

export interface CreateUserInput {
    username: string;
    displayName: string;
    email?: string;
    mobile?: string;
    password: string;
}

export interface UpdateProductInput {
    name?: string;
    description?: string;
    price?: number;
    currency?: CurrencyInput;
}

export interface IEntity {
    _id: string;
    _key: string;
    _rev: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    username: string;
}

export interface INode {
    _id: string;
    _key: string;
    _rev: string;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export interface AggregateBrand {
    count: number;
}

export interface AggregateProduct {
    count: number;
}

export interface AggregateUser {
    count: number;
}

export interface AuthPayload {
    refreshToken: string;
    token: string;
    expireDate: DateTime;
    user: User;
}

export interface Brand extends INode {
    _id: string;
    _key: string;
    _rev: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    slug: string;
    name: string;
    price: Price;
    inventory: number;
    brand: Brand;
}

export interface BrandConnection {
    pageInfo: PageInfo;
    edges?: BrandEdge[];
    aggregate: AggregateBrand;
}

export interface BrandEdge {
    node: Brand;
    cursor: string;
}

export interface BusinessAnalytics {
    relevance?: number;
    views: number;
    totalProducts?: number;
    totalProductsSold?: number;
    totalCustomersRetained?: number;
    currentMonthSales?: number;
    previousMonthSales?: number;
    previousMonthProfit?: number;
    currentMonthProfit?: number;
}

export interface IMutation {
    signup(input?: CreateUserInput): User | Promise<User>;
    signupWithEmail(input?: CreateUserInput): AuthPayload | Promise<AuthPayload>;
    signupWithTwitter(input?: CreateUserInput): AuthPayload | Promise<AuthPayload>;
    signupWithFacebook(input?: CreateUserInput): AuthPayload | Promise<AuthPayload>;
    loginWithEmail(input?: CreateUserInput): AuthPayload | Promise<AuthPayload>;
    loginWithFacebook(input?: CreateUserInput): AuthPayload | Promise<AuthPayload>;
    loginWithTwitter(input?: CreateUserInput): AuthPayload | Promise<AuthPayload>;
    logout(input?: CreateUserInput): AuthPayload | Promise<AuthPayload>;
    refreshToken(): AuthPayload | Promise<AuthPayload>;
    resetPassword(): User | Promise<User>;
    forgotPassword(): AuthPayload | Promise<AuthPayload>;
    changePassword(): AuthPayload | Promise<AuthPayload>;
    createProduct(input: CreateProductInput): Product | Promise<Product>;
    deleteProduct(id: string): Product | Promise<Product>;
    updateProduct(input?: UpdateProductInput): Product | Promise<Product>;
}

export interface PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
    endCursor?: string;
}

export interface Price {
    basePrice: number;
    currency: CurrencyInput;
    currentPrice: number;
}

export interface Product extends INode {
    _id: string;
    _key: string;
    _rev: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    slug: string;
    name: string;
    price: Price;
    priceId?: string;
    inventory: number;
    brand: Brand;
    brandId?: string;
    analytics?: ProductAnalytics;
}

export interface ProductAnalytics {
    relevance?: number;
    views: number;
    totalProducts?: number;
    totalProductsSold?: number;
    totalCustomersRetained?: number;
    currentMonthSales?: number;
    previousMonthSales?: number;
    previousMonthProfit?: number;
    currentMonthProfit?: number;
}

export interface ProductConnection {
    pageInfo: PageInfo;
    edges?: ProductEdge[];
    aggregate: AggregateProduct;
}

export interface ProductEdge {
    node: Product;
    cursor: string;
}

export interface IQuery {
    currentUser(): User | Promise<User>;
    temp__(): boolean | Promise<boolean>;
    product(id: string): Product | Promise<Product>;
}

export interface ISubscription {
    userCreated(): User | Promise<User>;
    userLogout(): User | Promise<User>;
    userLogin(): User | Promise<User>;
    profileUpdate(): User | Promise<User>;
}

export interface User extends IEntity {
    _id: string;
    _key: string;
    _rev: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    username: string;
    displayName: string;
    email?: string;
    mobile: string;
    password: string;
}

export interface UserConnection {
    pageInfo: PageInfo;
    edges?: UserEdge[];
    aggregate: AggregateUser;
}

export interface UserEdge {
    node: User;
    cursor: string;
}

export type DateTime = any;
export type JSON = any;
