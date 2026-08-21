const DATOS = {
  terremoto: {
    fecha: "10 de agosto de 2026",
    hora: "7:34 a.m.",
    magnitud: "7.4 Mw",
    epicentro: "San José del Palmar, Chocó",
    profundidad: "103 km",
    resumen: "El terremoto más fuerte de la última década en Colombia. Afectó 15 departamentos y más de 426 municipios."
  },

  departamentos: [
    {
      id: "valle-del-cauca",
      nombre: "Valle del Cauca",
      nivelAfectacion: "critico",
      ciudadesPrincipales: ["Alcalá", "Andalucía", "Ansermanuevo", "Argelia", "Bolívar", "Buenaventura", "Bugalagrande", "Caicedonia", "Calima", "Candelaria", "Cartago", "Dagua", "El Águila", "El Cairo", "El Cerrito", "El Dovio", "Florida", "Ginebra", "Guacarí", "Guadalajara de Buga", "Jamundí", "La Cumbre", "La Unión", "La Victoria", "Obando", "Palmira", "Pradera", "Restrepo", "Riofrío", "Roldanillo", "San Pedro", "Santiago de Cali", "Sevilla", "Toro", "Trujillo", "Tuluá", "Ulloa", "Versalles", "Vijes", "Yotoco", "Yumbo", "Zarzal"],
      puntosAtencion: [
        { nombre: "PMU Cali", direccion: "Centro de convenciones Valle del Cauca", telefono: "(602) 321-0000" },
        { nombre: "Alcaldía de Cali", direccion: "Avenida 6N # 8-43", telefono: "(602) 321-0000" }
      ],
      contactos: {
        lineaEmergencia: "(602) 321-0000",
        bomberos: "119",
        cruzRoja: "132",
        defensaCivil: "144",
        policia: "123"
      }
    },
    {
      id: "choco",
      nombre: "Chocó",
      nivelAfectacion: "critico",
      ciudadesPrincipales: ["Acandí", "Alto Baudó", "Atrato", "Bagadó", "Bahía Solano", "Bajo Baudó", "Bojayá", "Carmen del Darién", "Cértegui", "Condoto", "El Cantón del San Pablo", "El Carmen de Atrato", "El Litoral del San Juan", "Istmina", "Juradó", "Lloró", "Medio Atrato", "Medio Baudó", "Medio San Juan", "Nóvita", "Nuevo Belén de Bajirá", "Nuquí", "Quibdó", "Río Iró", "Río Quito", "Riosucio", "San José del Palmar", "Sipí", "Tadó", "Unguía", "Unión Panamericana"],
      puntosAtencion: [
        { nombre: "PMU Quibdó", direccion: "Coliseo de Quibdó", telefono: "(604) 671-0000" },
        { nombre: "Gobernación del Chocó", direccion: "Calle 1 # 3-30, Quibdó", telefono: "(604) 671-0000" }
      ],
      contactos: {
        lineaEmergencia: "(604) 671-0000",
        bomberos: "119",
        cruzRoja: "132",
        defensaCivil: "144",
        policia: "123"
      }
    },
    {
      id: "caldas",
      nombre: "Caldas",
      nivelAfectacion: "alto",
      ciudadesPrincipales: ["Aguadas", "Anserma", "Aranzazú", "Belalcázar", "Chinchiná", "Filadelfia", "La Dorada", "La Merced", "Manizales", "Manzanares", "Marmato", "Marquetalia", "Marulanda", "Neira", "Norcasia", "Pácora", "Palestina", "Pensilvania", "Riosucio", "Risaralda", "Salamina", "Samaná", "San José", "Supía", "Victoria", "Villamaría", "Viterbo"],
      puntosAtencion: [
        { nombre: "PMU Manizales", direccion: "Plaza de toros, Manizales", telefono: "(606) 886-0000" },
        { nombre: "Gobernación de Caldas", direccion: "Carrera 7 # 15-88, Manizales", telefono: "(606) 886-0000" }
      ],
      contactos: {
        lineaEmergencia: "(606) 886-0000",
        bomberos: "119",
        cruzRoja: "132",
        defensaCivil: "144",
        policia: "123"
      }
    },
    {
      id: "risaralda",
      nombre: "Risaralda",
      nivelAfectacion: "alto",
      ciudadesPrincipales: ["Pereira", "Dosquebradas", "Santa Rosa de Cabal", "La Virginia", "La Celia", "Marsella", "Belén de Umbría", "Guática", "Mistrató", "Pueblo Rico", "Quinchía", "Apía", "Balboa", "Santuario", "La Florida"],
      puntosAtencion: [
        { nombre: "PMU Pereira", direccion: "Coliseo Mayor de Pereira", telefono: "(606) 335-0000" },
        { nombre: "Alcaldía de Pereira", direccion: "Carrera 7 # 18-30", telefono: "(606) 335-0000" }
      ],
      contactos: {
        lineaEmergencia: "(606) 335-0000",
        bomberos: "119",
        cruzRoja: "132",
        defensaCivil: "144",
        policia: "112"
      }
    },
    {
      id: "quindio",
      nombre: "Quindío",
      nivelAfectacion: "alto",
      ciudadesPrincipales: ["Armenia", "Buenavista", "Calarcá", "Circasia", "Córdoba", "Filandia", "Génova", "La Tebaida", "Montenegro", "Pijao", "Quimbaya", "Salento"],
      puntosAtencion: [
        { nombre: "PMU Armenia", direccion: "Coliseo de Armenia", telefono: "(606) 749-0000" },
        { nombre: "Gobernación del Quindío", direccion: "Carrera 14 # 12N-44, Armenia", telefono: "(606) 749-0000" }
      ],
      contactos: {
        lineaEmergencia: "(606) 749-0000",
        bomberos: "(606) 745-4110",
        cruzRoja: "132",
        defensaCivil: "144",
        policia: "112"
      }
    },
    {
      id: "cauca",
      nombre: "Cauca",
      nivelAfectacion: "alto",
      ciudadesPrincipales: ["Almaguer", "Argelia", "Balboa", "Bolívar", "Buenos Aires", "Cajibío", "Caldono", "Caloto", "Corinto", "El Tambo", "Florencia", "Guachené", "Guapi", "Inzá", "Jambaló", "La Sierra", "La Vega", "López de Micay", "Mercaderes", "Miranda", "Morales", "Padilla", "Páez", "Patía", "Piamonte", "Piendamó", "Popayán", "Puerto Tejada", "Puracé", "Rosas", "San Sebastián", "Santander de Quilichao", "Santa Rosa", "Silvia", "Sotará", "Suárez", "Sucre", "Timbío", "Timbiquí", "Toribío", "Totoró", "Villa Rica"],
      puntosAtencion: [
        { nombre: "PMU Popayán", direccion: "Centro de eventos Popayán", telefono: "(602) 824-0000" },
        { nombre: "Gobernación del Cauca", direccion: "Calle 5 # 3-60, Popayán", telefono: "(602) 824-0000" }
      ],
      contactos: {
        lineaEmergencia: "(602) 824-0000",
        bomberos: "119",
        cruzRoja: "132",
        defensaCivil: "144",
        policia: "123"
      }
    },
    {
      id: "antioquia",
      nombre: "Antioquia",
      nivelAfectacion: "moderado",
      ciudadesPrincipales: ["Abejorral", "Abriaquí", "Alejandría", "Amagá", "Amalfi", "Andes", "Angelópolis", "Angostura", "Anorí", "Anzá", "Apartadó", "Arboletes", "Argelia", "Armenia", "Barbosa", "Bello", "Belmira", "Betania", "Betulia", "Briceño", "Buriticá", "Cáceres", "Caicedo", "Caldas", "Campamento", "Cañasgordas", "Caracolí", "Caramanta", "Carepa", "Carolina", "Caucasia", "Chigorodó", "Cisneros", "Ciudad Bolívar", "Cocorná", "Concepción", "Concordia", "Copacabana", "Dabeiba", "Donmatías", "Ebéjico", "El Bagre", "El Carmen de Viboral", "El Santuario", "Entrerríos", "Envigado", "Fredonia", "Frontino", "Giraldo", "Girardota", "Gómez Plata", "Granada", "Guadalupe", "Guarne", "Guatapé", "Heliconia", "Hispania", "Itagüí", "Ituango", "Jardín", "Jericó", "La Ceja", "La Estrella", "La Pintada", "La Unión", "Liborina", "Maceo", "Marinilla", "Medellín", "Montebello", "Murindó", "Mutatá", "Nariño", "Nechí", "Necoclí", "Olaya", "Peñol", "Peque", "Pueblorrico", "Puerto Berrío", "Puerto Nare", "Puerto Triunfo", "Remedios", "Retiro", "Rionegro", "Sabanalarga", "Sabaneta", "Salgar", "San Andrés de Cuerquia", "San Carlos", "San Francisco", "San Jerónimo", "San José de la Montaña", "San Juan de Urabá", "San Luis", "San Pedro de los Milagros", "San Pedro de Urabá", "San Rafael", "San Roque", "Santa Bárbara", "Santa Fe de Antioquia", "Santa Rosa de Osos", "Santo Domingo", "San Vicente Ferrer", "Segovia", "Sonsón", "Sopetrán", "Támesis", "Tarazá", "Tarso", "Titiribí", "Toledo", "Turbo", "Uramita", "Urrao", "Valdivia", "Valparaíso", "Vegachí", "Venecia", "Vigía del Fuerte", "Yalí", "Yarumal", "Yolombó", "Yondó", "Zaragoza"],
      puntosAtencion: [
        { nombre: "PMU Medellín", direccion: "Plaza de Toros La Macarena", telefono: "(604) 381-0000" },
        { nombre: "Gobernación de Antioquia", direccion: "Carrera 42 # 52-120, Medellín", telefono: "(604) 381-0000" }
      ],
      contactos: {
        lineaEmergencia: "(604) 381-0000",
        bomberos: "(604) 285-3220",
        cruzRoja: "132",
        defensaCivil: "144",
        policia: "123"
      }
    },
    {
      id: "cundinamarca",
      nombre: "Cundinamarca",
      nivelAfectacion: "moderado",
      ciudadesPrincipales: ["Agua de Dios", "Albán", "Anapoima", "Anolaima", "Apulo", "Arbeláez", "Beltrán", "Bituima", "Bojacá", "Cabrera", "Cachipay", "Cajicá", "Caparrapí", "Cáqueza", "Carmen de Carupa", "Chaguaní", "Chía", "Chipaque", "Choachí", "Chocontá", "Cogua", "Cota", "Cucunubá", "El Colegio", "El Peñón", "El Rosal", "Facatativá", "Fómeque", "Fosca", "Funza", "Fúquene", "Fusagasugá", "Gachalá", "Gachancipá", "Gachetá", "Gama", "Girardot", "Granada", "Guachetá", "Guaduas", "Guasca", "Guataquí", "Guatavita", "Guayabal de Síquima", "Guayabetal", "Gutiérrez", "Jerusalén", "Junín", "La Calera", "La Mesa", "La Palma", "La Peña", "La Vega", "Lenguazaque", "Machetá", "Madrid", "Manta", "Medina", "Mosquera", "Nariño", "Nemocón", "Nilo", "Nimaima", "Nocaima", "Pacho", "Paime", "Pandi", "Paratebueno", "Pasca", "Puerto Salgar", "Pulí", "Quebradanegra", "Quetame", "Quipile", "Ricaurte", "San Antonio del Tequendama", "San Bernardo", "San Cayetano", "San Francisco", "San Juan de Rioseco", "Sasaima", "Sesquilé", "Sibaté", "Silvania", "Simijaca", "Soacha", "Sopó", "Subachoque", "Suesca", "Supatá", "Susa", "Sutatausa", "Tabio", "Tausa", "Tena", "Tenjo", "Tibacuy", "Tibirita", "Tocaima", "Tocancipá", "Topaipí", "Ubalá", "Ubaque", "Une", "Útica", "Venecia", "Vergara", "Vianí", "Villa de San Diego de Ubaté", "Villagómez", "Villapinzón", "Villeta", "Viotá", "Yacopí", "Zipacón", "Zipaquirá"],
      puntosAtencion: [
        { nombre: "PMU Bogotá", direccion: "Coliseo Cubierto El Campín", telefono: "(601) 381-0000" },
        { nombre: "UADR Cundinamarca", direccion: "Carrera 7 # 32-16, Bogotá", telefono: "(601) 381-0000" }
      ],
      contactos: {
        lineaEmergencia: "(601) 381-0000",
        bomberos: "119",
        cruzRoja: "132",
        defensaCivil: "144",
        policia: "123"
      }
    },
    {
      id: "tolima",
      nombre: "Tolima",
      nivelAfectacion: "moderado",
      ciudadesPrincipales: ["Alpujarra", "Alvarado", "Ambalema", "Anzoátegui", "Armero", "Ataco", "Cajamarca", "Carmen de Apicalá", "Casabianca", "Chaparral", "Coello", "Coyaima", "Cunday", "Dolores", "Espinal", "Falan", "Flandes", "Fresno", "Guamo", "Herveo", "Honda", "Ibagué", "Icononzo", "Lérida", "Líbano", "Melgar", "Murillo", "Natagaima", "Ortega", "Palocabildo", "Piedras", "Planadas", "Prado", "Purificación", "Rioblanco", "Roncesvalles", "Rovira", "Saldaña", "San Antonio", "San Luis", "San Sebastián de Mariquita", "Santa Isabel", "Suárez", "Valle de San Juan", "Venadillo", "Villahermosa", "Villarrica"],
      puntosAtencion: [
        { nombre: "PMU Ibagué", direccion: "Coliseo de Ibagué", telefono: "(608) 271-0000" },
        { nombre: "Gobernación del Tolima", direccion: "Carrera 3 # 10-26, Ibagué", telefono: "(608) 271-0000" }
      ],
      contactos: {
        lineaEmergencia: "(608) 271-0000",
        bomberos: "119",
        cruzRoja: "132",
        defensaCivil: "144",
        policia: "123"
      }
    },
    {
      id: "huila",
      nombre: "Huila",
      nivelAfectacion: "moderado",
      ciudadesPrincipales: ["Acevedo", "Agrado", "Aipe", "Algeciras", "Altamira", "Baraya", "Campoalegre", "Colombia", "Elías", "Garzón", "Gigante", "Guadalupe", "Hobo", "Íquira", "Isnos", "La Argentina", "La Plata", "Nátaga", "Neiva", "Oporapa", "Paicol", "Palermo", "Palestina", "Pital", "Pitalito", "Rivera", "Saladoblanco", "San Agustín", "Santa María", "Suaza", "Tarqui", "Tello", "Teruel", "Tesalia", "Timaná", "Villavieja", "Yaguará"],
      puntosAtencion: [
        { nombre: "PMU Neiva", direccion: "Coliseo de Neiva", telefono: "(608) 871-0000" },
        { nombre: "Gobernación del Huila", direccion: "Carrera 7 # 5-62, Neiva", telefono: "(608) 871-0000" }
      ],
      contactos: {
        lineaEmergencia: "(608) 871-0000",
        bomberos: "119",
        cruzRoja: "(608) 871-3008",
        defensaCivil: "144",
        policia: "123"
      }
    },
    {
      id: "narino",
      nombre: "Nariño",
      nivelAfectacion: "moderado",
      ciudadesPrincipales: ["Albán", "Aldana", "Ancuya", "Arboleda", "Barbacoas", "Belén", "Buesaco", "Chachagüí", "Colón", "Consacá", "Contadero", "Córdoba", "Cuaspud Carlosama", "Cumbal", "Cumbitara", "El Charco", "El Peñol", "El Rosario", "El Tablón de Gómez", "El Tambo", "Francisco Pizarro", "Funes", "Guachucal", "Guaitarilla", "Gualmatán", "Iles", "Imués", "Ipiales", "La Cruz", "La Florida", "La Llanada", "La Tola", "La Unión", "Leiva", "Linares", "Los Andes", "Magüí", "Mallama", "Mosquera", "Nariño", "Olaya Herrera", "Ospina", "Pasto", "Policarpa", "Potosí", "Providencia", "Puerres", "Pupiales", "Ricaurte", "Roberto Payán", "Samaniego", "San Andrés de Tumaco", "San Bernardo", "Sandoná", "San Lorenzo", "San Pablo", "San Pedro de Cartago", "Santa Bárbara", "Santacruz", "Sapuyes", "Taminango", "Tangua", "Túquerres", "Yacuanquer"],
      puntosAtencion: [
        { nombre: "PMU Pasto", direccion: "Coliseo de Pasto", telefono: "(602) 723-0000" },
        { nombre: "Gobernación de Nariño", direccion: "Carrera 23 # 11-54, Pasto", telefono: "(602) 723-0000" }
      ],
      contactos: {
        lineaEmergencia: "(602) 723-0000",
        bomberos: "119",
        cruzRoja: "132",
        defensaCivil: "144",
        policia: "123"
      }
    },
    {
      id: "norte-de-santander",
      nombre: "Norte de Santander",
      nivelAfectacion: "bajo",
      ciudadesPrincipales: ["Ábrego", "Arboledas", "Bochalema", "Bucarásica", "Cáchira", "Cácota", "Chinácota", "Chitagá", "Convenção", "Cucutilla", "Durania", "El Carmen", "El Tarra", "El Zulia", "Gramalote", "Hacarí", "Herrán", "Labateca", "La Esperanza", "La Playa", "Los Patios", "Lourdes", "Mutiscua", "Ocaña", "Pamplona", "Pamplonita", "Puerto Santander", "Ragonvalia", "Salazar", "San Calixto", "San Cayetano", "San José de Cúcuta", "Santiago", "Sardinata", "Silos", "Teorama", "Tibú", "Toledo", "Villa Caro", "Villa del Rosario"],
      puntosAtencion: [
        { nombre: "PMU Cúcuta", direccion: "Polideportivo de Cúcuta", telefono: "(607) 577-0000" },
        { nombre: "Gobernación del Norte de Santander", direccion: "Carrera 6 # 10-56, Cúcuta", telefono: "(607) 577-0000" }
      ],
      contactos: {
        lineaEmergencia: "(607) 577-0000",
        bomberos: "119",
        cruzRoja: "132",
        defensaCivil: "144",
        policia: "123"
      }
    },
    {
      id: "santander",
      nombre: "Santander",
      nivelAfectacion: "bajo",
      ciudadesPrincipales: ["Aguada", "Albania", "Aratoca", "Barbosa", "Barichara", "Barrancabermeja", "Betulia", "Bolívar", "Bucaramanga", "Cabrera", "California", "Capitanejo", "Carcasí", "Cepitá", "Cerrito", "Charalá", "Charta", "Chima", "Chipatá", "Cimitarra", "Concepción", "Confines", "Contratación", "Coromoro", "Curití", "El Carmen de Chucurí", "El Guacamayo", "El Peñón", "El Playón", "Encino", "Enciso", "Florián", "Floridablanca", "Galán", "Gámbita", "Girón", "Guaca", "Guadalupe", "Guapotá", "Guavatá", "Güepsa", "Hato", "Jesús María", "Jordán", "La Belleza", "Landázuri", "La Paz", "Lebrija", "Los Santos", "Macaravita", "Málaga", "Matanza", "Mogotes", "Molagavita", "Ocamonte", "Oiba", "Onzaga", "Palmar", "Palmas del Socorro", "Páramo", "Piedecuesta", "Pinchote", "Puente Nacional", "Puerto Parra", "Puerto Wilches", "Rionegro", "Sabana de Torres", "San Andrés", "San Benito", "San Gil", "San Joaquín", "San José de Miranda", "San Miguel", "Santa Bárbara", "Santa Helena del Opón", "San Vicente de Chucurí", "Simacota", "Socorro", "Suaita", "Sucre", "Suratá", "Tona", "Valle de San José", "Vélez", "Vetas", "Villanueva", "Zapatoca"],
      puntosAtencion: [
        { nombre: "PMU Bucaramanga", direccion: "Coliseo de Bucaramanga", telefono: "(607) 644-0000" },
        { nombre: "Gobernación de Santander", direccion: "Carrera 32 # 33-42, Bucaramanga", telefono: "(607) 644-0000" }
      ],
      contactos: {
        lineaEmergencia: "(607) 644-0000",
        bomberos: "119",
        cruzRoja: "132",
        defensaCivil: "144",
        policia: "123"
      }
    },
    {
      id: "cesar",
      nombre: "Cesar",
      nivelAfectacion: "bajo",
      ciudadesPrincipales: ["Aguachica", "Agustín Codazzi", "Astrea", "Becerril", "Bosconia", "Chimichagua", "Chiriguaná", "Curumaní", "El Copey", "El Paso", "Gamarra", "González", "La Gloria", "La Jagua de Ibirico", "La Paz", "Manaure Balcón del Cesar", "Pailitas", "Pelaya", "Pueblo Bello", "Río de Oro", "San Alberto", "San Diego", "San Martín", "Tamalameque", "Valledupar"],
      puntosAtencion: [
        { nombre: "PMU Valledupar", direccion: "Polideportivo de Valledupar", telefono: "(605) 568-0000" },
        { nombre: "Gobernación del Cesar", direccion: "Carrera 5 # 12-52, Valledupar", telefono: "(605) 568-0000" }
      ],
      contactos: {
        lineaEmergencia: "(605) 568-0000",
        bomberos: "119",
        cruzRoja: "132",
        defensaCivil: "144",
        policia: "123"
      }
    },
    {
      id: "meta",
      nombre: "Meta",
      nivelAfectacion: "bajo",
      ciudadesPrincipales: ["Acacías", "Barranca de Upía", "Cabuyaro", "Castilla La Nueva", "Cubarral", "Cumaral", "El Calvario", "El Castillo", "El Dorado", "Fuente de Oro", "Granada", "Guamal", "La Macarena", "Lejanías", "Mapiripán", "Mesetas", "Puerto Concordia", "Puerto Gaitán", "Puerto Lleras", "Puerto López", "Puerto Rico", "Restrepo", "San Carlos de Guaroa", "San Juan de Arama", "San Juanito", "San Martín", "Uribe", "Villavicencio", "Vistahermosa"],
      puntosAtencion: [
        { nombre: "PMU Villavicencio", direccion: "Coliseo de Villavicencio", telefono: "(608) 661-0000" },
        { nombre: "Gobernación del Meta", direccion: "Carrera 34 # 17-47, Villavicencio", telefono: "(608) 661-0000" }
      ],
      contactos: {
        lineaEmergencia: "(608) 661-0000",
        bomberos: "119",
        cruzRoja: "132",
        defensaCivil: "144",
        policia: "123"
      }
    }
  ],

  tiposAfectacion: [
    {
      id: "vivienda-destruida",
      nombre: "Vivienda destruida o inhabitable",
      descripcion: "Tu vivienda colapsó, tiene daños estructurales graves o no es segura para habitar.",
      icono: "🏚️"
    },
    {
      id: "vivienda-danada",
      nombre: "Vivienda dañada pero habitable",
      descripcion: "Tu vivienda tiene daños (grietas, techos dañados, ventanas rotas) pero puedes vivir en ella.",
      icono: "🏠"
    },
    {
      id: "heridos",
      descripcion: "Tú o un miembro de tu familia resultaron heridos durante el terremoto.",
      nombre: "Heridos o enfermos",
      icono: "🏥"
    },
    {
      id: "comercio-afectado",
      nombre: "Negocio o empleo afectado",
      descripcion: "Tu negocio, local comercial o fuente de empleo fue dañado por el terremoto.",
      icono: "💼"
    },
    {
      id: "solo-kit",
      nombre: "Solo necesito kit de emergencia",
      descripcion: "Necesitas alimentos, agua, colchonetas o elementos de aseo básico.",
      icono: "📦"
    }
  ],

  ayudas: [
    {
      id: "subsidio-arriendo",
      nombre: "Subsidio Temporal de Arriendo",
      descripcion: "Apoyo económico mensual para pagar arriendo mientras se repara o reconstruye tu vivienda.",
      aplicaPara: ["vivienda-destruida"],
      requisitos: [
        "Vivienda destruida o catalogada como inhabitable",
        "Estar registrado en el Registro Único de Damnificados (RUD)",
        "Evaluación técnica que confirme el estado de la vivienda"
      ],
      documentos: [
        "Cédula de ciudadanía",
        "Código RUD (se entrega al registrarse)",
        "Comprobante de evaluación técnica de la vivienda"
      ],
      montoEstimado: "Varía según tu municipio. Ejemplos confirmados: Manizales $357.000/mes (apoyo parcial a la reubicación), Cali $600.000/mes, Pereira hasta $1.500.000/mes. Importante: este subsidio municipal es ACUMULABLE con la ayuda nacional de UNGRD para arriendos (fondo de $100.000 millones). No te conformes solo con el subsidio de tu alcaldía.",
      frecuencia: "Mensual",
      duracion: "1 a 3 meses según municipio y condición (arrendatario o propietario), prorrogables",
      entidadResponsable: "Ministerio de Vivienda + UNGRD",
      comoAcceder: "Inscríbete en el RUD. Una vez aprobado, el subsidio se desembolsa vía transferencia bancaria o consignación.",
      telefono: "018000-113200"
    },
    {
      id: "kit-humanitario",
      nombre: "Kit de Asistencia Humanitaria de Emergencia",
      descripcion: "Paquete con alimentos, agua potable, colchonetas, ropa y elementos de aseo personal.",
      aplicaPara: ["vivienda-destruida", "vivienda-danada", "solo-kit"],
      requisitos: [
        "Estar en zona afectada por el terremoto",
        "Estar registrado en el censo de damnificados local"
      ],
      documentos: [
        "Cédula de ciudadanía o documento de identidad",
        "Registro en el punto de atención local"
      ],
      montoEstimado: "Kit único con alimentos para 15 días (~$200.000 COP en especie)",
      frecuencia: "Entrega única, kit por familia",
      duracion: "Entrega inmediata",
      entidadResponsable: "UNGRD, Cruz Roja, Defensa Civil",
      comoAcceder: "Acude al punto de atención más cercano (alcaldía, coliseo o PMU de tu municipio). La entrega es gratuita.",
      telefono: "132"
    },
    {
      id: "traslado-medico",
      nombre: "Traslados Médicos de Emergencia",
      descripcion: "Cobertura de evacuación y traslado a hospitales de mayor complejidad para pacientes graves.",
      aplicaPara: ["heridos"],
      requisitos: [
        "Paciente con lesiones que requieran atención de mayor complejidad",
        "Referencia médica del centro de salud local"
      ],
      documentos: [
        "Cédula de ciudadanía del paciente o responsable",
        "Referencia médica",
        "Historia clínica si está disponible"
      ],
      montoEstimado: "100% cubierto por el Estado (sin costo para el paciente)",
      frecuencia: "Según necesidad médica",
      duracion: "Hasta el alta médica del paciente",
      entidadResponsable: "Ministerio de Salud, ESE, Cruz Roja",
      comoAcceder: "Acude al centro de salud más cercano. Si requieres traslado interhospitalario, el médico de referencia gestionará el transporte.",
      telefono: "132"
    },
    {
      id: "alivio-servicios",
      nombre: "Alivio en el Pago de Servicios Públicos",
      descripcion: "Congelamiento o reducción en el pago de servicios públicos (agua, luz, gas) para familias afectadas.",
      aplicaPara: ["vivienda-destruida", "vivienda-danada"],
      requisitos: [
        "Estar registrado en el RUD",
        "Ser titular del servicio público"
      ],
      documentos: [
        "Cédula de ciudadanía",
        "Código RUD",
        "Recibo de servicio público"
      ],
      montoEstimado: "Congelamiento del 100% del valor o reducción del 50% según caso",
      frecuencia: "Mensual durante el periodo de emergencia",
      duracion: "Mínimo 3 meses, prorrogable según decreto de emergencia",
      entidadResponsable: "Ministerio de Minas y Energía, Superintendencia de Servicios Públicos",
      comoAcceder: "Una vez registrado en el RUD, las empresas de servicios públicos aplicarán el beneficio automáticamente. Consulta con tu empresa de servicios.",
      telefono: "018000-113200"
    },
    {
      id: "alivio-tributario",
      nombre: "Alivio Tributario para Comerciantes",
      descripcion: "Aplazamiento, fraccionamiento o exención de impuestos para negocios afectados.",
      aplicaPara: ["comercio-afectado"],
      requisitos: [
        "Ser titular de negocio o empresa afectada",
        "Demostrar daños al local comercial o pérdida de mercancía",
        "Estar a paz y salvo o en proceso de regularización tributaria"
      ],
      documentos: [
        "Cédula de ciudadanía o NIT",
        "RUT actualizado",
        "Registro fotográfico de daños al local",
        "Facturas de mercancía dañada (si aplica)"
      ],
      montoEstimado: "Aplazamiento de hasta 12 meses en el pago de impuestos",
      frecuencia: "Según evaluación individual",
      duracion: "Hasta 12 meses de aplazamiento o fraccionamiento",
      entidadResponsable: "DIAN, Secretaría de Hacienda municipal/departamental",
      comoAcceder: "Presenta tu solicitud en la DIAN o secretaría de hacienda de tu municipio con la documentación que respalde los daños.",
      telefono: "018000-511200"
    },
    {
      id: "reconstruccion",
      nombre: "Plan de Reconstrucción de Viviendas",
      descripcion: "Evaluación técnica vivienda por vivienda para determinar si se repara o se reconstruye con subsidio.",
      aplicaPara: ["vivienda-destruida", "vivienda-danada"],
      requisitos: [
        "Estar registrado en el RUD",
        "Evaluación técnica de la vivienda por parte de Bomberos o entidad autorizada"
      ],
      documentos: [
        "Cédula de ciudadanía",
        "Código RUD",
        "Certificado de propiedad o posesión del inmueble",
        "Evaluación técnica de daños"
      ],
      montoEstimado: "Hasta 40 SMLMV para reconstrucción (~$52.000.000 COP), hasta 10 SMLMV para reparación (~$13.000.000 COP)",
      frecuencia: "Una vez por vivienda",
      duracion: "Proceso por etapas (6 a 18 meses según disponibilidad de recursos)",
      entidadResponsable: "Ministerio de Vivienda, UNGRD, Gobernaciones, Alcaldías",
      comoAcceder: "Primero regístrate en el RUD y solicita la evaluación técnica. El gobierno evaluará vivienda por vivienda y te notificará del tipo de intervención.",
      telefono: "018000-113200"
    }
  ],

  pasosRUD: [
    {
      paso: 1,
      titulo: "Verificación Técnica de la Vivienda",
      descripcion: "Solicita que una entidad autorizada evalúe los daños estructurales de tu vivienda.",
      acciones: [
        "Llama al Cuerpo de Bomberos (119) o a la Cruz Roja (132)",
        "Solicita una visita para evaluar la severidad de los daños",
        "La evaluación determinará si tu vivienda es inhabitable, dañada pero habitable, o sin daños"
      ],
      documentos: [],
      tiempoEstimado: "1 a 3 días",
      dondeIr: "En tu municipio, acude a la Alcaldía o al punto de atención más cercano para solicitar la evaluación"
    },
    {
      paso: 2,
      titulo: "Registro en el Punto de Atención Municipal",
      descripcion: "Acude al punto de atención habilitado por tu Alcaldía para iniciar el proceso de registro.",
      acciones: [
        "Ve al punto de atención más cercano (Alcaldía, coliseo, PMU)",
        "Lleva tu cédula de ciudadanía",
        "Proporciona los datos de todos los miembros de tu grupo familiar",
        "Entrega la información sobre las pérdidas y daños sufridos"
      ],
      documentos: [
        "Cédula de ciudadanía",
        "Tarjeta de identidad de los menores (si aplica)",
        "Datos del grupo familiar (nombres, edades, cédulas)"
      ],
      tiempoEstimado: "Mismo día",
      dondeIr: "Punto de atención municipal, Alcaldía o PMU (Puesto de Mando Unificado)"
    },
    {
      paso: 3,
      titulo: "Diligenciamiento de la Ficha RUD",
      descripcion: "Completa el formulario del Registro Único de Damnificados con toda la información requerida.",
      acciones: [
        "Diligencia la ficha RUD con todos los datos solicitados",
        "Describe detalladamente las pérdidas materiales y daños",
        "Entrega la documentación requerida",
        "Guarda tu código de registro RUD"
      ],
      documentos: [
        "Cédula de ciudadanía",
        "Formulario RUD (se llena en el punto de atención)",
        "Documentos de propiedad o posesión del inmueble (si aplica)",
        "Fotos de los daños (si las tienes)"
      ],
      tiempoEstimado: "Mismo día",
      dondeIr: "Mismo punto de atención donde iniciaste el registro"
    },
    {
      paso: 4,
      titulo: "Recepción de Ayudas y Subsidios",
      descripcion: "Una vez registrado, espera la notificación y reclama las ayudas a las que tienes derecho.",
      acciones: [
        "Espera la notificación vía SMS o en los listados de la Alcaldía",
        "Consulta periódicamente en el portal de la UNGRD: rud.gestiondelriesgo.gov.co",
        "Acude a reclamar los subsidios y kits cuando te notifiquen",
        "Presenta tu cédula y código RUD para recibir las ayudas"
      ],
      documentos: [
        "Cédula de ciudadanía",
        "Código RUD",
        "Celular para recibir notificaciones SMS"
      ],
      tiempoEstimado: "Según disponibilidad de recursos (semanas a meses)",
      dondeIr: "Punto de entrega designado por tu Alcaldía o entidad responsable"
    }
  ],

  contactosEmergencia: [
    { nombre: "Policía Nacional", numero: "123", descripcion: "Emergencias generales y denuncias" },
    { nombre: "Cruz Roja Colombiana", numero: "132", descripcion: "Auxilio humanitario y primeros auxilios" },
    { nombre: "Defensa Civil Colombiana", numero: "144", descripcion: "Atención de emergencias y rescate" },
    { nombre: "Cuerpo de Bomberos", numero: "119", descripcion: "Incendios, rescate y evaluación estructural" },
    { nombre: "Línea Gratuita UNGRD", numero: "018000-113200", descripcion: "Información oficial de gestión del riesgo" },
    { nombre: "Fiscalía General", numero: "122", descripcion: "Denuncia de estafas y delitos" },
    { nombre: "Línea de la Vida", numero: "106", descripcion: "Orientación y apoyo emocional" },
    { nombre: "Ministerio de Salud", numero: "(601) 336-2000", descripcion: "Información sobre servicios de salud" },
    { nombre: "Ministerio de Vivienda", numero: "(601) 242-7000", descripcion: "Información sobre subsidios de vivienda" },
    { nombre: "Cancillería - Cooperación Internacional", numero: "(601) 381-4000", descripcion: "Información sobre ayuda internacional" }
  ],

  advertencias: [
    "El registro en el RUD es GRATUITO. No pagues a nadie por hacerlo.",
    "No existen gestores ni tramitadores autorizados. Todo se hace directamente en puntos oficiales.",
    "Nunca compartas tus datos bancarios por teléfono, mensaje o redes sociales.",
    "No hagas clic en enlaces de mensajes que prometan ayudas o subsidios.",
    "Si alguien te pide dinero por una ayuda gubernamental, REPÓRTALO a la Policía (123) o la Fiscalía (122).",
    "La información oficial solo viene de la UNGRD, Alcaldías, Gobernaciones o entidades reconocidas."
  ],

  ongs: [
    {
      nombre: "Cruz Roja Colombiana",
      tipo: "Nacional",
      descripcion: "Equipos de búsqueda y rescate, asistencia humanitaria, kits de emergencia, atención médica de campo.",
      url: "https://www.cruzrojacolombiana.org",
      telefono: "132",
      comoAyudar: "Acude a los puntos de acopio habilitados o llama a la línea 132."
    },
    {
      nombre: "Defensa Civil Colombiana",
      tipo: "Nacional",
      descripcion: "Rescate en escombros, atención de emergencias, distribución de ayuda humanitaria.",
      url: "https://www.defensacivil.gov.co",
      telefono: "144",
      comoAyudar: "Llama a la línea 144 o acude a los puntos de atención de tu municipio."
    },
    {
      nombre: "Direct Relief",
      tipo: "Internacional",
      descripcion: "Ayuda médica: medicamentos, suministros quirúrgicos, equipamiento para hospitales afectados.",
      url: "https://www.directrelief.org/emergency/colombia-earthquake-2026/",
      telefono: "",
      comoAyudar: "Donaciones vía su portal web. Trabaja con hospitales y brigadas médicas locales."
    },
    {
      nombre: "Catholic Relief Services (CRS)",
      tipo: "Internacional",
      descripcion: "Refugio temporal, alimentos, agua potable, protección a familias afectadas.",
      url: "https://www.crs.org",
      telefono: "",
      comoAyudar: "Donaciones vía su portal web. Asistente principal de USAID en Colombia."
    },
    {
      nombre: "World Food Programme (PMA)",
      tipo: "Internacional - ONU",
      descripcion: "Distribución de alimentos, apoyo logístico, asistencia alimentaria de emergencia.",
      url: "https://www.wfp.org/es/colombia",
      telefono: "",
      comoAyudar: "Coordina con el gobierno colombiano. Donaciones vía wfp.org."
    },
    {
      nombre: "OIM - Organización Internacional para las Migraciones",
      tipo: "Internacional - ONU",
      descripcion: "Asistencia a personas desplazadas, refugio temporal, protección a migrantes afectados.",
      url: "https://www.iom.int/es/colombia",
      telefono: "",
      comoAyudar: "Donaciones vía iom.int. Asistencia especializada en movilidad y refugio."
    },
    {
      nombre: "UNICEF Colombia",
      tipo: "Internacional - ONU",
      descripcion: "Protección a niños, niñas y adolescentes, educación de emergencia, agua y saneamiento.",
      url: "https://www.unicef.org/colombia",
      telefono: "",
      comoAyudar: "Donaciones vía unicef.org. Enfoque en protección infantil."
    },
    {
      nombre: "World Vision",
      tipo: "Internacional",
      descripcion: "Ayuda humanitaria a niños y familias, agua potable, salud, educación de emergencia.",
      url: "https://www.worldvision.org",
      telefono: "",
      comoAyudar: "Donaciones vía worldvision.org. Presencia en zonas rurales."
    },
    {
      nombre: "Convoy of Hope",
      tipo: "Internacional",
      descripcion: "Respuesta ante desastres, distribución de alimentos,kits de higiene, apoyo comunitario.",
      url: "https://convoyofhope.org",
      telefono: "",
      comoAyudar: "Donaciones vía convoyofhope.org. Distribuye ayuda en campo."
    },
    {
      nombre: "Banco de Alimentos de Bogotá",
      tipo: "Nacional",
      descripcion: "Recolección y distribución de alimentos para familias afectadas.",
      url: "https://www.bancodealimentos.org.co",
      telefono: "",
      comoAyudar: "Llave Bre-B: 0091677852. Dirección: Calle 19A # 32-50, Bogotá."
    },
    {
      nombre: "Patrulla Aérea Civil Colombiana (PAC)",
      tipo: "Nacional",
      descripcion: "Transporte aéreo humanitario de médicos, medicamentos y suministros a zonas de difícil acceso.",
      url: "https://www.pac.gov.co",
      telefono: "",
      comoAyudar: "Donaciones vía Direct Relief que financia sus operaciones."
    },
    {
      nombre: "UNFPA Colombia",
      tipo: "Internacional - ONU",
      descripcion: "Atención a mujeres embarazadas, prevención de violencia de género, salud sexual y reproductiva.",
      url: "https://colombia.unfpa.org",
      telefono: "",
      comoAyudar: "Donaciones vía unfpa.org. Kits de salud materna."
    },
    {
      nombre: "CICR - Comité Internacional de la Cruz Roja",
      tipo: "Internacional",
      descripcion: "Evaluación de necesidades humanitarias, apoyo en zonas de conflicto armado afectadas.",
      url: "https://www.icrc.org/es/colombia",
      telefono: "",
      comoAyudar: "Donaciones vía icrc.org. Trabajo coordinado con Cruz Roja Colombiana."
    }
  ],

  fuentesOficiales: [
    { nombre: "UNGRD - Unidad Nacional para la Gestión del Riesgo", url: "https://portal.gestiondelriesgo.gov.co" },
    { nombre: "Registro Único de Damnificados (RUD)", url: "https://rud.gestiondelriesgo.gov.co" },
    { nombre: "Ministerio de Vivienda", url: "https://www.minvivienda.gov.co" },
    { nombre: "Cruz Roja Colombiana", url: "https://www.cruzrojacolombiana.org" },
    { nombre: "Defensa Civil Colombia", url: "https://www.defensacivil.gov.co" },
    { nombre: "Ministerio de Salud", url: "https://www.minsalud.gov.co" },
    { nombre: "DIAN - Información tributaria", url: "https://www.dian.gov.co" },
    { nombre: "OPS/OMS Colombia - Informes de situación", url: "https://www.paho.org/es/colombia" },
    { nombre: "Direct Relief - Ayuda médica", url: "https://www.directrelief.org/emergency/colombia-earthquake-2026/" },
    { nombre: "Catholic Relief Services", url: "https://www.crs.org" },
    { nombre: "World Food Programme Colombia", url: "https://www.wfp.org/es/colombia" },
    { nombre: "UNICEF Colombia", url: "https://www.unicef.org/colombia" },
    { nombre: "OIM Colombia", url: "https://www.iom.int/es/colombia" },
    { nombre: "Colombia Hub - Organizaciones verificadas", url: "https://colombiahub.org/terremoto-colombia-2026-como-ayudar/" }
  ]
};
