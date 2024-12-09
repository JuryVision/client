import React from "react";
import { useParams } from "react-router-dom";
import { formatEvmAddressForDiplay } from "../../utils";
import { twMerge } from "tailwind-merge";
import Icon from "../../common/Icon";
import useModal from "../../hooks/useModal";
import AddPlaintiffModal from "./components/AddPlaintiffModal";

export default function () {
  const { id } = useParams();
  const item = dummy;
  const modal = useModal();

  const textAreaStyling =
    "w-full border border-front/10 bg-primary/5 p-3 rounded text-sm scrollbar-primary";
  return (
    <>
      <section className="pt-24 p-page">
        <div className="flex gap-x-1 text-lg font-light tracking-wide">
          <span className="">{item.defender}</span>
          <span className="text-primary">
            ({formatEvmAddressForDiplay(item.plaintiff)})
          </span>
          <p className="mx-2">v/s</p>
          <p className="">{formatEvmAddressForDiplay(item.plaintiff)}</p>
        </div>
      </section>
      <section className="p-page my-8">
        <figure className="border border-front/[8%]" />
      </section>
      <div className="p-page flex gap-x-6">
        <div className="basis-1/2">
          <h1 className="mb-2 font-medium text-lg">Smart Contract</h1>
          <textarea
            className={twMerge(textAreaStyling, "h-[50vh]")}
            value={item.contract}
            readOnly
            disabled
          />
        </div>
        <div className="basis-1/2 flex flex-col">
          <h1 className="mb-2 font-medium text-lg">Case Description</h1>
          <div className="w-full flex-1 mb-6 relative group">
            <textarea
              className={twMerge(textAreaStyling, "h-full")}
              value={item.description.contract}
              readOnly
              disabled
            />
            <div className="absolute-cover z-1 backdrop-blur-sm flex justify-center items-center group-hover:opacity-0 group-hover:pointer-events-none duration-500 pr-3">
              As reported by the Smart Contract
            </div>
          </div>
          <div className="w-full flex-1 relative group">
            <textarea
              className={twMerge(textAreaStyling, "h-full")}
              value={item.description.plaintiff}
              readOnly
              disabled
            />
            <div className="absolute-cover z-1 backdrop-blur-sm flex justify-center items-center group-hover:opacity-0 group-hover:pointer-events-none duration-500 pr-3">
              As reported by the Plaintiff
            </div>
          </div>
        </div>
      </div>
      <section className="p-page mt-8">
        <div className="flex gap-x-5">
          <div className="p-5 basis-1/2 bg-foreground rounded-lg flex flex-col gap-y-4">
            <h1 className="font-semibold">Defender</h1>
            {item.evidence.defender.map((ev, key) => (
              <div
                key={key}
                className="bg-background flex gap-x-2 text-xs rounded-sm"
              >
                <p className="w-1/2 truncate p-2">{ev.title}</p>
                <figure className="h-full border border-front/10" />
                <p className="w-1/2 truncate p-2">{ev.value}</p>
              </div>
            ))}
          </div>
          <div className="p-5 basis-1/2 bg-foreground rounded-lg flex flex-col gap-y-4">
            <h1 className="font-semibold">Plaintiff</h1>
            {item.evidence.plaintiff.map((ev, key) => (
              <div
                key={key}
                className="bg-background flex gap-x-2 text-xs rounded-sm"
              >
                <p className="w-1/2 truncate p-2">{ev.title}</p>
                <figure className="h-full border border-front/10" />
                <p className="w-1/2 truncate p-2">{ev.value}</p>
              </div>
            ))}
             <button
              onClick={() => modal.show(<AddPlaintiffModal />)}
              className="flex items-center justify-center gap-x-2 bg-background py-1 text-sm hover:bg-front/5 duration-300 ease-in-out border border-front/10 cursor-pointer"
            >
              Add Evidence{" "}
              <span>
                {" "}
                <Icon
                  icon="add"
                  className="text-[1.1rem] rounded-full border"
                />
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
const dummy = {
  plaintiff: "0x1A7Fb54F9a16Aa6d2D5ABb67EaC251e86a579345",
  defender: "Swiggy",
  createdAt: Date.now() - Math.random() * 799400,
  duration: 864000 * 7, // 7 days
  priority: 0,
  contract: `// SPDX-License-Identifier: MIT
  pragma solidity ^0.8.0;
  
  contract SupplyChain {
      struct Product {
          uint productId;
          string productName;
          address manufacturer;
          address distributor;
          address retailer;
          bool isSold;
      }
  
      mapping(uint => Product) public products;
      uint public productCount;
  
      event ProductCreated(uint productId, string productName, address indexed manufacturer);
      event ProductTransferred(uint productId, string productName, address indexed from, address indexed to);
  
      function createProduct(string memory _productName) public {
          productCount++;
          products[productCount] = Product(productCount, _productName, msg.sender, address(0), address(0), false);
          emit ProductCreated(productCount, _productName, msg.sender);
      }
  
      function transferProduct(uint _productId, address _to) public {
          require(_productId > 0 && _productId <= productCount, "Invalid product ID");
          Product storage product = products[_productId];
          require(product.manufacturer == msg.sender || product.distributor == msg.sender || product.retailer == msg.sender, "Not authorized to transfer");
          require(!product.isSold, "Product is already sold");
  
          if (product.manufacturer == msg.sender) {
              product.distributor = _to;
          } else if (product.distributor == msg.sender) {
              product.retailer = _to;
          } else {
              revert("Invalid transfer");
          }
  
          emit ProductTransferred(_productId, product.productName, msg.sender, _to);
      }
  
      function sellProduct(uint _productId) public {
          require(_productId > 0 && _productId <= productCount, "Invalid product ID");
          Product storage product = products[_productId];
          require(product.retailer == msg.sender, "Not authorized to sell");
          require(!product.isSold, "Product is already sold");
  
          product.isSold = true;
  
          emit ProductTransferred(_productId, product.productName, msg.sender, address(0));
      }
  }`,
  description: {
    contract: `Our supply chain smart contract is designed to streamline the flow of products from manufacturers to retailers in a transparent and efficient manner. Manufacturers can create products and transfer them to distributors, who then transfer them to retailers for sale. Each product has a unique identifier and its status (sold or not sold) is updated accordingly. Events are emitted for every product creation and transfer to maintain transparency.
This contract ensures that only authorized parties can perform certain actions. For instance, only manufacturers can create products, and only manufacturers or distributors can transfer them. Retailers can sell products once they receive them. This helps prevent unauthorized parties from interfering with the supply chain process.`,
    plaintiff: `I recently bought a product through this supply chain contract, and it was a nightmare! I felt totally scammed. First of all, I had no idea where my product came from because there's no clear information provided to customers. The seller just told me it's from some "smart contract". What does that even mean?
Then, after I bought the product, I found out that it was of terrible quality. It's like they sold me something that should have been thrown away. And guess what? There's no way for me to return it or complain because this "smart contract" thing has no customer service. I'm stuck with this useless product and out of pocket. I feel like I've been totally scammed by this sketchy contract. Never again!`,
  },
  evidence: {
    defender: [
      {
        title: "Txn Hash",
        value: "0x27b6E7edae917EB5AC116597A7C2279F4CB0620B",
      },
      {
        title: "Google Map Tracking",
        value: "https://maps.goo.gl/enough-of-this",
      },
      { title: "Delivery Driver Name", value: "Ghanshyam Jholiram" },
      { title: "Shop Receipt", value: "https://drive.goo.gl/link-sample" },
      { title: "Dashcam footage", value: "https://youtu.be/dashcam-footage" },
    ],
    plaintiff: [
      { title: "Empty Hand Photo", value: "https://drive.goo.gl/empty-hand" },
      {
        title: "Ringbell door footage",
        value: "https://drive.goo.gl/ringdoor-cam",
      },
    ],
  },
};