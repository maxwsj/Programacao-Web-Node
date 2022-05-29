import axios from 'axios';
import Config from './config';

class HospitalService {
   async listSpecialities() {
      const response = await axios({
         url: Config.API_URL + 'especialidade/listarEspecialidade',
         method: 'GET',
         timeout: Config.TIMEOUT_REQUEST,
         headers: Config.HEADER_REQUEST,
      });
      const specialties = response.data;
      return specialties;
   }
   async listSpecialitiesById(specialityId) {
      const response = await axios({
         url:
            Config.API_URL +
            `especialidade/listarEspecialidade/${specialityId}`,
         method: 'GET',
         timeout: Config.TIMEOUT_REQUEST,
         headers: Config.HEADER_REQUEST,
      });
      const specialties = response.data;
      return specialties;
   }
   async listDoctors() {
      const response = await axios({
         url: Config.API_URL + 'medico/listarMedico',
         method: 'GET',
         timeout: Config.TIMEOUT_REQUEST,
         headers: Config.HEADER_REQUEST,
      });
      const specialties = response.data;
      return specialties;
   }
   async addSpecialities(specialtiesy) {
      const response = await axios({
         url: Config.API_URL + 'especialidade/cadastrarEspecialidade',
         method: 'POST',
         data: specialtiesy,
         timeout: Config.TIMEOUT_REQUEST,
         headers: Config.HEADER_REQUEST,
      });
   }
   async addDoctor(doctorData) {
      const response = await axios({
         url: Config.API_URL + 'medico/cadastrarMedico',
         method: 'POST',
         data: doctorData,
         timeout: Config.TIMEOUT_REQUEST,
         headers: Config.HEADER_REQUEST,
      });
   }
   async editSpecialty(specialtyData) {
      const response = await axios({
         url: Config.API_URL + 'especialidade/alterarEspecialidade',
         method: 'PUT',
         data: specialtyData,
         timeout: Config.TIMEOUT_REQUEST,
         headers: Config.HEADER_REQUEST,
      });
   }
   async editDoctor(doctorData) {
      const response = await axios({
         url: Config.API_URL + 'medico/alterarMedico',
         method: 'PUT',
         data: doctorData,
         timeout: Config.TIMEOUT_REQUEST,
         headers: Config.HEADER_REQUEST,
      });
   }
   async deletDoctor(id) {
      const response = await axios({
         url: Config.API_URL + 'medico/excluirMedico',
         method: 'DELETE',
         data: id,
         timeout: Config.TIMEOUT_REQUEST,
         headers: Config.HEADER_REQUEST,
      });
   }
}

let hospitalService = new HospitalService();
export default hospitalService;
