import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import SummaryApi from '../common'

const Demo = () => {

    const [date, setDate] = useState({
        productName:"",
        brandName:"",
        category:"",
        productImage: [],
        description:"",
        price:"",
        sellingPrice:""
    })

    const params = useParams()

    const [loading, setLoading] = useState(true)
    const productImageListLoading = new Array(4).fill(null);
    const [activeImage, setActiveImage] = useState("");

    const fetchProductDetails = async () => {

        setLoading(true);


        try{
            const response = await fetch(SummaryApi.productDetails.url , {
                method: SummaryApi.productDetails.method,
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    productId: params?.id
                })
            });

            if(!response.ok) {
                throw new Error('HTTP error ! status: ${response.status} ');
            }

            const dataResponse = await response.json();
            setData(dataResponse?.data?.productImage[0]);
            setActiveImage(dataResponse?.data?.)            
        }
    }

  return (
    <div className='container mx-auto p-4'>
        <div className='min-h-[200px] flex flex-col lg:flex-row gap-4'>

        </div>

    </div>
  )
}

export default Demo