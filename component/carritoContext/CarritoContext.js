import React, { createContext, useState } from 'react';


export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (productoNuevo) => {
    const existe = carrito.find(item => item.id === productoNuevo.id);
    if (existe) {
      setCarrito(carrito.map(item => 
        item.id === productoNuevo.id ? { ...item, cantidad: item.cantidad + 1 } : item
      ));
    } else {
      setCarrito([...carrito, { ...productoNuevo, cantidad: 1 }]);
    }
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};