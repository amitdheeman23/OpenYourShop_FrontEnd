export interface sellerPayload{
    name:string,
    email:string,
    role:string,
    isActive:boolean,
    createdAt:string
}

export type SellerActionType = 'edit' | 'add' | 'delete' |'view';