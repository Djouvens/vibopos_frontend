import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CalendarIcon, DollarSignIcon } from 'lucide-react'
import React from 'react'

const PurchaseHistory = () => {
    const orders = [
        {
            id: 1,
            date: "2025-10-14",
            createdAt: "2025-10-14 10:00 AM",
            totalAmount: "50.00",
            status: "COMPLETED",
            paymentType:"CASH",
            items:[
                {
                    id: 545,
                    product: 
                        {
                            name: "Product A",

                        },
                        quantity: 2,
                        price: "50.55",

                },
            ]
        }
    ]
    return (
        <div className='p-4 border-t'>
            <Card>
                <CardHeader>
                    <CardTitle>Istoryal Acha</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='space-y-4'>
                        {orders.map((order) => (
                            <><div key={order.id} className='border rounded-lg p-4'>
                                <div className='flex justify-between items-start mb-3'>
                                    <div>
                                        <div>
                                            <h3 className='font-meduim'>
                                                Acha #{order.id}
                                            </h3>
                                        </div>
                                        <div className='flex items-center grap-2 text-sm text-muted-foreground mb-1'>
                                            <CalendarIcon className='h-4 w-4 mr-1 text-muted-foreground' />
                                            {order.createdAt}
                                        </div>
                                    </div>
                                    <div className='text-right'>
                                    <div className='flex items-center gap-1 mb-1'>
                                        <DollarSignIcon className='h-4 w-4 *: text-muted-foreground' />
                                        {order.totalAmount}
                                    </div>
                                    <Badge>
                                        {order.status}
                                    </Badge>
                                </div>
                                </div>
                                {/** SECTION2 */}
                                <div className='text-sm text-muted-foreground mb-2'>
                                    Pèman : {order.paymentType}
                                </div>

                                <div className='border-t pt-3'>
                                    <h4 className='text=sm font-medium mb-2'>Atik:</h4>
                                    <div className='space-y-1'>
                                        {order.items && order.items.map((item => <div key={item.id}
                                        className='flex justify-between'> 
                                            <span className='text-muted-foreground'>{item.product.name}</span>
                                            <span>{item.quantity || 1} * {item.price}</span>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                                </>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default PurchaseHistory