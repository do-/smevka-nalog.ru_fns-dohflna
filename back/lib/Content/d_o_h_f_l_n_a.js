const path = require ('path')

module.exports = {

////////////////////////////////////////////////////////////////////////////////

get_xsd_path_of_d_o_h_f_l_n_a:

    function () {

		return path.join (__dirname, '..', 'Static/fns-dohflna-ru-root.xsd')

    },

////////////////////////////////////////////////////////////////////////////////

get_request_of_d_o_h_f_l_n_a:

    function () {

		return this.rq.data
    	
    },

////////////////////////////////////////////////////////////////////////////////

get_response_of_d_o_h_f_l_n_a:

    function () {
/*    
    	const {rq: {data}} = this
*/
    	return {
			  "DOHFLNAResponse": {
				"ИдЗапрос": "000000000000000000000000000000000001",


				"ДохФЛ": {
				  "ОтчетГод": "2015",
				  "ДохФЛ_НА": [
					{
					  "ПолучДох": {
						"ИННФЛ": "100000000074",
						"ДатаРожд": "1980-01-01",
						"ФИО": {
						  "FamilyName": "ИВАНОВ",
						  "FirstName": "ИВАН",
						  "Patronymic": "ИВАНОВИЧ"
						},
						"УдЛичнФЛ": {
						  "DocumentCode": "21",
						  "SeriesNumber": "0000 000000"
						}
					  },
					  "СвНА": {
						"СвНАФЛ": {
						  "ИННФЛ": "100000000074",
						  "ФИО": {
							"FamilyName": "ИВАНОВ",
							"FirstName": "ИВАН",
							"Patronymic": "ИВАНОВИЧ"
						  }
						}
					  },
					  "СведДох_2НДФЛ": {
						"Ставка": "13",
						"ДохВыч": {
						  "СвСумДох": [
							{
							  "Месяц": "01",
							  "КодДоход": "2000",
							  "СумДоход": "1000.12"
							},
							{
							  "Месяц": "02",
							  "КодДоход": "2000",
							  "СумДоход": "2000.12"
							}
						  ]
						},
						"СГДНалПер": {
						  "СумДохОбщ": "3000.24",
						  "НалБаза": "3000.24"
						}
					  }
					},
					{
					  "ПолучДох": {
						"ИННФЛ": "100000000074",
						"ДатаРожд": "1980-01-01",
						"ФИО": {
						  "FamilyName": "ИВАНОВ",
						  "FirstName": "ИВАН",
						  "Patronymic": "ИВАНОВИЧ"
						},
						"УдЛичнФЛ": {
						  "DocumentCode": "21",
						  "SeriesNumber": "0000 000000"
						}
					  },
					  "СвНА": {
						"СвНАЮЛ": {
						  "НаимОрг": "ООО ТЕСТ",
						  "ИННЮЛ": "1000000002",
						  "КПП": "010101001"
						}
					  },
					  "СведДох_НДПриб": {
						"ДохНалПер": {
						  "Ставка": "2",
						  "СумДохОбщ": "5000.11",
						  "НалБаза": "3000.11"
						}
					  }
					}
				  ]
				}
				


			  }				
		}

    },
        
}