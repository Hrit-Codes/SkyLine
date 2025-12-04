export interface filterParams{
    category?:string | null;
    bhkno?:number | null,
    price?:number | null,
    city?:string | null,
    page?:number | null;
    perPage?:number | null;
}

export interface projectCardData{
    category?:string, 
    bhkno?:number,
    price?:number,
    street?:string, 
    city?:string,
    projectName?:string,
    image?:string
}

export interface IProject {
    _id: string;             // MongoDB unique ID
    projectName: string;
    city: string;
    street: string;
    price: number;
    bhkno?: number;          
    category: 'Residential' | 'Commercial' | 'Apartment' | string;
    image?: string;   
    isSold:boolean;      
    imagePublicId?: string;
    createdAt: string;       
    updatedAt: string;       
    __v: number;             
}

export interface projectResponse{
    data:{
        message:string,
        data:{
            message:string,
            data:IProject[];
            page:number;
            perPage:number,
            totalMatchedProjects:number;
        };
        status:number;
    }
} 