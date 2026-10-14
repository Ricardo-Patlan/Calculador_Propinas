
import './App.css'
import { menuItems } from './data/db';
import { useOrder } from './hooks/useOrder';


function App() {
    const {
       tip,
    order,
    cleartip,
    addItem,
    removeItem,
               tipTotal } = useOrder();





    return (
        <>
            <OrderTotals
                 tip={tip}
    order={order}
    cleartip={cleartip}
    tipTotal={tipTotal}
    addItem={addItem}
    removeItem={removeItem}
            />




            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>

                <div className="row mt-5">
                    {menuItems.map((MenuItem) => (

                        <MenuItem
                            key={MenuItem.id}
                            MenuItem={MenuItem}
                            addItem={addItem}


                        />



                    ))}

                </div>
            </main>

            <footer className="bg-dark mt-5 py-5">
                <div className="container-xl">
                    <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
                </div>
            </footer>
        </>
    )
}

export default App
