import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  checkObjectEmpty,
  currencyFormat,
} from "../../stogare_function/listActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import { OrderApi } from "../../api/OrderApi";
import { useNavigate } from "react-router-dom";

export const TotalOrder = () => {
  const user = JSON.parse(localStorage.getItem("UserInWeb"));
    const bill = JSON.parse(localStorage.getItem("SaveCart"))

    //console.log(bill)
const navigate = useNavigate()
  const nameInForm = useSelector((state) => state.address.NameInFormCreate);
  const phoneInForm = useSelector((state) => state.address.PhoneInFormCreate);
  const provinceInForm = useSelector(
    (state) => state.address.ProvinceInFormCreate
  );
  const districtInForm = useSelector(
    (state) => state.address.DistrictInFormCreate
  );

  const wardInForm = useSelector((state) => state.address.WardInFormCreate);
  const streetInForm = useSelector((state) => state.address.StreetInFormCreate);
  const formAddressSelected = useSelector(
    (state) => state.address.FormAddressSelected
  );

  const checkFieldNull = () => {
    return (
      nameInForm === "" ||
      phoneInForm === "" ||
      provinceInForm === "" ||
      districtInForm === "" ||
      wardInForm === "" ||
      streetInForm === ""
    );
  };


  const addToList = (bill,listSave) =>{
    if((Array.isArray(listSave)) && (bill)){
        bill.Items.map(data=>{
            const body={...data,"provider_id": bill.ProviderID,"product_option_id": data.option_id}
            listSave.push(body)
        })
    }
    return listSave
  }

  const AddNewOrder= async(body)=>{
    await OrderApi.AddNewOrder(body)
    .then((res)=>{
        if(res.status==200){
        toast("You add order success", {
            type: "success",
            autoClose: 1000,
            onClose:setTimeout(()=>{
                window.location.reload()
                localStorage.removeItem("SaveCart")
            },1500)
          });
        }
    })
  }
  
  const CreateOrderFromInputForm = () => {
    const body = {
        "user_id" : user.ID,
        "name" : nameInForm,
        "gender" : user.gender,
        "phone" : phoneInForm,
        "province" : provinceInForm,
        "district" : districtInForm,
        "ward" : wardInForm,
        "street": streetInForm,
        "card_item_ids": [parseInt(bill.ID)],
        "quantity": parseInt(localStorage.getItem("TotalQuantity")),
        "total" : parseInt(localStorage.getItem("TotalPrice")),
        "items": addToList(bill,[])
    };
    AddNewOrder(body)
  };
  const CreateOrderFromSelectAddress = () =>{
    const body = {
        "user_id" : user.ID,
        "name" : formAddressSelected.Name,
        "gender" : user.gender,
        "phone" : formAddressSelected.Phone,
        "province" : formAddressSelected.Province,
        "district" : formAddressSelected.District,
        "ward" : formAddressSelected.Ward,
        "street": formAddressSelected.Street,
        "card_item_ids": [parseInt(bill.ID)],
        "quantity": parseInt(localStorage.getItem("TotalQuantity")),
        "total" : parseInt(localStorage.getItem("TotalPrice")),
        "items": addToList(bill,[])
    };
    AddNewOrder(body)
  };


  const handleButtonPayment = (e) => {
    if (checkObjectEmpty(formAddressSelected)) {
      console.log(checkFieldNull());
      if (checkFieldNull()) {
        toast("You need to fill in all the information", {
          type: "warning",
          autoClose: 1000,
        });
      } else {
        CreateOrderFromInputForm();
      }
    } else {
        console.log(formAddressSelected)
      CreateOrderFromSelectAddress();
    }
  };


  return (
    <div className=" bg-[#F4F4FC] p-6 space-y-10">
      <ToastContainer position="top-right" newestOnTop />
      <div className=" border-b-2 border-[#E8E6F1] flex justify-between">
        <h1 className=" text-[#1D3178] text-lg">Subtotal :</h1>
        <h1 className=" text-[#1D3178] text-lg">0đ</h1>
      </div>
      <div className=" border-b-2 border-[#E8E6F1] flex justify-between">
        <h1 className=" text-[#1D3178] text-lg">Total :</h1>
        <h1 className=" text-[#1D3178] text-lg">
          {currencyFormat(parseInt(localStorage.getItem("TotalPrice")))}đ
        </h1>
      </div>
      <Button
        onClick={handleButtonPayment}
        variant="contained"
        color="success"
        className="w-full"
      >
        Process To Checkout
      </Button>
    </div>
  );
};
