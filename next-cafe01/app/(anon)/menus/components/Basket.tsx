"use client";
import React, { useState } from "react";

interface BasketItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const Basket: React.FC = () => {
  const [items, setItems] = useState<BasketItem[]>([]);

  const addItem = (item: BasketItem) => {
    const existingItemIndex = items.findIndex((i) => i.id === item.id);

    if (existingItemIndex >= 0) {
      const updatedItems = [...items];
      updatedItems[existingItemIndex].quantity += 1;
      setItems(updatedItems);
    } else {
      setItems([...items, { ...item, quantity: 1 }]);
    }
  };

  const removeItem = (id: string) => {
    const existingItemIndex = items.findIndex((i) => i.id === id);

    if (existingItemIndex >= 0) {
      const updatedItems = [...items];
      if (updatedItems[existingItemIndex].quantity > 1) {
        updatedItems[existingItemIndex].quantity -= 1;
        setItems(updatedItems);
      } else {
        setItems(items.filter((item) => item.id !== id));
      }
    }
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="fixed bottom-0 right-0 p-4 bg-white shadow-lg rounded-tl-lg w-80">
      <h2 className="text-xl font-bold mb-4">장바구니</h2>

      {items.length === 0 ? (
        <p className="text-gray-500">장바구니가 비어 있습니다.</p>
      ) : (
        <>
          <ul className="space-y-2 mb-4 max-h-60 overflow-y-auto">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <div>
                  <span className="font-medium">{item.name}</span>
                  <span className="text-sm text-gray-500 ml-2">
                    x{item.quantity}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">{item.price.toLocaleString()}원</span>
                  <div className="flex space-x-1">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="px-2 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <button
                      onClick={() => addItem(item)}
                      className="px-2 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="border-t pt-2">
            <div className="flex justify-between font-bold">
              <span>총 금액:</span>
              <span>{getTotalPrice().toLocaleString()}원</span>
            </div>
            <button className="w-full mt-2 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              주문하기
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Basket;
