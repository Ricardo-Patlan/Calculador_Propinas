import type { MenuItem } from "primeng/api";

import { useState, useEffect, useMemo } from "react";
import { menuItems } from "../data/db";

export const useOrder = () => {
  const initialOrder = (): OrderItem[] => {
    const localStoragetip = localStorage.getItem("tip");
    try {
      const parsed = localStoragetip ? JSON.parse(localStoragetip) : [];
      return Array.isArray(parsed) ? (parsed as OrderItem[]) : [];
    } catch (error) {
      console.error("Error al leer el carrito de localStorage:", error);
      localStorage.removeItem("tip");
      return [];
    }
  };

  const [] = useState(menuItems);
  const [tip, settip] = useState<tipItem[]>(initialtip);

  useEffect(() => {
    localStorage.setItem("tip", JSON.stringify(tip)); // guarda carrito convertido a string
  }, [tip]);

  const MAX_ITEMS = 5;

  function addItem(item: MenuItem) {
    const itemExist = tip.findIndex((MenuItem) => MenuItem.id === item.id);
    if (itemExist >= 0) {
      if (tip[itemExist].quantity >= MAX_ITEMS) return;
      const updatedtip = [...tip];
      updatedtip[itemExist] = {
        ...updatedtip[itemExist],
        quantity: updatedtip[itemExist].quantity + 1,
      };
      settip(updatedtip);
    } else {
      const newItem: tipItem = { ...item, quantity: 1 };
      settip([...tip, newItem]);
    }
  }

  function removeItem(id: MenuItem["id"]) {
    settip((prevcart) => prevcart.filter((MenuItem) => MenuItem.id !== id));
  }

  function cleartip() {
    settip([]);
  }

  const order = useMemo(() => tip.length === 0, [tip]);
  const tipTotal = useMemo(
    () => tip.reduce((total, item) => total + item.quantity * item.price, 0),
    [tip],
  );

  return {
    // todo lo que se necesita retornar
    //metodos / variables
    tip,
    order,
    cleartip,
    tipTotal,
    addItem,
    removeItem,
  };
};
