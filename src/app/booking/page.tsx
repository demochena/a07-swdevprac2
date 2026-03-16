import LocationDateReserve from "@/components/DateReserve";
import { TextField } from "@mui/material";

export default function Booking(){
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
      <div className="text-xl font-medium">New Booking</div>
      <div className="w-fit space-y-2">

                <TextField
                    id="Name-Lastname"
                    variant="standard"
                    name="Name-Lastname"
                    label="Name-Lastname"/>

                <TextField
                    id="Contact-Number"
                    variant="standard"
                    name="Contact-Number"
                    label="Contact-Number"/>
        
        <div className="text-md text-left text-gray-600">
          <br></br>วันที่ต้องการจัดงาน</div>
        <LocationDateReserve/>
        
      </div>
      <button name="Book Venue" className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 
      shadow-sm text-white">Book Venue</button>
    </main>
    );
}