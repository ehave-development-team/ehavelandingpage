export default function Form(){
    return(
            
            
        <div className="mx-4 lg:float-right lg:clear-left lg:mx-8 -mt-14 flex-col justify-center items-center px-5 py-5 bg-teal-900 text-white max-w-sm">
            <p className="text-2xl font-bold text-center mt-5 mb-5">
                Schedule an<br></br>
                Demo</p>
            <p className="text-center mb-8">Unlock the full potential of AI with your data by filling out the form and unleashing the transformative capabilities that will enhance your data.
             </p>

             <form >
                <input className="w-full px-3 py-3 rounded-md mt-2 mb-2" type="text" required placeholder="First name"></input>
                <input className="w-full px-3 py-3 rounded-md mt-2 mb-2"type="text" required placeholder="Last name"></input>
                <input className="w-full px-3 py-3 rounded-md mt-2 mb-2"type="email" required placeholder="Email"></input>
                <input className="w-full px-3 py-3 rounded-md mt-2 mb-2"type="number" required placeholder="Phone Number"></input>
                <select name="Appointment" id="Appointment" className="w-full text-black px-3 py-3 rounded-md mt-2 mb-2" >
                <option className="!max-w-min" value="1">Type of Demo</option>
                <option className="!max-w-min" value="2">Collecting Data</option>
                <option className="!max-w-min" value="3">AI Powered</option>
                </select>
                <button className="block bg-cyan-500 w-full px-3 py-3 rounded-md mt-2">Submit</button>
             </form>

        </div>



    )
}