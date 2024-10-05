import { useRouter } from "next/router";

const DetailProduct = () => {
    const {query} = useRouter();
    console.log(query);
    
    return (
        <div>
            <p>Detail Product</p>
            <p>Product :{query.id} </p>
        </div>
    )
}

export default DetailProduct;