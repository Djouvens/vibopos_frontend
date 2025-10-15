import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

const shiftData = {
    topSelllingProducts: [
        {
            id: 2,
            name: "Men Geometric Print Polo",
            sellingPrice: 899,
            quantity: 5,
        },
        {
            id: 4,
            name: "Women Geometric Print Polo",
            sellingPrice: 985,
            quantity: 2,
        }
    ]
}
const TopSellingItems = () => {
  return (
    <Card>
        <CardContent>
            <h2 className='text-xl font-semibold mb-4'>Tòp Atik</h2>
            <div className='space-y-3'>
                {
                    shiftData.topSelllingProducts.map((product, index) =>
                        <div key={product.id} className='flex items-center'> 

                        <div className='w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-sm font-medium'>
                            {index+1}
                        </div>
                        <div className='flex-1'>
                            <div className='flex justify-between'>
                                <span > {product.name}</span>
                                <span className='flex items-baseline gap-1'>
                                     <span > {product.sellingPrice}</span>
                                     <span className="text-sm text-muted-foreground">HTG</span>
                                </span>
                            </div>
                            <div className='flex justify-between text-sm text-muted-foreground'>
                                <span > {product.quantity} vant inite</span>
                            </div>
                        </div>
                        </div>
                    )
                }
            </div>
        </CardContent>
    </Card>
  )
}

export default TopSellingItems