import { useState } from 'react'
import Box from '../../components/box'
import { GetTransferPayload, GetTransferResponse } from '../../interfaces/transfer.interfaces';
import Navbar from '../../components/navbar';
import Title from '../../components/title';
import styles from './index.module.css';
import Button from '../../components/button';
import Input from '../../components/input';
import Select from '../../components/select';
import { getTransfers } from '../../services/transferService';
import { toast } from 'react-toastify';

const fromOptions = [
    {
        placeholder: 'IATA',
        value: 'IATA'
    }, {
        placeholder: 'ATLAS',
        value: 'ATLAS'
    }
]

const Main: React.FC = () => {
    const [transfers, setTransfers] = useState<GetTransferResponse | undefined>(undefined )  
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        if(isLoading) return

        setIsLoading(true)
    
        const { 
            fromType,
            fromCode,
            toType,
            toCode,
    
            outbound,
    
            occupancyAdults,
            occupancyChildren,
            occupancyInfants,
        } = Object.fromEntries(
            new window.FormData(event.target as HTMLFormElement)
        )
    
        const payload: GetTransferPayload = {
            from: {
                type: fromType as 'IATA' | 'ATLAS',
                code: fromCode as string
            },
            to: {
                type: toType as 'IATA' | 'ATLAS',
                code: toCode as string
            },
            outboundDate: outbound as string,
            occupancy: {
                adults: Number(occupancyAdults),
                children: Number(occupancyChildren),
                infants: Number(occupancyInfants)
            }
        }

        console.log(payload)
    
        try {
            const response = await getTransfers(payload)

            setTransfers(response)
        } catch(error: any) {
            toast.error(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Box>
            <div className={styles.main}>
                <Title text='Welcome'/>
                <Navbar />

                {transfers ? (
                    <div>
                        <p></p>
                    </div>
                ) : (
                    <>
                    {isLoading ? (
                        <div className={styles.mainForm}>
                            <p>Loading...</p>
                        </div>
                    ) : (
                        <div className={styles.mainForm}>
                            <form onSubmit={handleSubmit}>
                                <div className={styles.from}>
                                    <p>From</p>
                                    <Select name='fromType' options={fromOptions}/>
                                    <Input name='fromCode' type='text' placeholder='Code'/>
                                </div>
                                <div className={styles.from}>
                                    <p>To</p>
                                    <Select name='toType' options={fromOptions}/>
                                    <Input name='toCode' type='text' placeholder='Code'/>
                                </div>
                                <div className={styles.outbound}>
                                    <p>Outbound Date</p>
                                    <Input name='outbound' type='date' placeholder='Code'/>
                                </div>

                                <h4>Occupancy</h4>
                                <div className={styles.occupancy}>
                                    <Input name='occupancyAdults' type='number' placeholder='Adults'/>
                                    <Input name='occupancyChildren' type='number' placeholder='Children'/>
                                    <Input name='occupancyInfants' type='number' placeholder='Infants'/>
                                </div>
                            
                                <Button text='Search' type='submit' color='cold' icon='search'/> 
                            </form>
                        </div>
                    )}
                    </>
                )}
            </div>
        </Box>
    );
}

export default Main