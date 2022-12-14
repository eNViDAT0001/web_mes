import React from 'react'
import { useParams } from 'react-router-dom'
import { CreateAddressForm } from '../../components/Account/AddressDetail/CreateAddressForm'
import ChangeBarInformation from '../../components/Account/GeneralLayout/ChangeBarInformation'
import HeaderBar from '../../components/StoreOtherComponent/HeaderBar'

const CreateAddressPage = () => {
  return (
    <div>
        <HeaderBar name1="Home . Account . Address" name2=" . Detail"/>
            <div className="flex justify-center">
                <div className="w-[85%] h-full flex flex-row ">
                    <ChangeBarInformation />
                    <CreateAddressForm/>
                </div>
            </div>
    </div>
  )
}

export default CreateAddressPage