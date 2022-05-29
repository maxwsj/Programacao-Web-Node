import DeleteButton from './UI/DeleteButton';
import EditButton from './UI/EditButton';

const DoctorInformationForm = ({
   onEdit,
   doctorName,
   doctorId,
   onDelete,
   doctorSpecialty,
}) => {
   return (
      <div className='flex flex-row w-full justify-between mt-3 px-3'>
         <div className='flex flex-col '>
            <span className='text-sm'>Nome:</span>
            <span className='text-lg font-semibold'>{doctorName}</span>
         </div>
         <div className='flex flex-col '>
            <span className='text-sm'>Especialidade:</span>
            <span className='text-lg font-semibold'>{doctorSpecialty}</span>
         </div>
         <div className='flex flex-col ml-5'>
            <EditButton onClick={onEdit} doctorId={doctorId} />
            <div className='mt-3'>
               <DeleteButton doctorId={doctorId} onClick={onDelete} />
            </div>
         </div>
      </div>
   );
};

export default DoctorInformationForm;
