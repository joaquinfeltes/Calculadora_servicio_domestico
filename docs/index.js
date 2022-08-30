const CONSTANTS = {
  JULIO_AGOSTO_2021: {
    MENSUAL_RETIRO: [0, 31559, 29319.5, 28606, 25725],
    MENSUAL_CAMA_ADENTRO: [0, 35153, 32638, 28606, 31878.5, 26606],
    POR_HORA_RETIRO: [0, 252.5, 239, 225.5, 209],
    POR_HORA_CAMA_ADENTRO: [0, 276.5, 262.5, 225.5, 252.5, 225.5],
  },
  SEPTIEMBRE_OCTUBRE_2021: {
    MENSUAL_RETIRO: [0, 34910, 32433.5, 31644, 28457],
    MENSUAL_CAMA_ADENTRO: [0, 38886, 36104, 31644, 35264, 31644],
    POR_HORA_RETIRO: [0, 279.5, 264.5, 249.5, 231.5],
    POR_HORA_CAMA_ADENTRO: [0, 306, 290, 249.5, 279.5, 249.5],
  },
  NOVIEMBRE_2021: {
    MENSUAL_RETIRO: [0, 36586, 33990.5, 33163, 29823],
    MENSUAL_CAMA_ADENTRO: [0, 40725.5, 37837, 33163, 36957, 33163],
    POR_HORA_RETIRO: [0, 293, 277.5, 261.5, 243],
    POR_HORA_CAMA_ADENTRO: [0, 321, 304, 261.5, 292.5, 261.5],
  },
  DICIEMBRE_2021: {
    MENSUAL_RETIRO: [0, 38541, 35806.5, 34935, 31416.5],
    MENSUAL_CAMA_ADENTRO: [0, 42930.5, 39859, 34935, 38931.5, 34935],
    POR_HORA_RETIRO: [0, 309, 292, 275.5, 256],
    POR_HORA_CAMA_ADENTRO: [0, 338, 320.5, 275.5, 308, 275.5],
  },
  MARZO_2022: {
    MENSUAL_RETIRO: [0, 41892, 38920.5, 37973, 34148.5],
    MENSUAL_CAMA_ADENTRO: [0, 46663.5, 43325, 37973, 42317, 37973],
    POR_HORA_RETIRO: [0, 335.5, 317.5, 299.5, 278],
    POR_HORA_CAMA_ADENTRO: [0, 367.5, 348, 299.5, 334, 299.5],
  },
  ABRIL_2022: {
    MENSUAL_RETIRO: [0,  43568, 40477, 39492, 35514.5],
    MENSUAL_CAMA_ADENTRO: [0, 48530, 45058, 39492, 44009.5, 39492],
    POR_HORA_RETIRO: [0, 349, 330.5, 311.5, 289],
    POR_HORA_CAMA_ADENTRO: [0, 382, 362, 311.5, 349, 311.5],
  },
  MAYO_2022: {
    MENSUAL_RETIRO: [0,  47489, 44120, 43046, 38711],
    MENSUAL_CAMA_ADENTRO: [0, 52897.5, 49113, 43046, 47970.5, 43046],
    POR_HORA_RETIRO: [0, 380.5, 360, 339.5, 315],
    POR_HORA_CAMA_ADENTRO: [0, 416.5, 395, 339.5, 380.5, 339.5],
  },
  JUNIO_JULIO_2022: {
    MENSUAL_RETIRO: [0,  54612.5, 50738, 49503, 44517.5],
    MENSUAL_CAMA_ADENTRO: [0, 60832, 56480, 49503, 55166, 49503],
    POR_HORA_RETIRO: [0, 437.5, 414, 390.5, 362.5],
    POR_HORA_CAMA_ADENTRO: [0, 479, 454, 390.5, 437.5, 390.5],
  },
  AGOSTO_2022: {
    MENSUAL_RETIRO: [0,  59527.6, 55304.5, 53958.3, 48524.1],
    MENSUAL_CAMA_ADENTRO: [0, 66306.9, 61563.5, 53958.3, 60131, 53958.3],
    POR_HORA_RETIRO: [0, 477, 451.5, 425.7, 395.5],
    POR_HORA_CAMA_ADENTRO: [0, 522, 495, 425.7, 476,9, 425.7]
  },
};

$(document).ready(function () {
  // month parsing
  month_idx = "JULIO_AGOSTO_2021";
  $("#select_month").on("change", function () {
    month_idx = document.getElementById("select_month").value;
  });

  $("#job_type").on("change", function () {
    valSelectJob = $(this).val();
    select_value = 0;
    if (valSelectJob == "cama_adentro") {
      $("#retiro_mensual").hide();
      $("#cama_adentro").show();
      $("#label_categories").show();
      $("#job_time").show();
      $("#label_job_time").show();
      $("#button_calculate").show();
      $("#label_modalidad_de_pago").show();
      $("#modalidad_de_pago").show();
      $("#label_patagonia").show();
      $("#patagonia").show();
      $("#label_antiguedad").show();
      $("#antiguedad").show();
    } else if (valSelectJob == "retiro_mensual") {
      $("#cama_adentro").hide();
      $("#retiro_mensual").show();
      $("#label_categories").show();
      $("#job_time").show();
      $("#label_job_time").show();
      $("#button_calculate").show();
      $("#label_modalidad_de_pago").show();
      $("#modalidad_de_pago").show();
      $("#label_patagonia").show();
      $("#patagonia").show();
      $("#label_antiguedad").show();
      $("#antiguedad").show();
    } else {
      $("#cama_adentro").hide();
      $("#retiro_mensual").hide();
      $("#label_categories").hide();
      $("#job_time").hide();
      $("#label_job_time").hide();
      $("#button_calculate").hide();
      $("#label_modalidad_de_pago").hide();
      $("#modalidad_de_pago").hide();
      $("#label_patagonia").hide();
      $("#patagonia").hide();
      $("#label_antiguedad").hide();
      $("#antiguedad").hide();
    }
  });
  $("select").on("change", function () {
    $("#job_time").val(0);
    $("#antiguedad").val(0);
    $("#basictextDiv").hide();
    $("#antiguedadtextDiv").hide();
    $("#patagoniatextDiv").hide();
    $("#totaltextDiv").hide();
    $("#errorDiv").hide();
  });
  $("#retiro_mensual").on("change", function () {
    select_value_idx = document.getElementById("retiro_mensual").value;
  });
  $("#cama_adentro").on("change", function () {
    select_value_idx = document.getElementById("cama_adentro").value;
  });
  $("#modalidad_de_pago").on("change", function () {
    payment_method = document.getElementById("modalidad_de_pago").value;
  });
  $("#patagonia").on("change", function () {
    patagonia_percentage = document.getElementById("patagonia").value;
  });
  $("#button_calculate").on("click", function () {
    jobTime = $("#job_time").val();
    antiguedad = $("#antiguedad").val();
    var divB = document.getElementById("basictextDiv");
    var divA = document.getElementById("antiguedadtextDiv");
    var divP = document.getElementById("patagoniatextDiv");
    var divT = document.getElementById("totaltextDiv");
    var divE = document.getElementById("errorDiv");
    $("#basictextDiv").hide();
    $("#antiguedadtextDiv").hide();
    $("#patagoniatextDiv").hide();
    $("#totaltextDiv").hide();
    if (payment_method === "pago_mensual") {
      if (valSelectJob == "cama_adentro") {
        select_value = CONSTANTS[month_idx].MENSUAL_CAMA_ADENTRO[select_value_idx];
      } else if (valSelectJob == "retiro_mensual") {
        select_value = CONSTANTS[month_idx].MENSUAL_RETIRO[select_value_idx];
      }
      if (jobTime >= 24) {
        producto = select_value / 48;
        basic = producto * jobTime;
        patagonia = basic * patagonia_percentage;
        antiguedad = basic * antiguedad * 0.01;
        total = basic + antiguedad + patagonia;
        basic = basic.toFixed(2);
        patagonia = patagonia.toFixed(2);
        antiguedad = antiguedad.toFixed(2);
        total = total.toFixed(2);
        divB.textContent = "-Pago basico por mes: $ ".concat(basic);
        if (antiguedad > 0) {
          divA.textContent = "-Extra antiguedad: $ ".concat(antiguedad);
          $("#antiguedadtextDiv").show();
        }
        if (patagonia > 0) {
          divP.textContent = "-Adicional Patagonia: $ ".concat(patagonia);
          $("#patagoniatextDiv").show();
        }
        if (patagonia > 0 || antiguedad > 0) {
          $("#basictextDiv").show();
        }
        divT.textContent = "Pago total por mes: $ ".concat(total);
        $("#totaltextDiv").show();
        $("#errorDiv").hide();
      } else {
        divE.textContent = "Por menos de 24 horas semanales, corresponde pago por hora.";
        $("#errorDiv").show();
        $("#basictextDiv").hide();
        $("#antiguedadtextDiv").hide();
        $("#patagoniatextDiv").hide();
        $("#totaltextDiv").hide();
      }
    } else if (payment_method === "pago_por_hora") {
      if (valSelectJob == "cama_adentro") {
        select_value = CONSTANTS[month_idx].POR_HORA_CAMA_ADENTRO[select_value_idx];
      } else if (valSelectJob == "retiro_mensual") {
        select_value = CONSTANTS[month_idx].POR_HORA_RETIRO[select_value_idx];
      }
      if (jobTime < 24) {
        basic = select_value * jobTime;
        patagonia = basic * patagonia_percentage;
        antiguedad = basic * antiguedad * 0.01;
        total = basic + antiguedad + patagonia;
        basic = basic.toFixed(2);
        patagonia = patagonia.toFixed(2);
        antiguedad = antiguedad.toFixed(2);
        total = total.toFixed(2);
        divB.textContent = "-Pago basico por semana: $ ".concat(basic);
        if (antiguedad > 0) {
          divA.textContent = "-Antiguedad: $ ".concat(antiguedad);
          $("#antiguedadtextDiv").show();
        }
        if (patagonia > 0) {
          divP.textContent = "-Adicional Patagonia: $ ".concat(patagonia);
          $("#patagoniatextDiv").show();
        }
        if (patagonia > 0 || antiguedad > 0) {
          $("#basictextDiv").show();
        }
        divT.textContent = "Pago total por semana: $ ".concat(total);
        $("#totaltextDiv").show();
        $("#errorDiv").hide();
      } else {
        divE.textContent = "Desde 24 horas semanales, corresponde pago mensual.";
        $("#errorDiv").show();
        $("#basictextDiv").hide();
        $("#antiguedadtextDiv").hide();
        $("#patagoniatextDiv").hide();
        $("#totaltextDiv").hide();
      }
    }
  });
});
