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
      ciudadesPrincipales: ["Cali", "Buenaventura", "Tuluá", "Buga", "Jamundí", "Candelaria", "Florida", "Pradera", "Yumbo", "Cartago", "Roldanillo", "Sevilla", "Zarzal", "La Unión", "El Cerrito", "Ginebra", "Guacarí", "Barragán de San Lorenzo", "Ansermanuevo", "Argelia", "Bolívar", "Caicedonia", "Calima", "Darién", "Restrepo", "Torro", "Trujillo", "Vergara", "Versalles", "Zarzal"],
      puntosAtencion: [
        { nombre: "PMU Cali", direccion: "Centro de convenciones Valle del Cauca", telefono: "(602) 321-0000" },
        { nombre: "Alcaldía de Cali", direccion: "Avenida 6N # 8-43", telefono: "(602) 321-0000" }
      ],
      contactos: {
        lineaEmergencia: "(602) 321-0000",
        bombers: "119",
        cruzRoja: "132",
        policia: "123"
      }
    },
    {
      id: "choco",
      nombre: "Chocó",
      nivelAfectacion: "critico",
      ciudadesPrincipales: ["Quibdó", "Istmina", "Tadó", "Condoto", "Certegui", "El Cantón del San Pablo", "Medio Atrato", "Nuquí", "Río Iró", "Río Quito", "Bojayá", "Bagadó", "Lloró", "Murindó", "Vigía del Fuerte", "Atrato", "Unión Panamericana", "Riosucio", "Ayalá", "Bajo Baudó", "Bojaya", "Cértegui", "Cristales", "Cucurrupí", "El Litoral del San Juan", "Iguarando", "Judío Divino", "La Toma", "Mindí", "Novedad del Atrato", "Nuquí", "Paimadó", "Périva", "Puerto Meluk", "Quebrada Cana", "Río de Oro", "San José del Palmar", "Sipí", "Togorí", "Tumaco", "Vijagual"],
      puntosAtencion: [
        { nombre: "PMU Quibdó", direccion: "Coliseo de Quibdó", telefono: "(604) 671-0000" },
        { nombre: "Gobernación del Chocó", direccion: "Calle 1 # 3-30, Quibdó", telefono: "(604) 671-0000" }
      ],
      contactos: {
        lineaEmergencia: "(604) 671-0000",
        bombers: "119",
        cruzRoja: "132",
        policia: "123"
      }
    },
    {
      id: "caldas",
      nombre: "Caldas",
      nivelAfectacion: "alto",
      ciudadesPrincipales: ["Manizales", "Villamaría", "Chinchiná", "La Dorada", "Riosucio", "Anserma", "Belén de Umbría", "Marmato", "Neira", "Pácora", "Palestina", "Risaralda", "Salamina", "Supía", "Aguachica", "Badillo", "Carniceros", "Guacahoya", "Hato", "La Victoria", "Marquetalia", "Montebello", "Pueblo Rico", "Quinchía", "Santa Rosa de Cabal", "Versalles", "Viterbo"],
      puntosAtencion: [
        { nombre: "PMU Manizales", direccion: "Plaza de toros, Manizales", telefono: "(606) 886-0000" },
        { nombre: "Gobernación de Caldas", direccion: "Carrera 7 # 15-88, Manizales", telefono: "(606) 886-0000" }
      ],
      contactos: {
        lineaEmergencia: "(606) 886-0000",
        bombers: "119",
        cruzRoja: "132",
        policia: "123"
      }
    },
    {
      id: "risaralda",
      nombre: "Risaralda",
      nivelAfectacion: "alto",
      ciudadesPrincipales: ["Pereira", "Dosquebradas", "Santa Rosa de Cabal", "La Virginia", "La Celia", "Marsella", "Belén de Umbría", "Guática", "Mistrató", "Pueblo Rico", "Quinchía", "Apía", "Balboa", "Santuario", "Vergara", "Viterbo", "Guayabal", "La Florida", "Marsella", "Marulanda", "Montenegro", "Neira", "Palestina", "Risaralda", "Salamina", "Supía"],
      puntosAtencion: [
        { nombre: "PMU Pereira", direccion: "Coliseo Mayor de Pereira", telefono: "(606) 335-0000" },
        { nombre: "Alcaldía de Pereira", direccion: "Carrera 7 # 18-30", telefono: "(606) 335-0000" }
      ],
      contactos: {
        lineaEmergencia: "(606) 335-0000",
        bombers: "119",
        cruzRoja: "132",
        policia: "123"
      }
    },
    {
      id: "quindio",
      nombre: "Quindío",
      nivelAfectacion: "alto",
      ciudadesPrincipales: ["Armenia", "Calarcá", "La Tebaida", "Montenegro", "Quimbaya", "Circasia", "Córdoba", "Filandia", "Salento", "Buenavista", "Pijao", "Buga", "Génova", "La María", "Pueblo Quillado", "Rovira", "Tulúa", "Victoria", "Villahermosa", "Zarzal"],
      puntosAtencion: [
        { nombre: "PMU Armenia", direccion: "Coliseo de Armenia", telefono: "(606) 749-0000" },
        { nombre: "Gobernación del Quindío", direccion: "Carrera 14 # 12N-44, Armenia", telefono: "(606) 749-0000" }
      ],
      contactos: {
        lineaEmergencia: "(606) 749-0000",
        bombers: "119",
        cruzRoja: "132",
        policia: "123"
      }
    },
    {
      id: "cauca",
      nombre: "Cauca",
      nivelAfectacion: "alto",
      ciudadesPrincipales: ["Popayán", "Santander de Quilichao", "Puerto Tejada", "Guachené", "Buenos Aires", "Caloto", "Corinto", "Guapi", "Inzá", "Jambaló", "La Sierra", "Mercaderes", "Moralito", "Padilla", "Páez", "Patía", "Piamonte", "Polindara", "Rosario", "Santander de Quilichao", "Sucre", "Timbío", "Toribío", "Totoró", "Villa Rica", "Yacuanquer", "Almaguer", "Argelia", "Balboa", "Bolívar", "Buenos Aires", "Cajibío", "Caldono", "Caloto", "Cerete", "Chámeza", "Corinto", "El Águila", "El Cairo", "El Dovio", "Florida", "Ginebra", "Guacarí", "Guadalajara de Buga", "Guapi", "Jamundí", "La Celia", "La Unión", "La Victoria", "Obando", "Pradera", "Restrepo", "Riofrío", "Roldanillo", "San Pedro", "Sevilla", "Toro", "Trujillo", "Tuluá", "Tumaco", "Túquerres", "Versalles", "Villarrica", "Yotoco", "Yumbo", "Zarzal"],
      puntosAtencion: [
        { nombre: "PMU Popayán", direccion: "Centro de eventos Popayán", telefono: "(602) 824-0000" },
        { nombre: "Gobernación del Cauca", direccion: "Calle 5 # 3-60, Popayán", telefono: "(602) 824-0000" }
      ],
      contactos: {
        lineaEmergencia: "(602) 824-0000",
        bombers: "119",
        cruzRoja: "132",
        policia: "123"
      }
    },
    {
      id: "antioquia",
      nombre: "Antioquia",
      nivelAfectacion: "moderado",
      ciudadesPrincipales: ["Medellín", "Bello", "Itagüí", "Envigado", "Apartadó", "Turbo", "Rionegro", "Cisneros", "Cocorná", "Concepción", "Fredonia", "La Ceja", "La Unión", "Marinilla", "Montebello", "San Carlos", "San Francisco", "San Roque", "Santa Bárbara", "Segovia", "Sonsón", "Tarazá", "Valdivia", "Yarumal", "Abriaquí", "Alejandría", "Amalfi", "Andes", "Angelópolis", "Angostura", "Anorí", "Anza", "Arboletes", "Barbosa", "Bello", "Belmira", "Betania", "Betulia", "Briceño", "Buriticá", "Caicedo", "Cáceres", "Cañasgordas", "Caracolí", "Carmen de Viboral", "Carolina del Príncipe", "Caucasia", "Chigorodó", "Cisneros", "Cocorná", "Concepción", "Concordia", "Copacabana", "Dabeiba", "Donmatías", "Ebéjico", "El Bagre", "El Peñol", "El Retiro", "El Santuario", "Entrerríos", "Envigado", "Fredonia", "Frontino", "Giraldo", "Girardota", "Gómez Plata", "Guadalupe", "Guarne", "Guatapé", "Heliconia", "Hispania", "Itagüí", "Ituango", "Jardín", "Jericó", "La Estrella", "La Pintada", "La Unión", "Liborina", "Maceo", "Marinilla", "Montebello", "Murindó", "Mutatá", "Necoclí", "Nechí", "Nariño", "Olaya", "Peque", "Pueblorrico", "Puerto Berrío", "Puerto Nare", "Puerto Triunfo", "Remedios", "Retiro", "Rionegro", "Sabanalarga", "Sabaneta", "Salgar", "San Andrés de Cuerquia", "San Carlos", "San Francisco", "San Jerónimo", "San José de la Montaña", "San Pedro de los Milagros", "San Roque", "Santa Bárbara", "Santa Fe de Antioquia", "Santa Rosa de Osos", "Santo Domingo", "Segovia", "Sonsón", "Sopetrán", "Támesis", "Tarazá", "Tarso", "Titiribí", "Toledo", "Turbo", "Uramita", "Urrao", "Valdivia", "Valparaíso", "Vegachí", "Venecia", "Vigía del Fuerte", "Yalí", "Yarumal", "Yolombó", "Zona Bananera"],
      puntosAtencion: [
        { nombre: "PMU Medellín", direccion: "Plaza de Toros La Macarena", telefono: "(604) 381-0000" },
        { nombre: "Gobernación de Antioquia", direccion: "Carrera 42 # 52-120, Medellín", telefono: "(604) 381-0000" }
      ],
      contactos: {
        lineaEmergencia: "(604) 381-0000",
        bombers: "119",
        cruzRoja: "132",
        policia: "123"
      }
    },
    {
      id: "cundinamarca",
      nombre: "Cundinamarca",
      nivelAfectacion: "moderado",
      ciudadesPrincipales: ["Bogotá", "Soacha", "Fusagasugá", "Girardot", "Zipaquirá", "Facatativá", "Villeta", "Tocaima", "Agua de Dios", "Albán", "Bituima", "Bojacá", "Cachipay", "Cajicá", "Caparrapí", "Cáqueza", "Chaguaní", "Chía", "Chipaque", "Choachí", "Chocontá", "Cogua", "Cota", "Cucunubá", "El Colegio", "Fusagasugá", "Gachalá", "Gachancipá", "Gachetá", "Gama", "Girardot", "Granada", "Guachetá", "Guaduas", "Guasca", "Guatavita", "Guayabal de Siquima", "Guayabetal", "Gutiérrez", "Junín", "La Calera", "La Mesa", "La Palma", "La Vega", "Lenguazaque", "Madrid", "Mesitas del Colegio", "Mosquera", "Nemocón", "Pacho", "Pandi", "Pasca", "Pulí", "Quebradanegra", "Quipile", "San Antonio del Tequendama", "San Bernardo", "San Cayetano", "San Juan de Rioseco", "Sasaima", "Sesquilé", "Sibaté", "Silvania", "Simijaca", "Sopó", "Subachoque", "Suesca", "Supatá", "Susa", "Sutatausa", "Sutatenza", "Tabio", "Tena", "Tocaima", "Tocancipá", "Ubalá", "Ubaque", "Ubaté", "Une", "Útica", "Vergara", "Vianí", "Villagómez", "Villapinzón", "Villeta", "Viotá", "Yacopí", "Zipacón", "Zipaquirá"],
      puntosAtencion: [
        { nombre: "PMU Bogotá", direccion: "Coliseo Cubierto El Campín", telefono: "(601) 381-0000" },
        { nombre: "UADR Cundinamarca", direccion: "Carrera 7 # 32-16, Bogotá", telefono: "(601) 381-0000" }
      ],
      contactos: {
        lineaEmergencia: "(601) 381-0000",
        bombers: "119",
        cruzRoja: "132",
        policia: "123"
      }
    },
    {
      id: "tolima",
      nombre: "Tolima",
      nivelAfectacion: "moderado",
      ciudadesPrincipales: ["Ibagué", "Melgar", "Honda", "Girardot", "Espinal", "Melgar", "Planadas", "Prado", "Purificación", "Rioblanco", "Rovira", "Saldaña", "San Antonio", "Suárez", "Valle de San Juan", "Alpujarra", "Alvarado", "Ambalema", "Anzoátegui", "Armero", "Ataco", "Cajamarca", "Carmen de Apicalá", "Casabianca", "Chaparral", "Coello", "Coyaima", "Cunday", "Dolores", "Falan", "Flandes", "Fresno", "Guamo", "Herveo", "Honda", "Icononzo", "Lérida", "Líbano", "Mariquita", "Melgar", "Murillo", "Natagaima", "Ortega", "Palocabildo", "Piedras", "Planadas", "Prado", "Purificación", "Rioblanco", "Rovira", "Saldaña", "San Antonio", "San Luis", "Santa Isabel", "Suárez", "Valle de San Juan", "Venadillo", "Villahermosa", "Villarrica"],
      puntosAtencion: [
        { nombre: "PMU Ibagué", direccion: "Coliseo de Ibagué", telefono: "(608) 271-0000" },
        { nombre: "Gobernación del Tolima", direccion: "Carrera 3 # 10-26, Ibagué", telefono: "(608) 271-0000" }
      ],
      contactos: {
        lineaEmergencia: "(608) 271-0000",
        bombers: "119",
        cruzRoja: "132",
        policia: "123"
      }
    },
    {
      id: "huila",
      nombre: "Huila",
      nivelAfectacion: "moderado",
      ciudadesPrincipales: ["Neiva", "Pitalito", "Garzón", "La Plata", "Campoalegre", "Algeciras", "Agrado", "Aipe", "Baraya", "Colombia", "Tello", "Teruel", "Tres Aguadas", "Aceituno", "Altamira", "Baraya", "Buenos Aires", "Caltano", "Carcia", "Hobo", "Isnos", "La Argentina", "La Plata", "Nátaga", "Oporapa", "Palestina", "Paicol", "Saladoblanco", "Santa María", "Suaza", "Tarqui", "Tello", "Tesalia", "Timaná", "Villavieja", "Yaguará"],
      puntosAtencion: [
        { nombre: "PMU Neiva", direccion: "Coliseo de Neiva", telefono: "(608) 871-0000" },
        { nombre: "Gobernación del Huila", direccion: "Carrera 7 # 5-62, Neiva", telefono: "(608) 871-0000" }
      ],
      contactos: {
        lineaEmergencia: "(608) 871-0000",
        bombers: "119",
        cruzRoja: "132",
        policia: "123"
      }
    },
    {
      id: "narino",
      nombre: "Nariño",
      nivelAfectacion: "moderado",
      ciudadesPrincipales: ["Pasto", "Tumaco", "Ipiales", "Túquerres", "Samaniego", "Buesaco", "Córdoba", "Cumbal", "Curtiduría", "El Charco", "El Rosario", "El Tablón", "Funes", "Guachavés", "Guapi", "Iles", "Imués", "Ipiales", "La Cruz", "La Florida", "La Unión", "Leiva", "Linares", "Los Andes", "Magüí", "Mallama", "Mosquera", "Nariño", "Olaya Herrera", "Ospina", "Policarpa", "Potosí", "Providencia", "Puerres", "Pupiales", "Ricaurte", "Roberto Payán", "Samaniego", "San Bernardo", "Sandona", "Santa Bárbara", "Santacruz", "Sapuyes", "Seminario", "Taminango", "Tangua", "Tumaco", "Túquerres", "Yacuanquer", "Yaguarzón", "Yazalde", "Yuruparí"],
      puntosAtencion: [
        { nombre: "PMU Pasto", direccion: "Coliseo de Pasto", telefono: "(602) 723-0000" },
        { nombre: "Gobernación de Nariño", direccion: "Carrera 23 # 11-54, Pasto", telefono: "(602) 723-0000" }
      ],
      contactos: {
        lineaEmergencia: "(602) 723-0000",
        bombers: "119",
        cruzRoja: "132",
        policia: "123"
      }
    },
    {
      id: "norte-de-santander",
      nombre: "Norte de Santander",
      nivelAfectacion: "bajo",
      ciudadesPrincipales: ["Cúcuta", "Ocaña", "Pamplona", "Villa del Rosario", "Chitagá", "Cáchira", "Cácota", "Chinácota", "Cucutilla", "Durania", "El Carmen", "Gramalote", "Hacarí", "Herrán", "La Esperanza", "Labateca", "Los Patios", "Mutiscua", "Pamplonita", "Puerto Santander", "Ragonvalia", "Salazar de las Palmas", "San Calixto", "Santiago", "Sardinata", "Silos", "Teorama", "Tibú", "Tulúa", "Villa del Rosario"],
      puntosAtencion: [
        { nombre: "PMU Cúcuta", direccion: "Polideportivo de Cúcuta", telefono: "(607) 577-0000" },
        { nombre: "Gobernación del Norte de Santander", direccion: "Carrera 6 # 10-56, Cúcuta", telefono: "(607) 577-0000" }
      ],
      contactos: {
        lineaEmergencia: "(607) 577-0000",
        bombers: "119",
        cruzRoja: "132",
        policia: "123"
      }
    },
    {
      id: "santander",
      nombre: "Santander",
      nivelAfectacion: "bajo",
      ciudadesPrincipales: ["Bucaramanga", "Barrancabermeja", "Floridablanca", "Girón", "Piedecuesta", "Bucaramanga", "San Gil", "Socorro", "Vélez", "Barbosa", "Bolívar", "Bucaramanga", "California", "Capitanejo", "Carcasí", "Cepitá", "Cerrito", "Charalá", "Charta", "Chipatá", "Cimitarra", "Concepción", "Contratación", "Coromoro", "Curití", "El Carmen de Chucurí", "El Guacamayo", "El Peñón", "El Playón", "Enciso", "Florián", "Floridablanca", "Galán", "Gámbita", "Girón", "Guaca", "Guadalupe", "Guapotá", "Guavatá", "Güepsa", "Hato", "Jesús María", "Jordán", "La Belleza", "Landázuri", "Lebrija", "Los Santos", "Macaravita", "Málaga", "Matanza", "Mogotes", "Molagavita", "Ocamonte", "Oibón", "Onzaga", "Palmar", "Palmas del Socorro", "Páramo", "Piedecuesta", "Pinchote", "Puente Nacional", "Puerto Parra", "Puerto Wilches", "Rionegro", "Sabana de Torres", "San Andrés", "San Gil", "San Joaquín", "San José de Miranda", "San Miguel", "Santa Bárbara", "Santa Helena del Opón", "Simacota", "Socorro", "Suaita", "Sucre", "Suratá", "Tona", "Valle de San José", "Vélez", "Vetas", "Villanueva", "Zapatoca"],
      puntosAtencion: [
        { nombre: "PMU Bucaramanga", direccion: "Coliseo de Bucaramanga", telefono: "(607) 644-0000" },
        { nombre: "Gobernación de Santander", direccion: "Carrera 32 # 33-42, Bucaramanga", telefono: "(607) 644-0000" }
      ],
      contactos: {
        lineaEmergencia: "(607) 644-0000",
        bombers: "119",
        cruzRoja: "132",
        policia: "123"
      }
    },
    {
      id: "cesar",
      nombre: "Cesar",
      nivelAfectacion: "bajo",
      ciudadesPrincipales: ["Valledupar", "Aguachica", "San Alberto", "Chiriguaná", "Bosconia", "Chimichagua", "Curumaní", "El Copey", "El Paso", "Gamarra", "González", "La Gloria", "Manaure Bajo del Cesar", "Pailitas", "Pelaya", "Pueblo Bello", "Río de Oro", "La Paz Robles", "San Alberto", "San Diego", "Tamalameque", "Valledupar", "Becerril", "Astrea", "Bolívar", "California", "Cicuco", "Convenio", "Cotorra", "Chimichagua", "Chiriguaná", "Codazzi", "Colosio", "Convención", "Cupitero", "Curumaní", "Doña Juana", "El Carmen", "El Peñón", "El Playón", "El Retorno", "Galerazamba", "Hatillo de Loba", "Isnor", "La Jagua de Ibirico", "La Paz", "Montecristo", "Morales", "Norosí", "Puerto Concordia", "Regidor", "San Martín", "Samaniego", "Santa Rosa del Sur", "Támara", "Tauramena", "Tinjacá", "Tiquisio", "Tuluá", "Valle del Guamuez", "Vigía del Fuerte", "Villanueva", "Yavaraté", "Yondó", "Zapayán", "Zona Bananera"],
      puntosAtencion: [
        { nombre: "PMU Valledupar", direccion: "Polideportivo de Valledupar", telefono: "(605) 568-0000" },
        { nombre: "Gobernación del Cesar", direccion: "Carrera 5 # 12-52, Valledupar", telefono: "(605) 568-0000" }
      ],
      contactos: {
        lineaEmergencia: "(605) 568-0000",
        bombers: "119",
        cruzRoja: "132",
        policia: "123"
      }
    },
    {
      id: "meta",
      nombre: "Meta",
      nivelAfectacion: "bajo",
      ciudadesPrincipales: ["Villavicencio", "Acacías", "Granada", "San Martín", "Puerto López", "San Carlos Guaroa", "San Juan de Arama", "Vista Hermosa", "Castilla La Nueva", "Cubarral", "Cumaral", "El Calvario", "El Castillo", "Fuente de Oro", "Guamal", "Mapiripán", "Mesetas", "La Macarena", "Uribe", "Lejanías", "Puerto Concordia", "Puerto Gaitán", "Puerto Lleras", "Puerto Rico", "Restrepo", "San Carlos Guaroa", "San Juan de Arama", "San Martín", "Villavicencio"],
      puntosAtencion: [
        { nombre: "PMU Villavicencio", direccion: "Coliseo de Villavicencio", telefono: "(608) 661-0000" },
        { nombre: "Gobernación del Meta", direccion: "Carrera 34 # 17-47, Villavicencio", telefono: "(608) 661-0000" }
      ],
      contactos: {
        lineaEmergencia: "(608) 661-0000",
        bombers: "119",
        cruzRoja: "132",
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
      duracion: "3 meses, prorrogables según evaluación",
      entidadResponsable: "Ministerio de Vivienda + UNGRD",
      monto: "Según evaluación del gobierno local",
      comoAcceder: "Inscríbete en el RUD. Una vez aprobado, el subsidio se desembolsa vía transferencia bancaria o consignación."
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
      duracion: "Entrega inmediata, kit único",
      entidadResponsable: "UNGRD, Cruz Roja, Defensa Civil",
      monto: "En especie (no monetario)",
      comoAcceder: "Acude al punto de atención más cercano (alcaldía, coliseo o PMU de tu municipio). La entrega es gratuita."
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
      duracion: "Según necesidad médica",
      entidadResponsable: "Ministerio de Salud, ESE, Cruz Roja",
      monto: "Totalmente cubierto por el Estado",
      comoAcceder: "Acude al centro de salud más cercano. Si requieres traslado interhospitalario, el médico de referencia gestionará el transporte."
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
      duracion: "Según decreto de emergencia (mínimo 3 meses)",
      entidadResponsable: "Ministerio de Minas y Energía, Superintendencia de Servicios Públicos",
      monto: "Congelamiento o reducción según caso",
      comoAcceder: "Una vez registrado en el RUD, las empresas de servicios públicos aplicarán el beneficio automáticamente. Consulta con tu empresa de servicios."
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
      duracion: "Según evaluación de la DIAN y secretaría de hacienda local",
      entidadResponsable: "DIAN, Secretaría de Hacienda municipal/departamental",
      monto: "Variable según caso",
      comoAcceder: "Presenta tu solicitud en la DIAN o secretaría de hacienda de tu municipio con la documentación que respalde los daños."
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
      duracion: "Proceso por etapas según disponibilidad de recursos",
      entidadResponsable: "Ministerio de Vivienda, UNGRD, Gobernaciones, Alcaldías",
      monto: "Subsidio según tipo de intervención (reparación o reconstrucción)",
      comoAcceder: "Primero regístrate en el RUD y solicita la evaluación técnica. El gobierno evaluará vivienda por vivienda y te notificará del tipo de intervención."
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

  fuentesOficiales: [
    { nombre: "UNGRD - Unidad Nacional para la Gestión del Riesgo", url: "https://portal.gestiondelriesgo.gov.co" },
    { nombre: "Registro Único de Damnificados (RUD)", url: "https://rud.gestiondelriesgo.gov.co" },
    { nombre: "Ministerio de Vivienda", url: "https://www.minvivienda.gov.co" },
    { nombre: "Cruz Roja Colombiana", url: "https://www.cruzrojacolombiana.org" },
    { nombre: "Defensa Civil Colombia", url: "https://www.defensacivil.gov.co" },
    { nombre: "Ministerio de Salud", url: "https://www.minsalud.gov.co" },
    { nombre: "DIAN - Información tributaria", url: "https://www.dian.gov.co" },
    { nombre: "OPS/OMS Colombia - Informes de situación", url: "https://www.paho.org/es/colombia" }
  ]
};
