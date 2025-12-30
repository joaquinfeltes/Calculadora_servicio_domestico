const CONSTANTS = {
    ENERO_2024: {
        MENSUAL_RETIRO: [0,  213159.5, 198037, 193217, 173758],
        MENSUAL_CAMA_ADENTRO: [0, 237435.5, 220449, 193217, 215320, 193217],
        POR_HORA_RETIRO: [0, 1708.5, 1617.5, 1528, 1416.5],
        POR_HORA_CAMA_ADENTRO: [0, 1871.5, 1773.5, 1528, 1708.5, 1528],
        NO_REMUNERATIVO: [0, 0, 0],
    },
    FEBRERO_2024: {
        MENSUAL_RETIRO: [0,  255791, 237644, 231860, 208510],
        MENSUAL_CAMA_ADENTRO: [0, 284923, 264539, 231860, 258384, 231860],
        POR_HORA_RETIRO: [0, 2050, 1941, 1834, 1700],
        POR_HORA_CAMA_ADENTRO: [0, 2246, 2128, 1834, 2050, 1834],
        NO_REMUNERATIVO: [0, 0, 0],
    },
    MARZO_2024: {
        MENSUAL_RETIRO: [0,  294160, 273291, 266639, 239786],
        MENSUAL_CAMA_ADENTRO: [0, 327661, 304220, 266639, 297142, 266639],
        POR_HORA_RETIRO: [0, 2358, 2232, 2109, 1955],
        POR_HORA_CAMA_ADENTRO: [0, 2583, 2447, 2109, 2358, 2109],
        NO_REMUNERATIVO: [0, 0, 0],
    },
    ABRIL_2024: {
        MENSUAL_RETIRO: [0,  326518, 303353, 295970, 266163],
        MENSUAL_CAMA_ADENTRO: [0, 363704, 337684, 295970, 329827, 295970],
        POR_HORA_RETIRO: [0, 2617, 2478, 2341, 2170],
        POR_HORA_CAMA_ADENTRO: [0, 2867, 2717, 2341, 2617, 2341],
        NO_REMUNERATIVO: [0, 0, 0],
    },
    MAYO_2024: {
        MENSUAL_RETIRO: [0,  349374, 324588, 316688, 284794],
        MENSUAL_CAMA_ADENTRO: [0, 389163, 361322, 316688, 352915, 316688],
        POR_HORA_RETIRO: [0, 2800, 2651, 2504, 2322],
        POR_HORA_CAMA_ADENTRO: [0, 3067, 2907, 2504, 2800, 2504],
        NO_REMUNERATIVO: [0, 0, 0],
    },
    JULIO_2024: {
        MENSUAL_RETIRO: [0,  379070, 352177, 343606, 309001],
        MENSUAL_CAMA_ADENTRO: [0, 422241, 392034, 343606, 382912, 343606],
        POR_HORA_RETIRO: [0, 3038, 2876, 2716, 2519],
        POR_HORA_CAMA_ADENTRO: [0, 3327, 3154, 2716, 3038, 2716],
        NO_REMUNERATIVO: [0, 0, 0],
    },
    AGOSTO_2024: {
        MENSUAL_RETIRO: [0,  394233, 366265, 357350, 321365],
        MENSUAL_CAMA_ADENTRO: [0, 439131, 407715, 357350, 398229, 357350],
        POR_HORA_RETIRO: [0, 3159, 2991, 2825, 2620],
        POR_HORA_CAMA_ADENTRO: [0, 3460, 3280, 2825, 3159, 2825],
        NO_REMUNERATIVO: [0, 0, 0],
    },
    SEPTIEMBRE_2024: {
        MENSUAL_RETIRO: [0,  406849, 377985, 368786, 331654],
        MENSUAL_CAMA_ADENTRO: [0, 453184, 420762, 368786, 410973, 368786],
        POR_HORA_RETIRO: [0, 3261, 3087, 2916, 2704],
        POR_HORA_CAMA_ADENTRO: [0, 3572, 3385, 2916, 3261, 2916],
        NO_REMUNERATIVO: [0, 0, 0],
    },
    OCTUBRE_2024: {
        MENSUAL_RETIRO: [0,  418241, 388569, 379112, 340931],
        MENSUAL_CAMA_ADENTRO: [0, 465873, 432544, 379112, 422480, 379112],
        POR_HORA_RETIRO: [0, 3352, 3174, 2998, 2779],
        POR_HORA_CAMA_ADENTRO: [0, 3672, 3480, 2998, 3352, 2998],
        NO_REMUNERATIVO: [0, 0, 0],
    },
    NOVIEMBRE_2024: {
        MENSUAL_RETIRO: [0,  418241, 388569, 379112, 340931],
        MENSUAL_CAMA_ADENTRO: [0, 465873, 432544, 379112, 422480, 379112],
        POR_HORA_RETIRO: [0, 3352, 3174, 2998, 2779],
        POR_HORA_CAMA_ADENTRO: [0, 3672, 3480, 2998, 3352, 2998],
        NO_REMUNERATIVO: [0, 0, 0],
    },
    DICIEMBRE_2024: {
        MENSUAL_RETIRO: [0,  425769, 395563, 385936, 347068],
        MENSUAL_CAMA_ADENTRO: [0, 474259, 440329, 385936, 430085, 385936],
        POR_HORA_RETIRO: [0, 3413, 3231, 3052, 2829],
        POR_HORA_CAMA_ADENTRO: [0, 3738, 3542, 3052, 3413, 3052],
        NO_REMUNERATIVO: [0, 0, 0],
    },
    ENERO_2025: {
        MENSUAL_RETIRO: [0,  430878, 400310, 390567, 351233],
        MENSUAL_CAMA_ADENTRO: [0, 479950, 445613, 390567, 435246, 390567],
        POR_HORA_RETIRO: [0, 3454, 3270, 3089, 2863],
        POR_HORA_CAMA_ADENTRO: [0, 3783, 3585, 3089, 3454, 3089],
        NO_REMUNERATIVO: [0, 0, 0],

    },
    JULIO_2025: {
        MENSUAL_RETIRO: [0,  450418.32, 418464.06, 408279.21, 367161.42],
        MENSUAL_CAMA_ADENTRO: [0, 501715.73, 465821.55, 408279.21, 454984.41, 408279.21],
        POR_HORA_RETIRO: [0, 3610.64, 3418.29, 3229.09, 2992.84],
        POR_HORA_CAMA_ADENTRO: [0, 3994.56, 3747.58, 3229.09, 3610.64, 3229.09],
        NO_REMUNERATIVO: [4000, 7000, 10000],
    },
    AGOSTO_2025: {
        MENSUAL_RETIRO: [0,  454922.50, 422648.70, 412362.01, 370833.03],
        MENSUAL_CAMA_ADENTRO: [0, 506732.89, 470479.77, 412362.01, 459534.25, 412362.01],
        POR_HORA_RETIRO: [0, 3646.75, 3452.48, 3261.38, 3022.77],
        POR_HORA_CAMA_ADENTRO: [0, 3994.10, 3785.06, 3261.38, 3646.75, 3261.38],
        NO_REMUNERATIVO: [4000, 6500, 9500],
    },
    SEPTIEMBRE_2025: {
        MENSUAL_RETIRO: [0,  459471.73, 426875.19, 416485.63, 374541.36],
        MENSUAL_CAMA_ADENTRO: [0, 511800.22, 475184.56, 416485.63, 464129.59, 416485.63],
        POR_HORA_RETIRO: [0, 3683.21, 3487.00, 3293.99, 3052.99],
        POR_HORA_CAMA_ADENTRO: [0, 4034.05, 3822.91, 3293.99, 3683.21, 3293.99],
        NO_REMUNERATIVO: [4000, 6500, 9500],
    },
    OCTUBRE_2025: {
        MENSUAL_RETIRO: [0,  459471.73, 426875.19, 416485.63, 374541.36],
        MENSUAL_CAMA_ADENTRO: [0, 511800.22, 475184.56, 416485.63, 464129.59, 416485.63],
        POR_HORA_RETIRO: [0, 3683.21, 3487.00, 3293.99, 3052.99],
        POR_HORA_CAMA_ADENTRO: [0, 4034.05, 3822.91, 3293.99, 3683.21, 3293.99],
        NO_REMUNERATIVO: [0, 0, 0],
    },
    NOVIEMBRE_2025: {
        MENSUAL_RETIRO: [0,  465904.33, 432851.44, 422316.42, 379784.94],
        MENSUAL_CAMA_ADENTRO: [0, 518965.42, 481837.15, 422316.42, 470627.41, 422316.42],
        POR_HORA_RETIRO: [0, 3734.78, 3535.82, 3340.11, 3095.73],
        POR_HORA_CAMA_ADENTRO: [0, 4090.52, 3876.43, 3340.11, 3734.78, 3340.11],
        NO_REMUNERATIVO: [6000, 9000, 14000],
    },
    DICIEMBRE_2025: {
        MENSUAL_RETIRO: [0,  471961.70, 438478.51, 427806.54, 384722.14],
        MENSUAL_CAMA_ADENTRO: [0, 525711.97, 488101.03, 427806.54, 476745.56, 427806.54],
        POR_HORA_RETIRO: [0, 3783.33, 3581.79, 3383.53, 3135.98],
        POR_HORA_CAMA_ADENTRO: [0, 4143.70, 3926.82, 3383.53, 3783.53, 3383.53],
        NO_REMUNERATIVO: [6000, 9000, 14000],
    },
    ENERO_2026: {
        MENSUAL_RETIRO: [0,  485961.09, 452478.51, 441806.54, 398722.14],
        MENSUAL_CAMA_ADENTRO: [0, 539711.97, 502101.03, 441806.54, 476745.56, 441806.54],
        POR_HORA_RETIRO: [0, 3895.56, 3696.15, 3494.25, 3250.10],
        POR_HORA_CAMA_ADENTRO: [0, 4254.05, 4039.45, 3494.25, 3894.43, 3494.25],
        NO_REMUNERATIVO: [0, 0, 0],
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
