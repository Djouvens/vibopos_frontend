import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

const shiftData = {
    cashier: {
        fullName: "Termed Tertulien"
    },
    shiftStart: "Aug 8, 2025, 09:34 AM",
    shiftEnd: ""
}
const ShiftInformation = () => {
  return (
    <Card>
        <CardContent>
            <h2 className='text-xl font-semibold mb-4'>Shift Enfòmasyon</h2>
            <div className='space-y-2'>
                <div className='flex justify-between'>
                <span className='text-muted-foreground'>Kesye/è:</span>
                <span className='font-meduim'>{shiftData.cashier.fullName}</span>
            </div>
            <div className='flex justify-between'>
                <span className='text-muted-foreground'>Dat kòmansman:</span>
                <span className='font-meduim'>{shiftData.shiftStart}</span>
            </div>
             <div className='flex justify-between'>
                <span className='text-muted-foreground'>Dat Finisman:</span>
                <span className='font-meduim'>{shiftData.shiftEnd ? shiftData.shiftEnd : "an kou .."}</span>
            </div>
             <div className='flex justify-between'>
                <span className='text-muted-foreground'>Dirasyon:</span>
                <span className='font-meduim'>{"8 è"}</span>
            </div>
            </div>
        </CardContent>
    </Card>
  )
}

export default ShiftInformation