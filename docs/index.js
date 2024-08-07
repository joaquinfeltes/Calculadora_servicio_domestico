const CONSTANTS = {
  ENERO_2024: {
    MENSUAL_RETIRO: [0,  213159.5, 198037, 193217, 173758],
    MENSUAL_CAMA_ADENTRO: [0, 237435.5, 220449, 193217, 215320, 193217],
    POR_HORA_RETIRO: [0, 1708.5, 1617.5, 1528, 1416.5],
    POR_HORA_CAMA_ADENTRO: [0, 1871.5, 1773.5, 1528, 1708.5, 1528],
  },
  FEBRERO_2024: {
    MENSUAL_RETIRO: [0,  255791, 237644, 231860, 208510],
    MENSUAL_CAMA_ADENTRO: [0, 284923, 264539, 231860, 258384, 231860],
    POR_HORA_RETIRO: [0, 2050, 1941, 1834, 1700],
    POR_HORA_CAMA_ADENTRO: [0, 2246, 2128, 1834, 2050, 1834],
  },
    MARZO_2024: {
      MENSUAL_RETIRO: [0,  294160, 273291, 266639, 239786],
      MENSUAL_CAMA_ADENTRO: [0, 327661, 304220, 266639, 297142, 266639],
      POR_HORA_RETIRO: [0, 2358, 2232, 2109, 1955],
      POR_HORA_CAMA_ADENTRO: [0, 2583, 2447, 2109, 2358, 2109],
    },
    ABRIL_2024: {
      MENSUAL_RETIRO: [0,  326518, 303353, 295970, 266163],
      MENSUAL_CAMA_ADENTRO: [0, 363704, 337684, 295970, 329827, 295970],
      POR_HORA_RETIRO: [0, 2617, 2478, 2341, 2170],
      POR_HORA_CAMA_ADENTRO: [0, 2867, 2717, 2341, 2617, 2341],
    },
    MAYO_2024: {
      MENSUAL_RETIRO: [0,  349374, 324588, 316688, 284794],
      MENSUAL_CAMA_ADENTRO: [0, 389163, 361322, 316688, 352915, 316688],
      POR_HORA_RETIRO: [0, 2800, 2651, 2504, 2322],
      POR_HORA_CAMA_ADENTRO: [0, 3067, 2907, 2504, 2800, 2504],
    },
    JULIO_2024: {
      MENSUAL_RETIRO: [0,  379070, 352177, 343606, 309001],
      MENSUAL_CAMA_ADENTRO: [0, 422241, 392034, 343606, 382912, 343606],
      POR_HORA_RETIRO: [0, 3038, 2876, 2716, 2519],
      POR_HORA_CAMA_ADENTRO: [0, 3327, 3154, 2716, 3038, 2716],
    },
    AGOSTO_2024: {
      MENSUAL_RETIRO: [0,  394233, 366265, 357350, 321365],
      MENSUAL_CAMA_ADENTRO: [0, 439131, 407715, 357350, 398229, 357350],
      POR_HORA_RETIRO: [0, 3159, 2991, 2825, 2620],
      POR_HORA_CAMA_ADENTRO: [0, 3460, 3280, 2825, 3159, 2825],
    },
};

$(document).ready(function () {
  // month parsing
  month_idx = "AGOSTO_2022";
  $("#job_time").val(0);
  $("#antiguedad").val(0);
  $("#select_month").on("change", function () {
    month_idx = document.getElementById("select_month").value;
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
