var ubigeoPeru = {
	ubigeos: new Array()
};

document.addEventListener('DOMContentLoaded', function() {
	var request = new XMLHttpRequest;
	request.open('GET', './ubigeo-peru.min.json', true);
	request.onload = onLoad_Request;
	request.send();

	function onLoad_Request() {
		if (request.status >= 200 && request.status < 400) {
			ubigeoPeru.ubigeos = JSON.parse(request.responseText);

			showRegionsList();
		}
	}
});

function showRegionsList() {
	ubigeoPeru.ubigeos.forEach(function(ubigeo) {

		if (ubigeo.provincia === '00' && ubigeo.distrito === '00') {

			var option = document.createElement('option');

			option.id = 'dpto-' + ubigeo.departamento;
			option.name = 'departamento';
			option.value = ubigeo.departamento;
			option.addEventListener('click', onChange_Region, false);

			option.textContent = ubigeo.nombre;

			document.querySelector('#cb_departamento').appendChild(option);
		}
	});
}

function onChange_Region() {

	document.querySelector('#cb_provincia').innerHTML = '';
	document.querySelector('#cb_distrito').innerHTML = '';

	showProvincesList(this.value);
}

function showProvincesList(departamento) {

	ubigeoPeru.ubigeos.forEach(function(ubigeo) {

		if (ubigeo.departamento === departamento && ubigeo.provincia !== 0 && ubigeo.distrito === '00') {

			var option = document.createElement('option');

			option.id = 'prov-' + ubigeo.provincia;
			option.name = 'provincia';
			option.value = ubigeo.provincia;
			option.addEventListener('click', onChange_Province, false);

			option.textContent = ubigeo.nombre;

			document.querySelector('#cb_provincia').appendChild(option);
		}
	});
}

function onChange_Province() {

	document.querySelector('#cb_distrito').innerHTML = '';

	var departamento = document.getElementById('cb_departamento').value;
	
	showDistrictsList(departamento, this.value);
}

function showDistrictsList(departamento, provincia) {

	ubigeoPeru.ubigeos.forEach(function(ubigeo) {

		if (ubigeo.departamento === departamento && ubigeo.provincia === provincia && ubigeo.distrito !== 0) {
			
			var option = document.createElement('option');

			option.id = 'dist-' + ubigeo.distrito;
			option.name = 'distrito';
			option.value = ubigeo.distrito;
			option.textContent = ubigeo.nombre;

			document.querySelector('#cb_distrito').appendChild(option);
		}

	});
}

