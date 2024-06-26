const CONSTANTS = {
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
  ABRIL_2023: {
    MENSUAL_RETIRO: [0, 104993, 97544.5, 95170.5, 85586],
    MENSUAL_CAMA_ADENTRO: [0, 116950.5, 108583.5, 95170.5, 106057.5, 95170.5],
    POR_HORA_RETIRO: [0, 841.5, 796.5, 752, 697.5],
    POR_HORA_CAMA_ADENTRO: [0, 921.5, 873.5, 752, 841.5, 752],
  },
  MAYO_2023: {
    MENSUAL_RETIRO: [0, 111440, 103534, 101014, 90841],
    MENSUAL_CAMA_ADENTRO: [0, 124131.5, 115251, 101014, 112569.5, 101014],
    POR_HORA_RETIRO: [0, 893, 845.5, 798, 740],
    POR_HORA_CAMA_ADENTRO: [0, 978, 927, 798, 893, 798],
  },
  JUNIO_2023: {
    MENSUAL_RETIRO: [0, 116966, 108668, 106023, 95345.5],
    MENSUAL_CAMA_ADENTRO: [0, 130287, 120966, 106023, 118151.5, 106023],
    POR_HORA_RETIRO: [0, 937.5, 887.5, 838, 777],
    POR_HORA_CAMA_ADENTRO: [0, 1026.5, 973, 838, 937.5, 838],
  },
  JULIO_2023: {
    MENSUAL_RETIRO: [0,  140359.5, 130402, 127228, 114415],
    MENSUAL_CAMA_ADENTRO: [0, 156344.5, 145159.5, 127228, 141782, 127228],
    POR_HORA_RETIRO: [0, 1125, 1065, 1006, 932.5],
    POR_HORA_CAMA_ADENTRO: [0, 1232, 1168, 1006, 1125, 1006],
  },
  AGOSTO_2023: {
    MENSUAL_RETIRO: [0,  149716.5, 139095.5, 135709.5, 122042.5],
    MENSUAL_CAMA_ADENTRO: [0, 166767.5, 154836.5, 135709.5, 151234, 135709.5],
    POR_HORA_RETIRO: [0, 1200, 1136, 1073, 995],
    POR_HORA_CAMA_ADENTRO: [0, 1314, 1245.5, 1073, 1200, 1073],
  },
SEPTIEMBRE_2023: {
    MENSUAL_RETIRO: [0,  159074, 147788.5, 144191.5, 129670],
    MENSUAL_CAMA_ADENTRO: [0, 177190.5, 164514, 144191.5, 160686.5, 144191.5],
    POR_HORA_RETIRO: [0, 1275, 1207, 1140, 1057],
    POR_HORA_CAMA_ADENTRO: [0, 1396.5, 1323.5, 1140, 1275, 1140],
  },
  OCTUBRE_2023: {
    MENSUAL_RETIRO: [0,  178163.0, 165523.5, 161495.5, 145230.5],
    MENSUAL_CAMA_ADENTRO: [0, 198453.5, 184256.0, 161495.5, 179969, 161495.5],
    POR_HORA_RETIRO: [0, 1428, 1352, 1277, 1184],
    POR_HORA_CAMA_ADENTRO: [0, 1564.5, 1482.5, 1277, 1428, 1277],
  },
NOVIEMBRE_2023: {
    MENSUAL_RETIRO: [0,  197252, 183258, 178797.5, 160791],
    MENSUAL_CAMA_ADENTRO: [0, 219716.5, 203997.5, 178797.5, 199251.5, 178797.5],
    POR_HORA_RETIRO: [0, 1581, 1497, 1414, 1311],
    POR_HORA_CAMA_ADENTRO: [0, 1732, 1641.5, 1414, 1581, 1414],
  },
DICIEMBRE_2023: {
    MENSUAL_RETIRO: [0,  213159.5, 198037, 193217, 173758],
    MENSUAL_CAMA_ADENTRO: [0, 237435.5, 220449, 193217, 215320, 193217],
    POR_HORA_RETIRO: [0, 1708.5, 1617.5, 1528, 1416.5],
    POR_HORA_CAMA_ADENTRO: [0, 1871.5, 1773.5, 1528, 1708.5, 1528],
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
