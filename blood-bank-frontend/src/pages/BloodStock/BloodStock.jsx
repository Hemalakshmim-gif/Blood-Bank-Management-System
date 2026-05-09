import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import API from '../../services/api';
import './BloodStock.css';

function BloodStock() {

  const [stock, setStock] = useState([]);

  // fetch stock
  const fetchStock = async () => {
    try {

      const res = await API.get('/stock');

      setStock(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchStock();
  }, []);

  return (
    <div className='stock-page'>

      <Sidebar />

      <div className='stock-content'>

        <Navbar />

        <h1 className='page-title'>
          Blood Stock
        </h1>

        <div className='stock-grid'>

          {stock.map((item) => (

            <div className='stock-card' key={item.blood_group}>

              <h2>{item.blood_group}</h2>

              <h1>{item.units}</h1>

              <p>Units Available</p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default BloodStock;