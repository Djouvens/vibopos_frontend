import { Card, CardContent } from '@/components/ui/card'
import { CreditCard } from 'lucide-react'
import React from 'react'

const shiftData = {
    paymentSummaries: [
        {
            type: "CASH",
            totalAmount: 2556,
            transactionCount: 6
        },
        {
            type: "CARD",
            totalAmount: 6532,
            transactionCount: 15
        }
    ],
    totalSales: 1256,
}
const PaymentSummaryCard = () => {
    return (
        <Card>
            <CardContent>
                <h2 className='text-xl font-semibold mb-4'> Rezime Pèman</h2>
                <div className='space-y-4'>
                    {
                        shiftData.paymentSummaries.map(
                            (payment) =>
                                <div className='flex items-center' key={payment.type}>
                                    <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4'>

                                    <CreditCard/>

                                    </div>

                                    <div className='flex-1'>
                                        <div className='flex justify-between'>
                                            <span className='font-meduim'>{payment.type}</span>
                                            <span className='flex items-baseline gap-1'>
                                                <span className='font-bold'>{payment.totalAmount}</span>
                                                <span className="text-sm text-muted-foreground">HTG</span>
                                            </span>
                                        </div>
                                        <div className='flex justify-between text-sm text-muted-foreground'>
                                            <span className='font-meduim'> {payment.transactionCount} Tranzaksyon</span>
                                            <span className='font-meduim'>{((payment.totalAmount / shiftData.totalSales) * 100).toFixed(1)}%</span>
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

export default PaymentSummaryCard