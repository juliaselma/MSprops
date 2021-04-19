const {Property,Category,User} = require ("./Models/index") 

//PROPIEDADES
const casa1= {
    name: "mayling golf and country club lote al 200", //String
    price: 240000, //Integer
    image: "casa1.jpg", //String
    description: "Casa de estilo tradicional en Mayling Club de Campo recien pintada, muy prolija. Planta Baja: Hall de recepción, toilette, Living comedor pasante con ventanales al frente y al jardin,Cocina completa con salida a la galería.2 dormitorios que comparten un baño y altillo con posibilidad de 4to dormitorio.Dependencia de servicio.Planta Alta:Suite principal con vestidor y baño. Exteriores:Espacio guardacoches cubierto para 3 autos.Galería con parrilla, pileta climatizada con nado contracorriente, jacuzzi, espacio campestre con fogonero.", //Text
    available: true, //Boolean
    location: "pilar", //Integer
};
const casa2= {
    name: "la comarca", //String
    price: 255000, //Integer
    image: "casa2.jpg", //String
    description: "Casa en 1 planta, clásica con techo de teja colonial.PREPARADA PARA AMPLIAR.Living comedor con chimenea y salida directa a la galería – Cocina amplia con lugar para lava vajillas, y espacio para armar comedor diario – Lavadero con salida al lateral – Baño de servicio 3 dormitorios (1 en suite + 2 dormitorios con baño).Galería con parrilla – Pileta – Jardín con riego por aspersión", //Text
    available: true, //Boolean
    location: "tigre", //Integer
};
const casa3= {
    name: "french 600", //String
    price: 78000, //Integer
    image: "casa3.jpg", //String
    description: "Se Vende por Viaje Casa Moreno Gran Parque.Oportunidad Moreno sur, sobre calle French a 50 metros de Av. Boulevard Perón, zona comercial y a solo metros de colegios y colectivos.La vivienda se construida toda en una planta, sobre lote de 350 m² , cuenta con 2 dormitorios (uno de ellos con placard) amplio living comedor, cocina equipada, baño completo, galería, amplio jardín con parrilla y cochera cubierta para 1", //Text
    available: true, //Boolean
    location: "moreno", //Integer
};
const casa4= {
    name: "australia 2400", //String
    price: 115000, //Integer
    image: "casa4.jpg", //String
    description: "Casa 3 ambientes 1 baño completo y toilette, cocina comedor y dos dormitorios con garage cerrado y galpón ubicado en un gran lote de 660m2.Barrio tranquilo y familiar a una cuadra de plaza de Ricardo Rojas.Posee gran jardín con árboles de palta, limonero y parra.", //Text
    available: true, //Boolean
    location: "villa raffo", //Integer
};
const casa5= {
    name: "nuestra señora del carmen 2546", //String
    price: 170000, //Integer
    image: "casa5.jpg", //String
    description: "Amplio PH tipo casa al frente con cochera y entrada independiente.Cuenta con 4 dormitorios el principal en suite todos con placares empotrados uno al frente y tres al contra-frente, 3 baños uno tipo toilette en planta baja y dos completos con bañera en planta alta, amplio recibidor, gran living comedor, cocina semi separada con barra desayunadora y patio amplio con parrilla.", //Text
    available: true, //Boolean
    location: "villa raffo", //Integer
};
const casa6= {
    name: "cantilo 2254", //String
    price: 240000, //Integer
    image: "casa6.jpg", //String
    description: "En Planta baja cuenta con cochera para 3 autos. Baño completo. Amplio living en desnivel con estufa hogar, comedor y cocina comedor con muebles bajo y sobre mesada, lavadero, y otro ambiente con puerta ventana vista al jardín , el cual posee una galeria y parrilla.En la planta alta se ubican los cuatro dormitorio. Baño completo. Altillo.", //Text
    available: true, //Boolean
    location: "villa devoto", //Integer
};
const casa7= {
    name: "ocantos al 700", //String
    price: 140000, //Integer
    image: "casa7.jpg", //String
    description: "Propiedad con una muy buena ubicación, en el centro de Monte Grande.La misma posee una superficie cubierta de 192m2 aprox, sobre un lote de 10x50m.Cuenta con Recepción, comedor diario, cocina comedor, living, 2 dormitorios, 2 baños. Galeria con parrilla y garaje cubierto para dos autos. Cuarto de guardado en el exterior.", //Text
    available: true, //Boolean
    location: "monte grande", //Integer
};
const casa8= {
    name: "luis antonio berutti 600", //String
    price: 220000, //Integer
    image: "casa8.jpg", //String
    description: "Casa moderna . Desarrollado en dos plantas. PA. Solarium y terraza .1 dormitorio principal de 35 mts2 con baño , jacuzzi y vestidor , mas 3 dormitorios con baño . PB Amplio lIving- , zona de multifuncion , amplia cocina/comedor separada por barra desayunadora, lavadero, parrilla Un baño , amplio jardin de 100 mts2", //Text
    available: true, //Boolean
    location: "moron", //Integer
};
const casa9= {
    name: "sargento cabral", //String
    price: 280000, //Integer
    image: "casa9.jpg", //String
    description: "VENDE Hermosa casa en QUINTA sección con departamento independiente, una ubicación excelente, en la zona mas codiciada de la ciudad de Mendoza, a solo unos metros del Parque General San Martin, superficie cubierta 278,5 m2 y el lote es de 571,5 m2. El mantenimiento esta en un estado muy bueno, la orientación de la propiedad es hacia el Sur.Las características principales son: un comedor; una sala estar; cocina completa; 4 (cuatro) baños en total; 4 (cuatro) habitaciones: uno de ellos en suite y otra es de servicio, con baño incluido; tiene un escritorio; lavandería; un jardín y cochera para 2 (dos) autos. Calefacción central. Tiene 2 (dos) aires acondicionados.Cuenta con un departamento totalmente independiente con Cocina, baño y amplios placares para guardado, ideal para estudio independiente de la propiedad principal.Se reciben permutas hasta el 50% en departamento de 2 dormitorios", //Text
    available: true, //Boolean
    location: "mendoza", //Integer
};
const depto1= {
    name: "alem 1275", //String
    price: 70000, //Integer
    image: "depto1.jpg", //String
    description: "departamento en primer piso, excelente complejo, cuenta con 2 dormitorios amplios con placares, living comedor muy amplio, cocina con lavandería, baño completo y cochera con posibilidad de colocar 2 autos.Excelente ubicación muy proximo al bulevard de Dorrego, centro comerciales, muy tranquila la zona.", //Text
    available: true, //Boolean
    location: "guaymallen", //Integer
};
const depto2= {
    name: "vergara 3500", //String
    price: 60000, //Integer
    image: "depto2.jpg", //String
    description: "Impecable departamento de 2 ambientes.De 40 m2, muy bien distribuidos, cocina separada del living-comedor, dormitorio con placard incorporado, 2 aires acondicionados - Calefacción, ventiladores de techo. Baño completo con bañera.Terraza con lavadero.", //Text
    available: true, //Boolean
    location: "lanus", //Integer
};
const depto3= {
    name: "julian alvarez 200", //String
    price: 60000, //Integer
    image: "depto3.jpg", //String
    description: "Unidad dos ambientes, en muy buen estado al contra frente, cocina separada, baño completo y cuarto principal, living comedor amplio, y tiene una baulera.Ubicado a 3 cuadras de Av scalabrini ortiz y a 5 de Santa Fe", //Text
    available: true, //Boolean
    location: "palermo", //Integer
};
const depto4= {
    name: "french 2000", //String
    price: 120000, //Integer
    image: "depto4.jpg", //String
    description: "Recoleta exclente zona, French 3000, Monoambiente impecable reciclado , al FRENTE / S BALCON , lleno de sol ,con placard ,cocina independiente , baño completo pisos de parquet recien plastificados ,recien pintado , visitelo !!!!! Edificio señorial reclicado la entrada y los pasillos de distribucion", //Text
    available: true, //Boolean
    location: "recoleta", //Integer
};
const depto5= {
    name: "nuestra señora del carmen 2546", //String
    price: 320000, //Integer
    image: "depto5.jpg", //String
    description: "El departamento cuenta con living comedor con cocina integrada con barra desayunadora, toilette de recepción, lavadero. Dormitorio en suite con vestidor. Tanto el living como el dormitorio dan salida al balcón con parrilla con una increíble vista abierta al río.La calefacción es por losa radiante, tiene aire acondicionado en el living y en el dormitorio. Cochera y baulera fija cubierta.Acqua Río es el complejo mas lujoso y completo de la zona haciéndolo único en la calidad de sus amenities y en su espectacular vista. Acqua Río cuenta con piscina descubierta que da al río, hermosos espacios verdes, piscina climatizada cubierta, SUM equipado para fiestas, gimnasio, sauna para damas y para caballeros.", //Text
    available: true, //Boolean
    location: "nordelta", //Integer
};
const depto6= {
    name: "paraguay 3453", //String
    price: 140000, //Integer
    image: "depto6.jpg", //String
    description: "Edificio estilo frances, señorial, con vitreaux, Departamento muy cómodo refaccionado hace unos años, Tiene los dos ambientes con concepto abierto 6 x 5 aprox, cama matrimonial y living comedor, cocina equipada y lavarropas, baño completo y un dormitorio chico con una cama de una plaza con ventana ojo de buey, Los pisos son de madera muy buenos y sumamente cuidados, en otras partes cerámicos negros, agua caliente por calefón y la calefacción es por un aire acondicionado frío /calor, Expensas $ 4850 con asya, abl 800, internet y wifi $ 2700 y luz y gas segun consumo , para visitas", //Text
    available: true, //Boolean
    location: "capital federal", //Integer
};
const depto7= {
    name: "chile 300", //String
    price: 70000, //Integer
    image: "depto7.jpg", //String
    description: "Monoambiente,25 M2 Expensas $2.700-Aysa $400-Aire acondicionado frío/Calor.Agua caliente central", //Text
    available: true, //Boolean
    location: "san telmo", //Integer
};
const depto8= {
    name: "suipacha 900", //String
    price: 62000, //Integer
    image: "depto8.jpg", //String
    description: "Oportunidad!!!! BAJO PRECIO!!!!Venta de Departamento 2 Ambientes ubicado en la calle Suipacha. Superficie total 35 mts2.Al encontrarse al contra frente, el departamento es muy silencioso y cuenta con muy buena iluminación. Todos los ambientes tienen ventana (excepto el baño).El edificio tiene de 10 pisos en sus primeros dos cuerpos y de dos pisos en su segundo cuerpo. (el departamento se encuentra en el segundo cuerpo, en el segundo piso por escalera)Living comedor, cocina independiente con lavadero incorporado, dormitorio con amplio placard, baño completo, pequeño lugar de guardado.Tiene una excelente ubicación con fácil acceso a distintos medios de transporte.Además esta muy cerca de plazas, centros comerciales, culturales, educativos, gastronómicos.", //Text
    available: true, //Boolean
    location: "retiro", //Integer
};
const local1= {
    name: "moreno", //String
    price: 17000, //Integer
    image: "local1.jpg", //String
    description: "Venta Fondo de Comercio - Ferreteria - Moreno Al 1900 - CabaImportante Fondo de Comercio en el Bº de Balvanera.Rubro Ferretería y anexos (Agregado servicios a domicilio) con Antigüedad y Trayectoria en el barrio.Gran stock de mercadería: Ferretería - Pinturas - Electricidad y varios.-Trabajando actualmente - Buena facturación (comprobable) - Listo para comenzar a trabajar - Años de trayectoria.Se alquila el Local por separado - (Contrato comercial por 36 -treinta y seis- meses.- consultar gastos y requisitos para el ingreso)Detalle de infraestructura y mercadería a disposición de los interesados, todas las dudas o consultas sobre el negocio serán evacuadas en entrevista de visita con personal de la firma.-Local al frente - Vidriera - Persiana - Baño - Ante Baño - Sótano (preparado para trabajos anexo o depósito)" ,//Text
    available: true, //Boolean
    location: "balvanera", //Integer
};
const local2= {
    name: "ministro brin 3000", //String
    price: 9000, //Integer
    image: "local2.jpg", //String
    description: "Excelente oportunidad para ingresar en un negocio en funcionamiento con facturacion inmediata.Frente a un colegio con 4 turnos, consejo escolar, laboratorios.Ubicado en pleno centro de Lanus Oeste", //Text
    available: true, //Boolean
    location: "lanus", //Integer
};
const local3= {
    name: "belgrano 3300", //String
    price: 11000, //Integer
    image: "local3.jpg", //String
    description: "Venta Fondo de Comercio – Kiosco Polirrubro.Conocé más sobre este negocio y los datos de contacto del anunciante ingresando en negozona .com y buscando el aviso con el siguiente código de anuncio: 6592", //Text
    available: true, //Boolean
    location: "capital federal", //Integer
};
const local4= {
    name: "rivadavia 969", //String
    price: 120000, //Integer
    image: "local4.jpg", //String
    description: "Oficina en venta en piso 8 contrafrente, excelente estado, planta libre, calefaccion central, equipos de aire acondicionado. Lockers, cocina, impecable!!", //Text
    available: true, //Boolean
    location: "microcentro", //Integer
};
const local5= {
    name: "av cazon 1300", //String
    price: 220000, //Integer
    image: "local5.jpg", //String
    description: "Venta de Oficina comercial con EXCELENTE UBICACION en el centro de tigre, sobre AVENIDA CAZÓN a tan sólo tres cuadras de la estación del tren.En la PB de este edificio se encuentra el registro nacional de las personas. Para acceder a esta oficina se sube al primer piso por escaleras de mármol donde se encuentra la recepción, el baño y cocina (áreas compartidas con dos oficinas).Está remodelada, pintada, piso nuevo, aberturas nuevas, en un ambiente único con posibilidad de dividirla según sea su necesidad, además cuenta con un área descubierta (patio), con lo cual le da una muy buena entrada de luz.", //Text
    available: true, //Boolean
    location: "tigre", //Integer
};
const local6= {
    name: "pueyrredon 2446", //String
    price: 325000, //Integer
    image: "local6.jpg", //String
    description: "Edificio de muy buena categoría, fachada con ventanas de DVH (Doble Vidriado Hermético). Hall de entrada revestido en mármol y granito. 2 ascensores automáticos. Planta libre con pisos de goma. Actualmente distribuida con 3 despachos al frente, 2 despachos chicos al contrafrente y uno grande. Sala de reuniones, área libre de trabajo. Sector de servicios con baños para ambos sexos, office y toilette privado. Cielorrasos acústicos metálicos con artefactos de iluminación. Aire acondicionado central frío/calor propio, marca Carrier. 2 baños generales y un toilette privado. Office. Cochera por montaautos. Buena luz natural. Muy buen estado. Vigilancia 24 horas.", //Text
    available: true, //Boolean
    location: "recoleta", //Integer
};
const local7= {
    name: "sarmiento 459", //String
    price: 170000, //Integer
    image: "local7.jpg", //String
    description: "Edificio de oficinas entre medianeras desarrollado en 2 SS, PB y 9 pisos.Los pisos están preparados para funcionar por semipisos.Cocheras distribuidas en dos subsuelos, a las cuales se accede mediante rampa de única mano.Seguridad 24 horas, control de acceso mediante molinetes con tarjetas de aproximación.Batería de 3 ascensores principales y escalera.Aire acondicionado frío calor, central del edificio.Amplios palieres", //Text
    available: true, //Boolean
    location: "microcentro", //Integer
};
const local8= {
    name: "av de mayo 2354", //String
    price: 59000, //Integer
    image: "local8.jpg", //String
    description: "Oficina ubicada sobre Avenida de Mayo a dos cuadras de la Avenida 9 de Julio y a dos cuadras del Congreso de la Nación, zona comercial con fácil acceso en transporte público y en vehículo.La oficina se encuentra ubicada en el sexto piso de un edificio, al cual se ingresa desde una galería comercial con entrada por Avenida de Mayo y Avenida Rivadavia, el edificio es exclusivo de oficinas.", //Text
    available: true, //Boolean
    location: "monserrat", //Integer
};
const ph1= {
    name: "colon 4100", //String
    price: 187000, //Integer
    image: "ph1.jpg", //String
    description: "PH de 5 ambientes con quincho, terraza y patio.Cuando entramos en PB nos encontramos con un comedor amplio con calefacción y aire acondicionado.La cocina es abierta con alacena y bajo mesada toda azulejada con salida al patio.El baño completo con bañera y mampara.Encontramos la primer habitación con ventana a la calle actualmente funciona como kiosco (opcional) con aire acondicionado.La segunda habitación con ventilador de techo.Planta Alta nos encontramos con una habitación con aire acondicionado placard y ventana a la calle con salida al quincho.Otra habitación con ventana a la calle y salida al quincho.El quincho con parrilla y cerramiento con salida a la terraza que se comunica por escalera al patio de abajo.En el patio de abajo se encuentra un lavadero y un placard con doble puerta para usar como baulera.Es muy luminoso.", //Text
    available: true, //Boolean
    location: "villa ballester", //Integer
};
const ph2= {
    name: "dorrego 2800", //String
    price: 120000, //Integer
    image: "ph2.jpg", //String
    description: "Casa de pasillo, bajo el regimen de PH, el pasillo es compartido por otras 2 propiedades .La casa fue remodelada completa en el 2015 y la PA echa nueva ese mismo años.Cuenta con 3 dormitorios , 2 baños , lavadero , terrazo , patio con parrilero .El ingreso a la propiedad tiene un detalle de no entrar directo a la casa sino a un patio con parrillero , luego encontramos la puerta principal a la casa .Excelente terminaciones , lista para habitar.", //Text
    available: true, //Boolean
    location: "abasto", //Integer
};
const ph3= {
    name: "santiago de las carreras 300", //String
    price: 100000, //Integer
    image: "ph3.jpg", //String
    description: "Espectacular casa/ph en Floresta.Tranquilo barrio cerca de Av. Rivadavia 8800 , Av Alberdi y todos los accesos.3 amb súper cómodo con entrada independiente.CocinaBaño completoTerraza con muchísimo sol y luz .2 dormitorios con placares.", //Text
    available: true, //Boolean
    location: "floresta", //Integer
};
const ph4= {
    name: "asuncion 3791", //String
    price: 100000, //Integer
    image: "ph4.jpg", //String
    description: "Este impecable PH se encuentra en el corazon de Villa Devoto, zona Residencial a tan solo 2 cuadras de Plaza Arenales. Ubicado en segundo piso por escalera, esta unidad cuenta con muy bajas expensas y en las fotos se puede apreciar la luminosidad de los ambientes. Su disposicion es al frente y posee balcon con gran vista abierta. -Se ingresa al departamento por el Living comedor, el cual posee piso de parquet recientemente plastificado y ventanal de dos hojas corredizo (con persiana en perfecto estado). Aire acondicionado de epoca y Estufa tiro balanceado. El Dormitorio recientemente pintado tiene amplios placares (de pared a pared) con piso alfombrado. Comodo Hall de distribución, Cocina muy bien ventilada, espacio para lavarropas, alacenas, mesada a estrenar, cocina a gas con extractor Spar y Calefón a nuevo. Baño completo en excelentes condiciones. ", //Text
    available: true, //Boolean
    location: "devoto", //Integer
};
const ph5= {
    name: "fray cayetano rodriguez al 1000", //String
    price: 109000, //Integer
    image: "ph5.jpg", //String
    description: "Muy buen ph 3 ambientes al fondo totalmente reciclado. Patio con lavadero, cocina con comedor diario, baño completo, 2 cómodos dormitorios, muy buenos detalles de terminación. Sin expensas. Muy buena ubicación. Venta no condicionada.", //Text
    available: true, //Boolean
    location: "san isidro", //Integer
};
const ph6= {
    name: "gorriti 5900", //String
    price: 139000, //Integer
    image: "ph6.jpg", //String
    description: "Ph de 2 dormitorios en venta ubicado en calle 4 e/ 32 y 33 -La Plata- desarrollado en una planta y con acceso por pasillo. El mismo posee dos dormitorios, uno con vestidor, un baño completo, lavadero separado, cocina con muebles sobre y bajo mesada integrada al living comedor con salida al jardín parquizado.Aire condicionado split frio calor, calefactor en cada ambiente.Refaccionado a nuevo.178 mts 2 totales.85 mts 2 cubiertos, 93 mts 2 descubiertos.Sin expensas.Opcional cochera.", //Text
    available: true, //Boolean
    location: "palermo", //Integer
};
const ph7= {
    name: "raulies 4100", //String
    price: 60000, //Integer
    image: "ph7.jpg", //String
    description: "La propiedad se distribuye de la siguiente manera:En PB:Living comedor,Cocina separada, Cocheras para dos autos,Jardín,Toilette,Galería con parrilla.En primer piso:Dos dormitorios, Baño completo", //Text
    available: true, //Boolean
    location: "laferrere", //Integer
};
const terreno1= {
    name: "av hipolito yrigoyen", //String
    price: 110000, //Integer
    image: "terreno1.jpg", //String
    description: "Terreno de 10x35 sobre Av. Hipolito Yrigoyen 1300.Sobre el lote hay una construcción a terminar en estado regular de 2 ambientes en planta baja con cochera y 2 dormitorios en planta alta.", //Text
    available: true, //Boolean
    location: "moron", //Integer
};
const terreno2= {
    name: "las moras 100", //String
    price: 12000, //Integer
    image: "terreno2.jpg", //String
    description: "El terreno se encuentra ubicado a dos cuadras de la e53, sobre las calles moras, esquina el piquillin.Posee 560 m2, esta alambrado con una pequeña edificación, cimientos y algunas columnas.Tiene escritura y hay que solicitar el medidor de luz y agua.Presentan un pequeño desnivel, rodeados de buen entorno.", //Text
    available: true, //Boolean
    location: "cordoba", //Integer
};
const terreno3= {
    name: "224 e/ 506 y 509 s/n", //String
    price: 90000, //Integer
    image: "terreno3.jpg", //String
    description: "Venta Lote en Abasto.Calle 224 e/ 506 y 509.Superficie Total 11.784m2.Medidas de frente: 77,80m2.Medidas de fondo: 151,47 m2.Próximo a Estancia Chica.A 600 metros de las Casuarinas", //Text
    available: true, //Boolean
    location: "la plata", //Integer
};
const terreno4= {
    name: "ruta 20 y ruta 9", //String
    price: 10000, //Integer
    image: "terreno4.jpg", //String
    description: "Venta Lote Terreno 540 m² Barrio Cerrado Terralta El Volcán San Luis.Excelente vista en terreno en el Barrio Cerrado Terralta en el Volcan de 540 mt2.Aceptan Permutas.Ideal para construir !!", //Text
    available: true, //Boolean
    location: "san luis", //Integer
};
const terreno5= {
    name: "lotes internos en barrio cerrado santo tomás", //String
    price: 150000, //Integer
    image: "terreno5.jpg", //String
    description: "Venta de 4 Lotes Internos en Barrio Santo Tomas de Pilar (1970 M²)", //Text
    available: true, //Boolean
    location: "pilar", //Integer
};
const terreno6= {
    name: "Calle 136 E/ 490 y 491 S/N", //String
    price: 49000, //Integer
    image: "terreno6.jpg", //String
    description: "135 entre 490 y 491.Lote en PH en venta en Joaquin Gorina.Medidas: 15x33.Zona en crecimiento.", //Text
    available: true, //Boolean
    location: "la plata", //Integer
};
const terreno7= {
    name: "lago gutierrez", //String
    price: 342000, //Integer
    image: "terreno7.jpg", //String
    description: "Muy buena fraccion sobre lago Gutierrez y ruta 40 sur.Terreno plano.570 metros sobre el lago. 3 muelles aprobados", //Text
    available: true, //Boolean
    location: "bariloche", //Integer
};
//------------------------------------------------------
//CATEGORIAS
const cat1 ={
    name:'casa'
}
const cat2 ={
    name:'departamento'
}
const cat3 ={
    name:'local comercial'
}
const cat4 ={
    name:'ph'
}
const cat5 ={
    name:'terreno'
}
//-------------------------------------------------
//USUARIOS
const user1={
    name: 'sebastian',
    lastName:'marchi',
    email:'sebastianmarchi@gmail.com',
    password:12345678

}
const user2={
    name: 'lautaro',
    lastName:'echeverria',
    email:'lautaroecheverria@gmail.com',
    password:12345678

}
const user3={
    name: 'aitana',
    lastName:'marchi',
    email:'aitanamarchi@gmail.com',
    password:12345678

}
const user4={
    name: 'maria',
    lastName:'cortina',
    email:'marcortina@gmail.com',
    password:12345678

}
const user5={
    name: 'juan',
    lastName:'scagni',
    email:'juanscagni@gmail.com',
    password:12345678

}
const user6={
    name: 'geraldine',
    lastName:'modernell',
    email:'geraldinemodernell@gmail.com',
    password:12345678

}
const user7={
    name: 'roberto',
    lastName:'villa',
    email:'robervilla@gmail.com',
    password:12345678

}
const user8={
    name: 'julia',
    lastName:'selma',
    email:'juliaselma@gmail.com',
    password:12345678,
    isAdmin:true
}
//--------------------------------------------------------
const propertyArray =[casa1,casa2,casa3,casa4,casa5,casa6,casa7,casa8,casa9,depto1,depto2,depto3,depto4,depto5,depto6,depto7,depto8,local1,local2,local3,local4,local5,local6,local7,local8,ph1,ph2,ph3,ph4,ph5,ph6,ph7,terreno1,terreno2,terreno3,terreno4,terreno5,terreno6,terreno7]
const userArray=[user1,user2,user3,user4,user5,user6,user7,user8]
const categoryArray = [cat1,cat2,cat3,cat4,cat5]

//---------------------------------------------------------------

let propertyPromise = () => Property.bulkCreate(propertyArray)
  .then(res => {
    console.log(`-->propiedades creadas`);
    return res;
  });
  
let categoryPromise = () => Category.bulkCreate(categoryArray)
  .then(res => {
    console.log(`-->categorias creadas`);
    return res;
  });
let userPromise = () => User.bulkCreate(userArray,{individualHooks:true})
  .then(res => {
    console.log(`-->usuarios creados`);
    return res;
  });


  propertyPromise()
  .then(()=>categoryPromise()) 
  .then(()=>userPromise()) 
  .then(() => console.log(`----Seed terminado----`));
