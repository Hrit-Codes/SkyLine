import {urls} from "../config/apiUrls.tsx";
import apiClient from "@/utils/apiClient.tsx";
import { type filterParams } from "@/interfaces/project.tsx";
import { type inquiry } from "@/interfaces/project.tsx";

export const fetchFilteredProjects=async({propertyType,priceRange,city,page,perPage}:filterParams)=>{
    try{
        const baseUrl= urls.fetchFilteredProjects;
        const params= new URLSearchParams();

        if(propertyType){
            params.append("propertyType",propertyType);
        }
        if(priceRange){
            params.append("priceRange",String(priceRange));
        }
        if(city){
            params.append("city",city);
        }
        if(page){
            params.append("page",String(page));
        }
        if(perPage){
            params.append("perPage",String(perPage));
        }

        const finalUrl=`${baseUrl}?${params.toString()}`;

        const response= await apiClient.get(finalUrl);
        console.log("Response::",response);
        return response;
    }catch(error){
        console.log("Error in fetching filtered projects",error);
        throw error;
    }
}

export const getAllFilteredProjects=async({propertyType,priceRange,city,page,perPage}:filterParams)=>{
    try{
        const baseUrl= urls.getAllFilteredProjects;
        const params= new URLSearchParams();

        if(propertyType){
            params.append("propertyType",propertyType);
        }
        if(priceRange){
            params.append("priceRange",String(priceRange));
        }
        if(city){
            params.append("city",city);
        }
        if(page){
            params.append("page",String(page));
        }
        if(perPage){
            params.append("perPage",String(perPage));
        }

        const finalUrl=`${baseUrl}?${params.toString()}`;

        const response= await apiClient.get(finalUrl);
        console.log("Response::",response);
        return response;
    }catch(error){
        console.log("Error in fetching filtered projects",error);
        throw error;
    }
}

export const getFullProjectDetail = async (projectId: string) => {
    try {
        const finalUrl = `${urls.getFullProjectDetail}/${projectId}`;
        console.log("Calling:", finalUrl);

        const response = await apiClient.get(finalUrl);
        return response;
    } catch (error) {
        console.log("Error in fetching full project detail", error);
        throw error;
    }
};


export const registerInquiry=async(body:inquiry)=>{
    try{

        const response= await apiClient.post(urls.registerInquiry,body);
        console.log(response);
        return response;
    }catch(error){
        console.log("Error in registering inquiry ",error);
        throw error;
    }
}