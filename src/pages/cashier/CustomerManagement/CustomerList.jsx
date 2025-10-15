import React from 'react'
import CustomerCard from './CustomerCard'

const customers = [
    {
        id: 1,
        fullName: 'john Doe',
        email: 'john@example.com',
        phone: '1235-458-889',
        loyaltyPoints : 1546,
        totalOrders: 2565,
        totalSpent: 5535,
        averageOrderValue: 50
    },
    { 
        id: 2, 
        fullName: 'jane smith', 
        email: 'jane@example.com', 
        phone: '665-238-889',
        loyaltyPoints : 2456,
        totalOrders: 1565,
        totalSpent: 8535,
        averageOrderValue: 60
    },
    { 
        id: 3, 
        fullName: 'Alice Doe', 
        email: 'alice@example.com', 
        phone: '659-565-889',
        loyaltyPoints : 5645,
        totalOrders: 4565,
        totalSpent: 9535,
        averageOrderValue: 70 
    },
    { 
        id: 4, 
        fullName: 'bob Doe', 
        email: 'jobobhn@example.com', 
        phone: '325-002-4656',
        loyaltyPoints : 2598,
        totalOrders: 3565,
        totalSpent: 7535,
        averageOrderValue: 100

    }
]
const CustomerList = ({setSelectedCustomer}) => {
    return (
        <div className='flex-1 overflow-auto'>
            <div className='divide-y'>
                {customers.map(customer => (
                    <CustomerCard className='cursor-pointer hover:bg-accent' 
                    setSelectedCustomer={setSelectedCustomer}
                    key={customer.id} customer={customer} />
                ))}
            </div>
        </div>
    )
}

export default CustomerList