import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

const shiftData = {
    refunds : [
        {
            id: 54,
            orderId: 2,
            reason: "move evaliasyon",
            totalAmount: 8854

        },
         {
            id: 56,
            orderId: 8,
            reason: "move evaliasyon",
            totalAmount: 6562

        }
    ]
}
const RefundsTable = () => {
  return (
    
        <Card>
            <CardContent>
            <h2 className='text-xl font-semibold mb-4'>Ranbousman</h2>
                <Table>
                    <TableHeader>
                       <TableRow>
                             <TableHead className="W-[150px]">id Ranbousman</TableHead>
                             <TableHead className="W-[150px]">id Acha</TableHead>
                             <TableHead className="W-[150px]">Rezon</TableHead>
                             <TableHead className="W-[150px]">Montan</TableHead>
                       </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            shiftData.refunds.map((refund) => 
                            
                              <TableRow key={refund.id}>
                                <TableCell>RED-{refund.id}</TableCell>
                                <TableCell>ORD-{refund.orderId}</TableCell>
                                <TableCell>{refund.reason}</TableCell>
                                <TableCell>
                                    <span className='flex items-baseline gap-1'>
                                        <span>{refund.totalAmount}</span>
                                        <span className="text-sm text-muted-foreground">HTG</span>
                                    </span>
                                </TableCell>
                                
                              </TableRow>

                            )
                        }
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    
  )
}

export default RefundsTable