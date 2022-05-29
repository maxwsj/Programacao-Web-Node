import { useEffect, useState } from 'react';

import CardContainer from '../components/UI/CardContainer';
import CardItem from '../components/UI/CardItem';
import ButtonsWrapper from '../components/UI/ButtonsWrapper';
import RegisterOptions from './RegisterOptions';
import DoctorRegisterForm from '../components/DoctorRegisterForm';
import EditSpecialty from '../components/EditSpecialty';
import hospitalService from '../util/http-requests';
let initialState = true;
const dropdownItem = { nome_especialidade: 'Selecione uma especialidade' };

const FormScreen = () => {
   const [formIsVisible, setFormIsVisible] = useState(false);
   const [heroIsVisible, setHeroIsVisible] = useState(true);
   const [optionsScreen, setOptionsScreen] = useState(false);
   const [editDoctor, setEditDoctor] = useState(false);
   const [editSpecialtie, setEditSpecialtie] = useState(false);
   const [specialtiesList, setSpecialtiesList] = useState([]);
   const [doctorList, setDoctorList] = useState([]);
   const [currentId, setCurrentId] = useState('');
   const [emptyForm, setEmptyForm] = useState(false);

   async function fetchHospitalData() {
      const doctorsData = await hospitalService.listDoctors();
      const specialitiesData = await hospitalService.listSpecialities();
      const newDoctorsObj = doctorsData.map((doctor) => {
         let data;
         specialitiesData.filter((spec) => {
            if (doctor.tblEspecialidadeId === spec.id) {
               data = {
                  id: doctor.id,
                  nome_medico: doctor.nome_medico,
                  nome_especialidade: spec.nome_especialidade,
                  telefone_medico: doctor.telefone_medico,
                  celular_medico: doctor.celular_medico,
                  email_medico: doctor.email_medico,
               };
            }
            return data;
         });
         return data;
      });

      if (doctorsData.length > 0) {
         setEmptyForm(false);
      } else {
         setEmptyForm(true);
      }

      setDoctorList(newDoctorsObj);
      setSpecialtiesList(specialitiesData);
   }

   function showFormHandler() {
      fetchHospitalData();
      setFormIsVisible(true);
      setHeroIsVisible(false);
   }

   useEffect(() => {
      fetchHospitalData();
   }, []);

   function hideFormHandler() {
      setFormIsVisible(false);
      setHeroIsVisible(true);
   }

   function showFormOptionsHandler() {
      setFormIsVisible(false);
      setHeroIsVisible(false);
      setOptionsScreen(true);
      if (initialState) {
         initialState = false;
         specialtiesyInputHandler();
      }
   }

   function hideRegisterHandler() {
      setOptionsScreen(false);
      setFormIsVisible(true);
      fetchHospitalData();
   }

   function showEditDoctorFormHandler(e) {
      const id = e.currentTarget.id;
      setCurrentId(id);
      setEditDoctor(true);
      setFormIsVisible(false);
   }

   function hideEditDoctorFormHandler() {
      setEditDoctor(false);
      setFormIsVisible(true);
      fetchHospitalData();
   }
   function showEditSpecialtiesFormHandler(e) {
      setEditSpecialtie(true);
      setFormIsVisible(false);
      setOptionsScreen(false);
   }

   function hideEditSpecialtiesFormHandler() {
      setEditSpecialtie(false);
      setOptionsScreen(true);
      fetchHospitalData();
   }

   async function deleteDoctorHandler(e) {
      const id = { id: e.currentTarget.id };
      hospitalService.deletDoctor(id);
      setTimeout(() => {
         fetchHospitalData();
      }, '1000');
   }

   function DoctorsRegistered() {
      return doctorList.map((item, index) => (
         <CardItem
            key={item.id}
            doctorId={item.id}
            onEditDoctor={showEditDoctorFormHandler}
            onDelete={deleteDoctorHandler}
            doctorName={item.nome_medico}
            doctorSpecialty={item.nome_especialidade}
            doctorEmail={item.email_medico}
            doctorCellphone={item.celular_medico}
            doctorTelephone={item.telefone_medico}
         />
      ));
   }

   async function specialtiesyInputHandler() {
      const hasSelect = specialtiesList.find(
         (specialty) =>
            specialty.nome_especialidade === 'Selecione uma especialidade'
      );
      if (hasSelect) return;
      hospitalService.addSpecialities(dropdownItem);
   }

   return (
      <>
         {heroIsVisible && (
            // <div className='hero min-h-screen bg-primary'>
            //    <div className='hero-content text-center'>
            //       <div className='max-w-md'>
            //          <h1 className='text-5xl font-bold text-quartiary'>
            //             Seja Bem Vindo !
            //          </h1>
            //          <p className='py-6 text-quartiary'>
            //             Sistema de cadastro de médicos.
            //          </p>
            //          <button
            //             className='btn btn-active btn-accent text-quartiary'
            //             onClick={showFormHandler}
            //          >
            //             Médicos Disponíveis
            //          </button>
            //       </div>
            //    </div>
            // </div>
            <div
               className='hero h-screen'
               style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80")`,
               }}
            >
               <div className='hero-overlay bg-opacity-60'></div>
               <div className='hero-content text-center text-neutral-content'>
                  <div className='max-w-md'>
                     <h1 className='mb-5 text-5xl font-bold'>Bem vindo !</h1>
                     <p className='mb-5'>
                        Oferecer excelência de qualidade no âmbito da saúde, da
                        geração do conhecimento e da responsabilidade social,
                        como forma de evidenciar a contribuição do hospital à
                        sociedade brasileira.
                     </p>
                     <button
                        className='btn btn-outline hover:text-quartiar border-quartiary text-quartiary'
                        onClick={showFormHandler}
                     >
                        Médicos disponíveis
                     </button>
                  </div>
               </div>
            </div>
         )}

         {formIsVisible && (
            <CardContainer cardTitle='Médicos Cadastrados'>
               {emptyForm && (
                  <div className='text-primary text-2xl text-center bg-quartiary mx-5 p-10 rounded w-80'>
                     Nenhum médico cadastrado no momento ! <br />
                     Primeiramente, selecione as opções e cadastre uma nova
                     especialidade.
                  </div>
               )}
               <DoctorsRegistered />
               <ButtonsWrapper
                  onShowForm={hideFormHandler}
                  onShowOptions={showFormOptionsHandler}
               />
            </CardContainer>
         )}

         {optionsScreen && (
            <RegisterOptions
               onHideRegister={hideRegisterHandler}
               onUpdate={fetchHospitalData}
               onEditSpecialties={showEditSpecialtiesFormHandler}
            />
         )}

         {editDoctor && (
            <CardContainer cardTitle='Editar Médico'>
               <DoctorRegisterForm
                  onUpdate={fetchHospitalData}
                  onHide={hideEditDoctorFormHandler}
                  doctorId={currentId}
               />
            </CardContainer>
         )}
         {editSpecialtie && (
            <CardContainer>
               <EditSpecialty onHide={hideEditSpecialtiesFormHandler} />
            </CardContainer>
         )}
      </>
   );
};

export default FormScreen;
