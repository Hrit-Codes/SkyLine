export interface filterParams extends filterSelection{
    page?:number | null ;
    perPage?:number | null;
}

interface BaseProject {
    _id?: string;
    projectName: string;
    description?: string;
    city: "London" | "Birmingham" | "Liverpool" | "Manchester";
    street: string;
    propertyType: "Residential" | "Commercial" | "Apartment";
    features?: string[];
    image?: string;
    imagePublicId?: string;
    isSold?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ResidentialProject extends BaseProject {
    propertyType: "Residential";
    totalBedrooms: number;
    totalBathrooms: number;
    landArea: number;
    noOfFloors: number;
    yearBuilt: number;
    price: number;
}

export interface ApartmentProject extends BaseProject {
    propertyType: "Apartment";
    floorNumber: number;
    totalRooms: number;
    totalBathrooms: number;
    furnished: boolean;
    price: number;
}

export interface CommercialProject extends BaseProject {
    propertyType: "Commercial";
    totalFloorArea: number;
    rentPerMonth: number;
    price?: never; 
}

export type projectCardData =
  | ResidentialProject
  | ApartmentProject
  | CommercialProject;


export interface IProject {
    _id: string;             
    projectName: string;
    city: string;
    street: string;
    priceRange: number;        
    propertyType: 'Residential' | 'Commercial' | 'Apartment' | string;
    image?: string;   
    isSold:boolean;      
    imagePublicId?: string;
    createdAt: string;       
    updatedAt: string;       
    __v: number;             
}

export interface filterSelection{
    propertyType?:string | undefined,
    priceRange?:number | null ,
    city?:string | null 

}

export interface projectResponse{
        data:{
            message:string,
            data:projectCardData[];
            page:number;
            perPage:number,
            totalMatchedProjects:number;
        };
        status:number;
    }

export interface Property {
    _id: string;
    projectName: string;
    city:"London"|"Birmingham"|"Liverpool"|"Manchester"
    street:string
    image: string;
    description: string;
    propertyType: "Residential" | "Apartment" | "Commercial";
    features: string[];


    totalBedrooms?: number;
    totalBathrooms?: number;
    landArea?: number;
    totalRooms?: number;
    furnished?: boolean;
    totalFloorArea?: number;
    price?:number,
    rentPerMonth?:number
}

export interface AllListingsProps {
    isLoading: boolean;
    filteredProjectData: projectCardData[];
    prevPage: () => void;
    nextPage: () => void;
    currentPage: number;
    totalPages: number;
    totalMatchedProjects:number;
    handleViewStatus: () => void;

}

export interface ListingSection2Props {
  isLoading: boolean;
  filteredProjectData: projectCardData[];
  handleViewStatus: () => void;
}

export interface inquiry{
    fullname:string,
    email:string,
    phoneno:string,
    address:string,
    message:string
}