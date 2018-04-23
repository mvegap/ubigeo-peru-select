<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Ubigeos PERÚ</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">
</head>
<body>

	<div class="container">

		<h1>Ubigeos Perú <small>Listado en select dependiente</small></h1>

		<div class="row">

			<div class="col-lg-4">
				<select name="cb_departamento" id="cb_departamento" class="form-control">
					<option disabled selected>Seleccione departamento</option>
				</select>
			</div>

			<div class="col-lg-4">
				<select name="cb_provincia" id="cb_provincia" class="form-control">
					<option disabled selected>Seleccione provincia</option>
				</select>
			</div>
			
			<div class="col-lg-4">
				<select name="cb_distrito" id="cb_distrito" class="form-control">
					<option disabled selected>Seleccione distrito</option>
				</select>
			</div>

		</div>

	</div>
	

	<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
	<script src="js/main.js"></script>
</body>
</html>