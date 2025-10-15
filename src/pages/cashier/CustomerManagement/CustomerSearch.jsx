import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PlusIcon } from 'lucide-react'
import React, { useState } from 'react'
import CustomerForm from './CustomerForm'

const CustomerSearch = () => {
    const [showCustomerFrom, setShowCustomerFrom] = useState(false);
  return (
    <div className='p-4 border-b'>
        <div className='flex gap-2'>
            <div className='relative flex-1'>
               
                <Input className={"py-5"} placeholder='chache kliyan ...' type={"text"}  />
            </div>
            <Button onClick = {() => setShowCustomerFrom(true)} className={"py-5"}>
                <PlusIcon className='h-4 w-4 mr-2'/> Ajoute Nouvo kliyan
            </Button>
        </div>
        <CustomerForm showCustomerFrom = {showCustomerFrom}
        setShowCustomerFrom = {setShowCustomerFrom}/>
    </div>
  )
}

export default CustomerSearch