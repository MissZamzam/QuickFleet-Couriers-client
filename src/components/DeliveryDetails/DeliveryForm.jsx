import React, {useState} from 'react';
import './DeliveryForm.css'
import TextField from '@mui/material/TextField';

function DeliveryForm() {

    const [receiverName, setReceiverName] = useState('')
    const [receiverContact, setReceiverContact] = useState('')
    const [pickupInstructions, setPickupInstructions] = useState('')
    const [deliveryInstructions, setDeliveryInstructions] = useState('')
    const [packageType, setPackageType] = useState('')
    const [packageDetails, setPackageDetails] = useState('')

  return (
    <div>
        <div class="flex justify-center mb-4">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img class=" w-full h-24 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">Deliver To</h5>
                    <form class="w-full max-w-sm">
                        <div class="flex items-center py-2">
                            <TextField id="standard-basic" label="Receiver Name" value={receiverName} variant="standard" onChange={(e)=> setReceiverName(e.target.value)} />
                        </div>
                        <div class="flex items-center py-2">
                        <TextField id="standard-basic" label="Receiver Contact" value={receiverContact} variant="standard" onChange={(e)=> setReceiverContact(e.target.value)} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="flex justify-center mb-4">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">Instructions</h5>
                    <form class="w-full max-w-sm">
                        <div class="flex items-center py-2">
                            <TextField id="standard-basic" label="Receiver Contact" value={pickupInstructions} variant="standard" onChange={(e)=> setPickupInstructions(e.target.value)} />
                        </div>
                        <div class="flex items-center py-2">
                            <TextField id="standard-basic" label="Receiver Contact" value={deliveryInstructions} variant="standard" onChange={(e)=> setDeliveryInstructions(e.target.value)} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="flex justify-center mb-4">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">Package Details</h5>
                    <form class="w-full max-w-sm">
                        <div class="flex items-center py-2">
                            <TextField id="standard-basic" label="Receiver Contact" value={packageType} variant="standard" onChange={(e)=> setPackageType(e.target.value)} />
                        </div>
                        <div class="flex items-center py-2">
                            <TextField id="standard-basic" label="Receiver Contact" value={packageDetails} variant="standard" onChange={(e)=> setPackageDetails(e.target.value)} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <button type='submit' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Deliver Courier Now
        </button>
    </div>
  )
}

export default DeliveryForm
