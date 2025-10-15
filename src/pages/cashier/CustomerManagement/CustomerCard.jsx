import { Badge } from '@/components/ui/badge'
import { StarIcon } from 'lucide-react'
import React from 'react'

const CustomerCard = ({ customer, setSelectedCustomer }) => {
  return (
    <div className='p-4 cursor-pointer hover:bg-accent'
      onClick={() => {
        console.log("kliyan seleksyone");
        setSelectedCustomer(customer);
      }}
    >
      <div className='flex items-start justify-between'>
        <div>
          <h3 className='font-meduim'>{customer.fullName}</h3>
          <p className='text-sm text-muted-foreground' > {customer.email}</p>
          <p className='text-sm text-muted-foreground' > {customer.phone}</p>
        </div>

        <Badge>
          <StarIcon className='h-4 w-4 mr-1' />
          {customer.loyaltyPoints} Pwen
        </Badge>
      </div>
    </div>
  )
}

export default CustomerCard