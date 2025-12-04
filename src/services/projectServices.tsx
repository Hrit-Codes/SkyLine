import {urls} from "../config/apiUrls.tsx";
import apiClient from "@/utils/apiClient.tsx";
import { type filterParams } from "@/interfaces/project.tsx";

export const fetchFilteredProjects=async({category,bhkno,price,city,page,perPage}:filterParams)=>{
    try{
        const baseUrl= urls.fetchFilteredProjects;
        const params= new URLSearchParams();

        if(category){
            params.append("category",category);
        }
        if(bhkno){
            params.append("bhkno",String(bhkno));
        }
        if(price){
            params.append("price",String(price));
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
        return response;
    }catch(error){
        console.log("Error in fetching filtered projects",error);
        throw error;
    }
}