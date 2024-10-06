import React from 'react'
import AddVehicle from '../../Components/AddVehicle';

function Dashboard() {
  return (
    <>
        <div
            style={{
                    margin: '50px auto',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center'
            }}
        >
            <AddVehicle />

        </div>
    </>
  )
}

export default Dashboard;