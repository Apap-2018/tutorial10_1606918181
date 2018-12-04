const cors = "https://cors-anywhere.herokuapp.com/";
const baseUrl = "http://si-appointment.herokuapp.com/api";

export const Appointment = {
	getAllPasien() {
		/** 
		 * TODO: Fetch data all pasien
		 * @return listAllPasien
		 */
		//Method fetch() digunakan dengan parameter pertama berisi url, dan parameter kedua berisi object 
		//http://si-appointment.herokuapp.com/api/{kodeGroupBesar}/getAllPasien
		return fetch(`${cors}${baseUrl}/1/getAllPasien`, {
			method: 'GET',
		})
		//then: memanipulasi response dari request tersebut
		.then(response => {
			return response.json()
		})
		.then(jsonResponse => {
			return jsonResponse
		})
	},

	getDetailPasien(idPasien) {
		/** 
		 * TODO: Fetch detail data pasien
		 * @param idPasien
		 * @return detailPasien
		 */
		//parameter idPasien yang digunakan untuk url akses.
		return fetch (`${cors}${baseUrl}/getPasien/${idPasien}`, {
			method: 'GET',
		})
		.then(response => {
			return response.json()
		})
		.then(jsonResponse => {
			return jsonResponse
		})

	},
	updateStatusPasien(requestBody) {
		/** 
		 * TODO: POST data baru pasien ke SI-Appointment
		 * @param requestBody
		 * @return responseRequest
		 */
		//header diisi sesuai dengan dokumentasi SI-Appointment
		//body diisi dengan data terbaru pasien setelah di update pada form.
		return fetch(`${cors}${baseUrl}/1/updatePasien`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		})
		.then(response => {
			return response.json()
		})
		.then(jsonResponse => {
			return jsonResponse
		})
	},

	//Latihan no. 1:
	getAllDokter() {
		/** 
		 * TODO: Fetch data all dokter
		 * @return listAllDokter
		 */
		//Method fetch() digunakan dengan parameter pertama berisi url, dan parameter kedua berisi object 
		//http://si-appointment.herokuapp.com/api/{kodeGroupBesar}/getAllDokter
		return fetch(`${cors}${baseUrl}/1/getAllDokter`, {
			method: 'GET',
		})
		//then: memanipulasi response dari request tersebut
		.then(response => {
			return response.json()
		})
		//then: mengembalikan output
		.then(jsonResponse => {
			return jsonResponse
		})
	},

	//Latihan no. 2:
	addBilling(requestBody) {
		/** 
		 * TODO: POST billing pasien ke SI-Appointment
		 * @param requestBody
		 * @return responseRequest
		 */
		//header diisi sesuai dengan dokumentasi SI-Appointment
		//body diisi dengan data terbaru pasien setelah di update pada form.
		//http://si-appointment.herokuapp.com/api/{kodeGroupBesar}/addBilling
		return fetch(`${cors}${baseUrl}/1/addBilling`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		})
		.then(response => {
			return response.json()
		})
		.then(jsonResponse => {
			return jsonResponse
		})
	}

}