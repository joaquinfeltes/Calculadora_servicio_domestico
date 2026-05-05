const CONSTANTS = {
    ENERO_2025: {
        MENSUAL_RETIRO: [0,  430878, 400310, 390567, 351233],
        MENSUAL_CAMA_ADENTRO: [0, 479950, 445613, 390567, 435246, 390567],
        POR_HORA_RETIRO: [0, 3454, 3270, 3089, 2863],
        POR_HORA_CAMA_ADENTRO: [0, 3783, 3585, 3089, 3454, 3089],
        NO_REMUNERATIVO: [0, 0, 0],
        PATAGONIA_PERCENTAGE: 0.30,
    },
    JULIO_2025: {
        MENSUAL_RETIRO: [0,  450418.32, 418464.06, 408279.21, 367161.42],
        MENSUAL_CAMA_ADENTRO: [0, 501715.73, 465821.55, 408279.21, 454984.41, 408279.21],
        POR_HORA_RETIRO: [0, 3610.64, 3418.29, 3229.09, 2992.84],
        POR_HORA_CAMA_ADENTRO: [0, 3994.56, 3747.58, 3229.09, 3610.64, 3229.09],
        NO_REMUNERATIVO: [4000, 7000, 10000],
        PATAGONIA_PERCENTAGE: 0.30,
    },
    AGOSTO_2025: {
        MENSUAL_RETIRO: [0,  454922.50, 422648.70, 412362.01, 370833.03],
        MENSUAL_CAMA_ADENTRO: [0, 506732.89, 470479.77, 412362.01, 459534.25, 412362.01],
        POR_HORA_RETIRO: [0, 3646.75, 3452.48, 3261.38, 3022.77],
        POR_HORA_CAMA_ADENTRO: [0, 3994.10, 3785.06, 3261.38, 3646.75, 3261.38],
        NO_REMUNERATIVO: [4000, 6500, 9500],
        PATAGONIA_PERCENTAGE: 0.30,
    },
    SEPTIEMBRE_2025: {
        MENSUAL_RETIRO: [0,  459471.73, 426875.19, 416485.63, 374541.36],
        MENSUAL_CAMA_ADENTRO: [0, 511800.22, 475184.56, 416485.63, 464129.59, 416485.63],
        POR_HORA_RETIRO: [0, 3683.21, 3487.00, 3293.99, 3052.99],
        POR_HORA_CAMA_ADENTRO: [0, 4034.05, 3822.91, 3293.99, 3683.21, 3293.99],
        NO_REMUNERATIVO: [4000, 6500, 9500],
        PATAGONIA_PERCENTAGE: 0.30,
    },
    OCTUBRE_2025: {
        MENSUAL_RETIRO: [0,  459471.73, 426875.19, 416485.63, 374541.36],
        MENSUAL_CAMA_ADENTRO: [0, 511800.22, 475184.56, 416485.63, 464129.59, 416485.63],
        POR_HORA_RETIRO: [0, 3683.21, 3487.00, 3293.99, 3052.99],
        POR_HORA_CAMA_ADENTRO: [0, 4034.05, 3822.91, 3293.99, 3683.21, 3293.99],
        NO_REMUNERATIVO: [0, 0, 0],
        PATAGONIA_PERCENTAGE: 0.30,
    },
    NOVIEMBRE_2025: {
        MENSUAL_RETIRO: [0,  465904.33, 432851.44, 422316.42, 379784.94],
        MENSUAL_CAMA_ADENTRO: [0, 518965.42, 481837.15, 422316.42, 470627.41, 422316.42],
        POR_HORA_RETIRO: [0, 3734.78, 3535.82, 3340.11, 3095.73],
        POR_HORA_CAMA_ADENTRO: [0, 4090.52, 3876.43, 3340.11, 3734.78, 3340.11],
        NO_REMUNERATIVO: [6000, 9000, 14000],
        PATAGONIA_PERCENTAGE: 0.30,
    },
    DICIEMBRE_2025: {
        MENSUAL_RETIRO: [0,  471961.70, 438478.51, 427806.54, 384722.14],
        MENSUAL_CAMA_ADENTRO: [0, 525711.97, 488101.03, 427806.54, 476745.56, 427806.54],
        POR_HORA_RETIRO: [0, 3783.33, 3581.79, 3383.53, 3135.98],
        POR_HORA_CAMA_ADENTRO: [0, 4143.70, 3926.82, 3383.53, 3783.53, 3383.53],
        NO_REMUNERATIVO: [6000, 9000, 14000],
        PATAGONIA_PERCENTAGE: 0.30,
    },
    ENERO_2026: {
        MENSUAL_RETIRO: [0,  485961.09, 452478.51, 441806.54, 398722.14],
        MENSUAL_CAMA_ADENTRO: [0, 539711.97, 502101.03, 441806.54, 476745.56, 441806.54],
        POR_HORA_RETIRO: [0, 3895.56, 3696.15, 3494.25, 3250.13],
        POR_HORA_CAMA_ADENTRO: [0, 4254.05, 4039.45, 3494.25, 3894.43, 3494.25],
        NO_REMUNERATIVO: [0, 0, 0],
        PATAGONIA_PERCENTAGE: 0.30,
    },
    FEBRERO_2026: {
        MENSUAL_RETIRO: [0,  493250.51, 459265.69, 448433.64, 404702.97],
        MENSUAL_CAMA_ADENTRO: [0, 547807.65, 509632.55, 448433.64, 498106.74, 448433.64],
        POR_HORA_RETIRO: [0, 3953.99, 3751.59, 3546.66, 3298.88],
        POR_HORA_CAMA_ADENTRO: [0, 4317.86, 4100.04, 3546.66, 3952.85, 3546.66],
        NO_REMUNERATIVO: [8000, 11500, 20000],
        PATAGONIA_PERCENTAGE: 0.30,
    },
    MARZO_2026: {
        MENSUAL_RETIRO: [0,  500649.26, 466154.67, 455160.14, 410773.52],
        MENSUAL_CAMA_ADENTRO: [0, 556024.77, 517277.03, 455160.14, 505578.35, 455160.14],
        POR_HORA_RETIRO: [0, 4013.30, 3807.86, 3599.87, 3348.33],
        POR_HORA_CAMA_ADENTRO: [0, 4382.63, 4161.54, 3599.87, 4012.14, 3599.87],
        NO_REMUNERATIVO: [8000, 11500, 20000],
        PATAGONIA_PERCENTAGE: 0.30,
    },
    ABRIL_2026: {
        MENSUAL_RETIRO: [0,  519840.95, 484725.45, 473533.02, 428347.44],
        MENSUAL_CAMA_ADENTRO: [0, 576213.21, 536768.02, 473533.02, 524858.76, 473533.02],
        POR_HORA_RETIRO: [0, 4167.14, 3959.56, 3745.18, 3491.58],
        POR_HORA_CAMA_ADENTRO: [0, 4541.75, 4318.35, 3745.18, 4165.14, 3745.18],
        NO_REMUNERATIVO: [0, 0, 0],
        PATAGONIA_PERCENTAGE: 0.31,
    },
    MAYO_2026: {
        MENSUAL_RETIRO: [0,  528158.40, 492481.06, 481109.55, 435201.00],
        MENSUAL_CAMA_ADENTRO: [0, 585432.62, 545365.31, 481109.55, 533256.50, 481109.55],
        POR_HORA_RETIRO: [0, 4233.82, 4022.91, 3805.10, 3547.45],
        POR_HORA_CAMA_ADENTRO: [0, 4614.42, 4387.44, 3805.10, 4231.79, 3805.10],
        NO_REMUNERATIVO: [0, 0, 0],
        PATAGONIA_PERCENTAGE: 0.31,
    },
    JUNIO_2026: {
        MENSUAL_RETIRO: [0,  536080.78, 499868.28, 488326.19, 441729.02],
        MENSUAL_CAMA_ADENTRO: [0, 594214.11, 553536.65, 488326.19, 541255.35, 488326.19],
        POR_HORA_RETIRO: [0, 4297.33, 4083.26, 3862.18, 3600.66],
        POR_HORA_CAMA_ADENTRO: [0, 4683.64, 4453.26, 3862.18, 4295.26, 3862.18],
        NO_REMUNERATIVO: [0, 0, 0],
        PATAGONIA_PERCENTAGE: 0.31,
    },
    JULIO_2026: {
        MENSUAL_RETIRO: [0,  553725.91, 517006.43, 505302.76, 458053.22],
        MENSUAL_CAMA_ADENTRO: [0, 612673.11, 571426.17, 505302.76, 558972.92, 505302.76],
        POR_HORA_RETIRO: [0, 4438.77, 4223.25, 3996.45, 3733.72],
        POR_HORA_CAMA_ADENTRO: [0, 4829.13, 4597.18, 3996.45, 4435.86, 3996.45],
        NO_REMUNERATIVO: [0, 0, 0],
        PATAGONIA_PERCENTAGE: 0.31,
    },
};

$(document).ready(function () {
  // month parsing
  no_remunerated = 0;
  month_idx = "AGOSTO_2022";
  $("#job_time").val(0);
  $("#antiguedad").val(0);
  $("#select_month").on("change", function () {
    month_idx = document.getElementById("select_month").value;
    $("#noRemunerativatextDiv").hide();
  });

  $("#job_type").on("change", function () {
    valSelectJob = $(this).val();
    select_value = 0;
    if (valSelectJob == "cama_adentro") {
      select_value_idx = document.getElementById("cama_adentro").value;
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
      select_value_idx = document.getElementById("retiro_mensual").value;
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
    $("#basictextDiv").hide();
    $("#antiguedadtextDiv").hide();
    $("#patagoniatextDiv").hide();
    $("#totaltextDiv").hide();
    $("#errorDiv").hide();
    $("#noRemunerativatextDiv").hide();
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

    if (jobTime < 12) {
      no_remunerated = CONSTANTS[month_idx].NO_REMUNERATIVO[0];
    } else if (jobTime >= 12 && jobTime <= 15) {
      no_remunerated = CONSTANTS[month_idx].NO_REMUNERATIVO[1];
    }
    else if (jobTime > 15) {
      no_remunerated = CONSTANTS[month_idx].NO_REMUNERATIVO[2];
    } else {
      no_remunerated = 0;
    }
    antiguedad = $("#antiguedad").val();
    var divB = document.getElementById("basictextDiv");
    var divA = document.getElementById("antiguedadtextDiv");
    var divP = document.getElementById("patagoniatextDiv");
    var divT = document.getElementById("totaltextDiv");
    var divNR = document.getElementById("noRemunerativatextDiv");
    var divE = document.getElementById("errorDiv");
    divNR.textContent = "Suma no remunerativa del mes: $ ".concat(no_remunerated);
    $("#basictextDiv").hide();
    $("#antiguedadtextDiv").hide();
    $("#patagoniatextDiv").hide();
    $("#totaltextDiv").hide();
    $("#noRemunerativatextDiv").hide();
    if (payment_method === "pago_mensual") {
      if (valSelectJob == "cama_adentro") {
        select_value = CONSTANTS[month_idx].MENSUAL_CAMA_ADENTRO[select_value_idx];
      } else if (valSelectJob == "retiro_mensual") {
        select_value = CONSTANTS[month_idx].MENSUAL_RETIRO[select_value_idx];
      }
      if (jobTime >= 24) {
        producto = select_value / 48;
        basic = producto * jobTime;
        patagonia = basic * patagonia_percentage * CONSTANTS[month_idx].PATAGONIA_PERCENTAGE;
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
        $("#noRemunerativatextDiv").show();
        if (no_remunerated > 0) {
          $("#noRemunerativatextDiv").show();
        } else {
          $("#noRemunerativatextDiv").hide();
        }
      } else {
        divE.textContent = "Por menos de 24 horas semanales, corresponde pago por hora.";
        $("#errorDiv").show();
        $("#basictextDiv").hide();
        $("#antiguedadtextDiv").hide();
        $("#patagoniatextDiv").hide();
        $("#totaltextDiv").hide();
        $("#noRemunerativatextDiv").hide();
      }
    } else if (payment_method === "pago_por_hora") {
      if (valSelectJob == "cama_adentro") {
        select_value = CONSTANTS[month_idx].POR_HORA_CAMA_ADENTRO[select_value_idx];
      } else if (valSelectJob == "retiro_mensual") {
        select_value = CONSTANTS[month_idx].POR_HORA_RETIRO[select_value_idx];
      }
      if (jobTime < 24) {
        basic = select_value * jobTime;
        patagonia = basic * patagonia_percentage * CONSTANTS[month_idx].PATAGONIA_PERCENTAGE;
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
        if (no_remunerated > 0) {
          $("#noRemunerativatextDiv").show();
        } else {
          $("#noRemunerativatextDiv").hide();
        }
      } else {
        divE.textContent = "Desde 24 horas semanales, corresponde pago mensual.";
        $("#errorDiv").show();
        $("#basictextDiv").hide();
        $("#antiguedadtextDiv").hide();
        $("#patagoniatextDiv").hide();
        $("#totaltextDiv").hide();
        $("#noRemunerativatextDiv").hide();
      }
    }
  });
});
