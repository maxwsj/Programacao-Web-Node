import { useState, useEffect } from 'react';
import hospitalService from '../../util/http-requests';

const Dropwdown = ({ labelTitle, onSelectData }) => {
   const [specialties, setSpecialties] = useState([]);

   async function sendDoctorDataHandler() {
      const specialtiesData = await hospitalService.listSpecialities();
      setSpecialties(specialtiesData);
   }

   useEffect(() => {
      sendDoctorDataHandler();
   }, []);

   function selectedSpecialtiesHandler(e) {
      let specialtyID = '';
      specialties.filter((item) => {
         if (item.nome_especialidade === e.target.value) {
            return (specialtyID = item.id);
         }
         return specialtyID;
      });
      onSelectData(specialtyID);
   }

   return (
      <>
         <label
            className='block text-quartiary pl-2 mb-2 text-lg font-semibold mt-8'
            htmlFor='grid-last-name'
         >
            {labelTitle}
         </label>
         <div className='inline-block relative '>
            <select
               // defaultValue={specialties[0].nome_especialidade}
               onChange={selectedSpecialtiesHandler}
               className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline font-semibold text-lg'
            >
               {specialties.map((data, index) => (
                  <option key={data.id}>{data.nome_especialidade}</option>
               ))}
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-primary '>
               <svg
                  className='fill-current h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
               >
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
               </svg>
            </div>
         </div>
      </>
   );
};

export default Dropwdown;
