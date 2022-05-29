import DoctorInformationForm from '../DoctorInformationForm';
import DoctorContactContainer from '../DoctorContactContainer';

const CardItem = ({
   onEditDoctor,
   onEditSpecialties,
   onDelete,
   doctorName,
   doctorSpecialty,
   doctorId,
   doctorEmail,
   doctorCellphone,
   doctorTelephone,
}) => {
   return (
      <>
         <div className='bg-quartiary rounded-xl flex flex-row w-fit justify-between mx-5 py-3 mb-5'>
            <div className='flex flex-col w-96 items-center'>
               <DoctorInformationForm
                  onEdit={onEditDoctor}
                  doctorName={doctorName}
                  doctorId={doctorId}
                  onDelete={onDelete}
                  doctorSpecialty={doctorSpecialty}
               />
               <div className='divider mx-6'></div>
               <DoctorContactContainer
                  onEdit={onEditSpecialties}
                  doctorEmail={doctorEmail}
                  doctorCellphone={doctorCellphone}
                  doctorTelephone={doctorTelephone}
               />
            </div>
         </div>
      </>
   );
};

export default CardItem;
