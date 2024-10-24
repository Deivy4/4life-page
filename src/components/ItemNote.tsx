export default function ItemNote({contentText} : {contentText : String}){
    return (
        <div className=" h-[500px] w-[320px] rounded border-2">
            <p className="">{contentText}</p>
        </div>
    )
}