/*Nombre y fecha de ingreso de trabajadores que sean ingenieros y socios con membres´?a en al menos dos asociaciones.*/

SELECT PE.Nombre_persona, PE.Apellidos_persona, PE.Fecha_Ingreso,PE.Profesion, CL.Nombre_tipo, ASO.Id_Asociacion
FROM Personas PE
INNER JOIN Clase_Persona CL ON CL.Tipo_persona = PE.Clase_persona
INNER JOIN Asociaciones ASO ON ASO.Id_Persona = PE.Id_persona
WHERE PE.Profesion = 'INGENIERO'  AND Tipo_persona = 1  

/*Nombre y tel´efonos de los socios que no son trabajadores con m´as de tres proyectos que no haga parte de otros proyectos.*/

--Peniente m´as de tres proyectos que no haga parte de otros proyectos

SELECT PE.Nombre_persona, PE.Apellidos_persona, pe.Telefono, pe.Celular
FROM Personas PE
INNER JOIN Clase_Persona CL ON CL.Tipo_persona = PE.Clase_persona
WHERE  Tipo_persona = 1  
