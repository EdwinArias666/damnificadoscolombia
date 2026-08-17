(function() {
  "use strict";

  // --- Offline indicator ---
  function initOfflineBar() {
    var bar = document.createElement("div");
    bar.className = "offline-bar";
    bar.id = "offlineBar";
    bar.textContent = "Sin conexión - Estás viendo información guardada";
    document.body.insertBefore(bar, document.body.firstChild);

    function update() {
      if (!navigator.onLine) {
        bar.classList.add("visible");
      } else {
        bar.classList.remove("visible");
      }
    }
    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    update();
  }

  // --- Helper: get departamento by id ---
  function getDepto(id) {
    return DATOS.departamentos.find(function(d) { return d.id === id; });
  }

  // --- Populate departamento select ---
  function populateDeptos() {
    var sel = document.getElementById("departamento");
    if (!sel) return;
    DATOS.departamentos.forEach(function(depto) {
      var opt = document.createElement("option");
      opt.value = depto.id;
      opt.textContent = depto.nombre;
      sel.appendChild(opt);
    });
  }

  // --- Populate municipios ---
  function populateMunicipios(deptoId) {
    var sel = document.getElementById("municipio");
    if (!sel) return;
    sel.innerHTML = '<option value="">Selecciona tu municipio...</option>';
    var depto = getDepto(deptoId);
    if (!depto) { sel.disabled = true; return; }
    sel.disabled = false;
    depto.ciudadesPrincipales.forEach(function(ciudad) {
      var opt = document.createElement("option");
      opt.value = ciudad.toLowerCase().replace(/\s+/g, "-");
      opt.textContent = ciudad;
      sel.appendChild(opt);
    });
  }

  // --- Populate tipos de afectacion ---
  function populateAfectacion() {
    var container = document.getElementById("tipoAfectacion");
    if (!container) return;
    DATOS.tiposAfectacion.forEach(function(tipo) {
      var label = document.createElement("label");
      label.className = "checkbox-label";
      label.innerHTML =
        '<input type="checkbox" name="afectacion" value="' + tipo.id + '">' +
        '<div class="checkbox-text"><strong>' + tipo.icono + " " + tipo.nombre + "</strong>" +
        "<span>" + tipo.descripcion + "</span></div>";
      container.appendChild(label);
    });

    var cbDestruida = container.querySelector('input[value="vivienda-destruida"]');
    var cbDanada = container.querySelector('input[value="vivienda-danada"]');
    if (cbDestruida && cbDanada) {
      cbDestruida.addEventListener("change", function() {
        if (cbDestruida.checked) {
          cbDanada.checked = false;
          cbDanada.disabled = true;
          cbDanada.closest("label").style.opacity = "0.4";
        } else {
          cbDanada.disabled = false;
          cbDanada.closest("label").style.opacity = "";
        }
      });
      cbDanada.addEventListener("change", function() {
        if (cbDanada.checked) {
          cbDestruida.checked = false;
          cbDestruida.disabled = true;
          cbDestruida.closest("label").style.opacity = "0.4";
        } else {
          cbDestruida.disabled = false;
          cbDestruida.closest("label").style.opacity = "";
        }
      });
    }
  }

  // --- Populate ayudas resumen on index ---
  function populateAyudasResumen() {
    var container = document.getElementById("ayudasResumen");
    if (!container) return;
    DATOS.ayudas.forEach(function(ayuda) {
      container.innerHTML +=
        '<div class="tarjeta-ayuda fade-in">' +
          '<div class="tarjeta-ayuda-icono">' + getIconoAyuda(ayuda.id) + "</div>" +
          "<h3>" + ayuda.nombre + "</h3>" +
          "<p>" + ayuda.descripcion + "</p>" +
          '<div class="tarjeta-ayuda-detalles">' +
            '<div class="tarjeta-detalle"><strong>Entidad responsable:</strong> ' + ayuda.entidadResponsable + "</div>" +
            '<div class="tarjeta-detalle"><strong>Duración:</strong> ' + ayuda.duracion + "</div>" +
          "</div>" +
        "</div>";
    });
  }

  function getIconoAyuda(id) {
    var icons = {
      "subsidio-arriendo": "🏠",
      "kit-humanitario": "📦",
      "traslado-medico": "🚑",
      "alivio-servicios": "💡",
      "alivio-tributario": "📋",
      "reconstruccion": "🔨"
    };
    return icons[id] || "ℹ️";
  }

  // --- Populate pasos resumen on index ---
  function populatePasosResumen() {
    var container = document.getElementById("pasosResumen");
    if (!container) return;
    DATOS.pasosRUD.forEach(function(paso) {
      container.innerHTML +=
        '<div class="paso fade-in">' +
          '<div class="paso-numero">' + paso.paso + "</div>" +
          "<h3>" + paso.titulo + "</h3>" +
          "<p>" + paso.descripcion + "</p>" +
          '<div class="paso-meta">' +
            '<span>⏱️ ' + paso.tiempoEstimado + "</span>" +
            '<span>📍 ' + paso.dondeIr + "</span>" +
          "</div>" +
        "</div>";
    });
  }

  // --- Populate fuentes ---
  function populateFuentes() {
    var container = document.getElementById("fuentesOficiales");
    if (!container) return;
    DATOS.fuentesOficiales.forEach(function(fuente) {
      container.innerHTML +=
        '<div class="fuente-item">' +
          "<strong>" + fuente.nombre + "</strong>" +
          '<a href="' + fuente.url + '" target="_blank" rel="noopener">' + fuente.url + "</a>" +
        "</div>";
    });
  }

  // --- Form submission ---
  function initFormulario() {
    var form = document.getElementById("formUbicacion");
    if (!form) return;

    var deptoSel = document.getElementById("departamento");
    var munSel = document.getElementById("municipio");

    deptoSel.addEventListener("change", function() {
      populateMunicipios(this.value);
    });

    // Radio button visual feedback
    var radioLabels = form.querySelectorAll(".radio-label");
    for (var r = 0; r < radioLabels.length; r++) {
      (function(label) {
        var input = label.querySelector('input[type="radio"]');
        if (!input) return;
        input.addEventListener("change", function() {
          for (var j = 0; j < radioLabels.length; j++) {
            radioLabels[j].style.borderColor = "";
            radioLabels[j].style.background = "";
          }
          if (input.checked) {
            label.style.borderColor = "#b91c1c";
            label.style.background = "#fecaca";
          }
        });
        // Initialize state
        if (input.checked) {
          label.style.borderColor = "#b91c1c";
          label.style.background = "#fecaca";
        }
      })(radioLabels[r]);
    }

    form.addEventListener("submit", function(e) {
      e.preventDefault();
      var deptoId = deptoSel.value;
      var municipioVal = munSel.value;
      var tipoVivienda = form.querySelector('input[name="tipoVivienda"]:checked');
      var afectaciones = [];
      var checks = form.querySelectorAll('input[name="afectacion"]:checked');
      for (var i = 0; i < checks.length; i++) {
        afectaciones.push(checks[i].value);
      }

      if (!deptoId || !municipioVal || !tipoVivienda || afectaciones.length === 0) {
        alert("Por favor completa todos los campos requeridos.");
        return;
      }

      var formData = {
        departamento: deptoId,
        municipio: municipioVal,
        tipoVivienda: tipoVivienda.value,
        afectaciones: afectaciones,
        nombre: form.querySelector("#nombre").value,
        telefono: form.querySelector("#telefono").value
      };

      // Save to localStorage for offline use
      try {
        localStorage.setItem("datosUsuario", JSON.stringify(formData));
      } catch(e) {}

      showResultado(formData);
    });
  }

  // --- Show resultado page (same page, scroll) ---
  function showResultado(data) {
    // Build resultado section dynamically
    var existing = document.getElementById("resultadoDinamico");
    if (existing) existing.remove();

    var depto = getDepto(data.departamento);
    var municipio = data.municipio.replace(/-/g, " ");
    var municipioCapitalized = municipio.charAt(0).toUpperCase() + municipio.slice(1);

    // Filter ayudas relevantes
    var ayudasRelevantes = [];
    DATOS.ayudas.forEach(function(ayuda) {
      var aplica = false;
      data.afectaciones.forEach(function(af) {
        if (ayuda.aplicaPara.indexOf(af) !== -1) aplica = true;
      });
      if (aplica) ayudasRelevantes.push(ayuda);
    });

    var html = '<div id="resultadoDinamico" class="seccion fade-in" style="background:#fff;border-top:4px solid var(--rojo)">';
    html += '<div class="contenedor">';

    // Header
    html += '<a href="#formulario" class="btn-volver">← Volver al formulario</a>';
    html += '<div class="resultado-seccion">';
    html += "<h2>Tu guía personalizada de ayudas</h2>";
    html += '<p style="margin-bottom:8px"><strong>Departamento:</strong> ' + (depto ? depto.nombre : data.departamento) + "</p>";
    html += '<p style="margin-bottom:8px"><strong>Municipio:</strong> ' + municipioCapitalized + "</p>";
    html += '<p style="margin-bottom:8px"><strong>Tipo de vivienda:</strong> ' + (data.tipoVivienda === "urbana" ? "Urbana" : "Rural") + "</p>";
    html += '<p style="margin-bottom:16px"><strong>Afectaciones:</strong> ' + data.afectaciones.map(function(a) {
      var tipo = DATOS.tiposAfectacion.find(function(t) { return t.id === a; });
      return tipo ? tipo.icono + " " + tipo.nombre : a;
    }).join(", ") + "</p>";

    if (data.nombre) {
      html += '<p style="color:var(--rojo);font-weight:600">Hola ' + data.nombre + ", estas son las ayudas a las que puedes optar:</p>";
    }
    html += "</div>";

    // Ayudas disponibles
    html += '<div class="resultado-seccion">';
    html += "<h2>Ayudas a las que puedes optar</h2>";

    if (ayudasRelevantes.length === 0) {
      html += '<p style="color:var(--gris-500)">No encontramos ayudas específicas para tu tipo de afectación, pero te recomendamos acudir a tu Alcaldía para recibir orientación personalizada.</p>';
    } else {
      ayudasRelevantes.forEach(function(ayuda) {
        html += '<div class="tarjeta-ayuda" style="margin-bottom:16px">';
        html += '<div class="tarjeta-ayuda-icono">' + getIconoAyuda(ayuda.id) + "</div>";
        html += "<h3>" + ayuda.nombre + "</h3>";
        html += "<p>" + ayuda.descripcion + "</p>";

        html += '<div class="tarjeta-ayuda-detalles">';

        if (ayuda.montoEstimado) {
          html += '<div class="tarjeta-detalle tarjeta-monto"><strong>💰 Monto estimado:</strong> ' + ayuda.montoEstimado + "</div>";
        }
        if (ayuda.frecuencia) {
          html += '<div class="tarjeta-detalle"><strong>📅 Frecuencia:</strong> ' + ayuda.frecuencia + "</div>";
        }
        html += '<div class="tarjeta-detalle"><strong>⏱️ Duración:</strong> ' + ayuda.duracion + "</div>";

        html += '<div class="tarjeta-detalle"><strong>Requisitos:</strong><ul>';
        ayuda.requisitos.forEach(function(r) { html += "<li>" + r + "</li>"; });
        html += "</ul></div>";

        html += '<div class="tarjeta-detalle"><strong>Documentos necesarios:</strong><ul>';
        ayuda.documentos.forEach(function(d) { html += "<li>" + d + "</li>"; });
        html += "</ul></div>";

        html += '<div class="tarjeta-detalle"><strong>Entidad responsable:</strong> ' + ayuda.entidadResponsable + "</div>";
        html += '<div class="tarjeta-detalle"><strong>Cómo acceder:</strong> ' + ayuda.comoAcceder + "</div>";
        html += "</div>";

        if (ayuda.telefono) {
          html += '<div class="tarjeta-ayuda-botones">';
          html += '<a href="tel:' + ayuda.telefono.replace(/\s/g, "") + '" class="btn-ayuda btn-llamar">📞 Llamar: ' + ayuda.telefono + "</a>";
          html += "</div>";
        }
        html += "</div>";
      });
    }
    html += "</div>";

    // Contactos locales
    html += '<div class="resultado-seccion">';
    html += "<h2>Contactos de emergencia en tu zona</h2>";

    if (depto) {
      html += '<div class="emergencia-grid">';
      html += '<div class="contacto-card"><div class="contacto-info"><h3>Punto de atención ' + depto.nombre + '</h3><p>' + depto.puntosAtencion[0].direccion + '</p></div><div class="contacto-numero">' + depto.puntosAtencion[0].telefono + '</div></div>';
      html += '<div class="contacto-card"><div class="contacto-info"><h3>Línea de emergencia</h3><p>Atención 24 horas</p></div><div class="contacto-numero">' + depto.contactos.lineaEmergencia + '</div></div>';
      html += '<div class="contacto-card"><div class="contacto-info"><h3>Cuerpo de Bomberos</h3><p>Evaluación técnica de viviendas</p></div><div class="contacto-numero">' + depto.contactos.bomberos + '</div></div>';
      html += '<div class="contacto-card"><div class="contacto-info"><h3>Cruz Roja</h3><p>Ayuda humanitaria</p></div><div class="contacto-numero">' + depto.contactos.cruzRoja + '</div></div>';
      html += '<div class="contacto-card"><div class="contacto-info"><h3>Defensa Civil</h3><p>Rescate y emergencias</p></div><div class="contacto-numero">' + depto.contactos.defensaCivil + '</div></div>';
      html += '<div class="contacto-card"><div class="contacto-info"><h3>Policía Nacional</h3><p>Emergencias generales</p></div><div class="contacto-numero">' + depto.contactos.policia + '</div></div>';
      html += "</div>";
    } else {
      html += '<div class="emergencia-grid">';
      DATOS.contactosEmergencia.forEach(function(c) {
        html += '<div class="contacto-card"><div class="contacto-info"><h3>' + c.nombre + "</h3><p>" + c.descripcion + '</p></div><div class="contacto-numero">' + c.numero + "</div></div>";
      });
      html += "</div>";
    }
    html += "</div>";

    // Rural notice
    if (data.tipoVivienda === "rural") {
      html += '<div class="resultado-seccion">';
      html += '<div class="alerta-alerta" style="background:#fef3c7;border-color:#f59e0b">';
      html += '<h2 style="color:#92400e">Atención para zonas rurales</h2>';
      html += '<p style="color:#78350f">Si vives en zona rural y no puedes acudir a los puntos de atención, contacta a la Alcaldía de tu municipio para conocer los puntos de atención cercanos o la ruta de atención móvil.</p>';
      html += "</div></div>";
    }

    // Advertencia
    html += '<div class="resultado-seccion">';
    html += '<div class="alerta-alerta">';
    html += "<h2>Recuerda: protección contra estafas</h2>";
    DATOS.advertencias.forEach(function(adv) {
      html += '<div class="alerta-item alerta-no"><span>⚠️</span> ' + adv + "</div>";
    });
    html += "</div></div>";

    // Links a guías
    html += '<div class="resultado-seccion">';
    html += '<p><a href="guia.html" class="btn-volver" style="margin-right:8px">📖 Guía paso a paso para registrarte en el RUD</a>';
    html += '<a href="ongs.html" class="btn-volver">🤝 Organizaciones que ayudan</a></p>';
    html += "</div>";

    html += "</div></div>";

    // Insert after formulario section
    var formSection = document.getElementById("formulario");
    formSection.insertAdjacentHTML("afterend", html);

    // Scroll to resultado
    document.getElementById("resultadoDinamico").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // --- Populate page-specific content ---
  function populateEmergenciaPage() {
    var container = document.getElementById("emergenciaGrid");
    if (!container) return;
    DATOS.contactosEmergencia.forEach(function(c) {
      container.innerHTML +=
        '<div class="contacto-card">' +
          '<div class="contacto-info"><h3>' + c.nombre + "</h3><p>" + c.descripcion + "</p></div>" +
          '<div class="contacto-numero">' + c.numero + "</div>" +
        "</div>";
    });
  }

  function populateGuiaPage() {
    var container = document.getElementById("guiaContenido");
    if (!container) return;
    DATOS.pasosRUD.forEach(function(paso) {
      var html = '<div class="guia-paso">';
      html += '<div class="guia-paso-header">';
      html += '<div class="guia-paso-num">' + paso.paso + "</div>";
      html += "<h3>" + paso.titulo + "</h3>";
      html += "</div>";
      html += "<p>" + paso.descripcion + "</p>";
      html += "<ul>";
      paso.acciones.forEach(function(a) { html += "<li>" + a + "</li>"; });
      html += "</ul>";
      if (paso.documentos.length > 0) {
        html += '<div class="tarjeta-detalle" style="margin-top:12px"><strong>Documentos que necesitas:</strong><ul style="margin:6px 0 0 16px">';
        paso.documentos.forEach(function(d) { html += "<li>" + d + "</li>"; });
        html += "</ul></div>";
      }
      html += '<div class="guia-meta">';
      html += "<span>⏱️ Tiempo estimado: " + paso.tiempoEstimado + "</span>";
      html += "<span>📍 " + paso.dondeIr + "</span>";
      html += "</div></div>";
      container.innerHTML += html;
    });

    // Add advertencias
    var advContainer = document.getElementById("guiaAdvertencias");
    if (advContainer) {
      DATOS.advertencias.forEach(function(adv) {
        advContainer.innerHTML += '<div class="alerta-item alerta-no"><span>⚠️</span> ' + adv + "</div>";
      });
    }
  }

  // --- Visit counter ---
  function initVisitCounter() {
    var el = document.getElementById("visitasCounter");
    if (!el) return;
    try {
      var count = parseInt(localStorage.getItem("visitas") || "0", 10);
      count += 1;
      localStorage.setItem("visitas", count.toString());
      el.textContent = "👁 " + count.toLocaleString("es-CO") + " visitas";
    } catch (e) {
      el.textContent = "";
    }
  }

  // --- Init ---
  function init() {
    initOfflineBar();
    initVisitCounter();

    // Common elements on all pages
    populateDeptos();
    populateAfectacion();
    populateFuentes();
    initFormulario();

    // Page-specific
    populateAyudasResumen();
    populatePasosResumen();
    populateEmergenciaPage();
    populateGuiaPage();

    // Service Worker
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("sw.js").catch(function() {});
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
