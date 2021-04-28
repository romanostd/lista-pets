export interface PetModel
{
    id: string;
    category: any;
    name: string;
    photoUrls: any[];
    tags: any;
    status: 'available' | 'pending' | 'sold';
}

export class category {
    
    id?: string;
    name?: string;

}

export class Tag {
    
    id?: string;
    name?: string;

}