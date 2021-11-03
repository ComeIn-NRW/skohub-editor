import Ajv from "ajv"
import Ajv2019 from "ajv/dist/2019"
import Ajv2020 from "ajv/dist/2020"

const validate = (schema) => {
	
	let ajv;
	//console.log(schema.$schema);

	switch(schema.$schema) {
		case 'https://json-schema.org/draft/2020-12/schema':
			console.log("Ajv2020");
			ajv = new Ajv2020({
				strict: false,
				allErrors: true
			});
			break;
		case 'https://json-schema.org/draft/2019-09/schema':
			console.log("Ajv2019");
			ajv = new Ajv2019({
				strict: false,
				allErrors: true
			});
			break;
		case 'http://json-schema.org/draft-07/schema#':
			console.log("AjvLegacy-07");
			ajv = new Ajv({
				strict: false,
				allErrors: true
			});
			break;
		case 'http://json-schema.org/draft-06/schema#':
			console.log("AjvLegacy-06");
			ajv = new Ajv({
				strict: false,
				allErrors: true
			});
			ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));
			break;
		default:
			console.log("No compatible schema found");
			break;
	}
	
	return ajv.compile(schema);
}

export default validate;
