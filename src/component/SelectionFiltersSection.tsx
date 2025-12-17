import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { filterSelection } from "@/interfaces/project";

interface SelectionFilterProps{
    handleSelectChange:(key:string, value:string)=>void;
    selectedFilters:filterSelection
}

export default function SelectionFiltersSection({handleSelectChange,selectedFilters}:SelectionFilterProps){
    return(
        <div className="w-full mb-12 px-4 md:px-8 lg:px-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">

                    {/* City */}
                    <div className="space-y-2">
                        <h3 className="font-medium text-gray-700">City</h3>
                        <Select onValueChange={v => handleSelectChange("city", v)}>
                            <SelectTrigger className="w-full"><SelectValue placeholder="City" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="All">All</SelectItem>
                                <SelectItem value="London">London</SelectItem>
                                <SelectItem value="Birmingham">Birmingham</SelectItem>
                                <SelectItem value="Liverpool">Liverpool</SelectItem>
                                <SelectItem value="Manchester">Manchester</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Category */}
                    <div className="space-y-2">
                        <h3 className="font-medium text-gray-700">Property Type</h3>
                        <Select onValueChange={v => handleSelectChange("propertyType", v)} defaultValue={selectedFilters.propertyType}>
                            <SelectTrigger className="w-full"><SelectValue placeholder="Property Type" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="All">All</SelectItem>
                                <SelectItem value="Residential">Residential</SelectItem>
                                <SelectItem value="Commercial">Commercial</SelectItem>
                                <SelectItem value="Apartment">Apartment</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Price */}
                    <div className="space-y-2">
                        <h3 className="font-medium text-gray-700">By Price</h3>
                        <Select onValueChange={v => handleSelectChange("priceRange", v)}>
                            <SelectTrigger className="w-full"><SelectValue placeholder="Price Range" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="All">All</SelectItem>
                                <SelectItem value="0-300000">Below £300,000</SelectItem>
                                <SelectItem value="300000-500000">£300,000 - £500,000</SelectItem>
                                <SelectItem value="500000-750000">£500,000 - £750,000</SelectItem>
                                <SelectItem value="750000-1000000">£750,000 - £1 Million</SelectItem>
                                <SelectItem value="1000000-max">Above £1 Million</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                </div>
        </div>
    )

}