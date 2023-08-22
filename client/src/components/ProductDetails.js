import React, { useEffect, useState } from "react";

const ProductDetails = (props) => {

    let [activeimg, setActiveImg] = useState(0);
    let quantityList = [];
    if (typeof props.selectedItem.stockQty === "number" && quantityList.length === 0) {
        for (let i = 0; i < props.selectedItem.stockQty; i++) {
            quantityList.push((1 + i));
        }
    }

    const SetPurchaseQty = () => {
        props.setPurchaseQty((purchaseQty) => document.querySelector("[name='selecteditemQty']").value);
    }


    return (<div className="row p-2">

        {props.selectedItem.itemName ?
            <div className="row">
                <div className="col-md-12"><h4 className="text-capitalize">{props.selectedItem.itemName}</h4></div>
                <div className="col-md-6">

                    <div className="row px-2 d-flex justify-content-center">{props.selectedItem.images ?
                        props.selectedItem.images.map((src, i) => {
                            return (<div key={i} className={i === activeimg ? "active col-2 pointer productThumb" : "col-2 pointer productThumb"} onClick={() => setActiveImg((activeimg) => i)}><img src={src} className="img-fluid" /></div>)
                        })
                        : null}

                        <div className="col-md-12 selectedProdActiveImg d-flex justify-content-center px-2">
                            <img src={props.selectedItem.images[activeimg]} className="img-fluid mt-3" />
                        </div>

                    </div>
                </div>
                <div className="col-md-6">
                    <h3 className="text-capitalize">${props.selectedItem.price}</h3>
                    <h4 className="text-capitalize">Category: {props.selectedItem.category}</h4>
                    <hr />
                    <p>{props.selectedItem.details}</p>
                    <hr />
                    <select className="form-control" name="selecteditemQty">
                        {quantityList.length > 0 ? quantityList.map((num, i) => {
                            return (<option key={i} value={num}>{num}</option>)
                        }) : null}

                    </select>
                    <button className="btn btn-success w-100" onClick={() => props.submitToCart()}>Submit to cart</button>
                </div>

            </div>
            :
            <div className="loader"></div>

        }
    </div>)
}

export default ProductDetails;