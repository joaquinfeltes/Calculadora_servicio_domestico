


const CONSTANTS = {
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
    MENSUAL_RETIRO: [0, 59528, 55304.5, 53958.5, 48524.5],
    MENSUAL_CAMA_ADENTRO: [0, 66307, 61563.5, 53958.5, 60131, 53958.5],
    POR_HORA_RETIRO: [0, 477, 451.5, 426, 395.5],
    POR_HORA_CAMA_ADENTRO: [0, 522.5, 495, 426, 477, 426],
  },
SEPTIEMBRE_2022: {
    MENSUAL_RETIRO: [0, 64443, 59871, 58414, 52531],
    MENSUAL_CAMA_ADENTRO: [0, 71782, 66646.5, 58414, 65096, 58414],
    POR_HORA_RETIRO: [0, 516.5, 489, 461, 428],
    POR_HORA_CAMA_ADENTRO: [0, 565.5, 536, 461, 516.5, 461],
  },
OCTUBRE_2022: {
    MENSUAL_RETIRO: [0, 69358, 64437.5, 62869, 56537.5],
    MENSUAL_CAMA_ADENTRO: [0, 77257, 71730, 62869, 70061, 62869],
    POR_HORA_RETIRO: [0, 556, 526, 496, 460.5],
    POR_HORA_CAMA_ADENTRO: [0, 608.5, 577, 496, 556, 496],
  },
NOVIEMBRE_2022: {
    MENSUAL_RETIRO: [0, 74273, 69004, 67324.5, 60544],
    MENSUAL_CAMA_ADENTRO: [0, 82732, 76813, 67324.5, 75026, 67324.5],
    POR_HORA_RETIRO: [0, 595, 563, 531.5, 493],
    POR_HORA_CAMA_ADENTRO: [0, 651.5, 617.5, 531.5, 595, 531.5],
  },
  DICIEMBRE_2022: {
    MENSUAL_RETIRO: [0, 80215, 74524.5, 72710.5, 65388],
    MENSUAL_CAMA_ADENTRO: [0, 89351, 82958.5, 72710.5, 81028.5, 72710.5],
    POR_HORA_RETIRO: [0, 643, 608.5, 574.5, 532.5],
    POR_HORA_CAMA_ADENTRO: [0, 704, 667, 574.5, 643, 574.5],
  },
  ENERO_2023: {
    MENSUAL_RETIRO: [0, 85414, 79355, 77423.5, 69626],
    MENSUAL_CAMA_ADENTRO: [0, 95142, 88335, 77423.5, 86280, 77423.5],
    POR_HORA_RETIRO: [0, 684.5, 647.5, 611.5, 567],
    POR_HORA_CAMA_ADENTRO: [0, 749.5, 710.5, 611.5, 684.5, 611.5],
  },
  FEBRERO_2023: {
    MENSUAL_RETIRO: [0, 89128, 82805, 80789.5, 72653],
    MENSUAL_CAMA_ADENTRO: [0, 99278.5, 92176, 80789.5, 90031.5, 80789.5],
    POR_HORA_RETIRO: [0, 714, 676, 638, 592],
    POR_HORA_CAMA_ADENTRO: [0, 782, 741, 638, 714, 638],
  },
  MARZO_2023: {
    MENSUAL_RETIRO: [0, 92099, 85565, 83482.5, 75075],
    MENSUAL_CAMA_ADENTRO: [0, 102588, 95248.5, 83482.5, 93032.5, 83482.5],
    POR_HORA_RETIRO: [0, 738, 698.5, 659.5, 611.5],
    POR_HORA_CAMA_ADENTRO: [0, 808, 766, 659.5, 738, 659.5],
  },
};

$(document).ready(function () {
  // month parsing
  month_idx = "AGOSTO_2022";
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
