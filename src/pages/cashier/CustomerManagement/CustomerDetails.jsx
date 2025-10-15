import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PlusIcon, StarIcon, UserIcon } from 'lucide-react'
import React from 'react'

const CustomerDetails = ({ customer }) => {
    if (!customer) {
        return <div className='flex flex-col items-center justify-center h-full text-muted-foreground'>
            <UserIcon className='h-4 w-4 mr-1' />
            <p className='mt-4'> Pa gen kliyan ki seleksyone</p>
        </div>
    }
    return (
        <div className='p-4'>
            <div className='flex justify-between items-start mb-6'>
                <div>
                    <h2>{customer.fullName}</h2>
                    <p className='text-sm text-muted-foreground'>{customer.email}</p>
                    <p className='text-sm text-muted-foreground'>{customer.phone}</p>
                </div>
                <Button>
                    <PlusIcon className='h-4 w-4 mr-1' /> Ajoute Pwen
                </Button>

            </div>
            {/* SECTION DETAILS CARD*/}
            <div className='grid grid-cols-1 gap-4 mb-6 md:grid-cols-3'>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Pwen Fidelite
                        </CardTitle>
                        <CardContent>
                            <div className='flex items-center gap-2'>
                                <StarIcon className='h-4 w-4 mr-1 text-yellow-500' />
                                <span>{customer.loyaltyPoints}</span>
                            </div>
                        </CardContent>
                    </CardHeader>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>
                            Depans Total
                        </CardTitle>
                        <CardContent>
                            <div className='flex items-center gap-2'>
                                <StarIcon className='h-4 w-4 mr-1 text-yellow-500' />
                                <span>{customer.totalOrders}</span>
                            </div>
                        </CardContent>
                    </CardHeader>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>
                            Acha Total
                        </CardTitle>
                        <CardContent>
                            <div className='flex items-center gap-2'>
                                <StarIcon className='h-4 w-4 mr-1 text-yellow-500' />
                                <span>{customer.totalSpent}</span>
                            </div>
                        </CardContent>
                    </CardHeader>
                </Card>
            </div>

            {/* SECTION DETAILS ORDER VALUE*/}
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>valè Mwayèn Acha</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center gap-2">
                        <p className="text-lg font-bold text-muted-foreground">
                            {customer.averageOrderValue}
                        </p>
                         <p className="text-sm text-muted-foreground">HTG</p>
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}

export default CustomerDetails