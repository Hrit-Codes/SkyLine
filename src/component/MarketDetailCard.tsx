type props={
    value:string,
    context:string
}
export default function MarketDetailCard({value,context}:props){
    return(
        <div className="w-full">
            <div className="m-2 flex flex-col justify-center items-center">
                <div className="text-lg md:text-xl">{value}</div>
                <p className="text-center">{context}</p>
            </div>

        </div>
    )
}