const mensual_retiro_array = [0, 24000.5, 22298, 21755, 19564.5];
const mensual_cama_adentro_array = [0, 26734, 24821, 21755, 24243.5, 21755];
const por_hora_retiro_array = [0, 192, 181.5, 171.5, 159];
const por_hora_cama_adentro_array = [0, 210.5, 199.5, 171.5, 192, 171.5];

$(document).ready(function () {
  $("#job_type").on("change", function () {
    valSelectJob = $(this).val();
    select_value = 0;
    number = 0;
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
    }
  });
  $("select").on("change", function () {
    $("#job_time").val(0);
    $("#textDiv").hide();
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
    constant = document.getElementById("patagonia").value;
  });
  $("#button_calculate").on("click", function () {
    jobTime = $("#job_time").val();
    var div = document.getElementById("textDiv");
    var divE = document.getElementById("errorDiv");
    if (payment_method === "pago_mensual") {
      if (valSelectJob == "cama_adentro") {
        select_value = mensual_cama_adentro_array[select_value_idx];
      } else if (valSelectJob == "retiro_mensual") {
        select_value = mensual_retiro_array[select_value_idx];
      }
      if (jobTime >= 24) {
        producto = select_value / 48;
        total = producto * jobTime*constant;
        total = total.toFixed(2);
        div.textContent = "Pago por mes: $ ".concat(total);
        var text = div.textContent;
        $("#textDiv").show();
        $("#errorDiv").hide();
      } else {
        divE.textContent = "Por menos de 24 horas semanales, corresponde pago por hora.";
        var text = divE.textContent;
        $("#errorDiv").show();
        $("#textDiv").hide();
      }
    } else if (payment_method === "pago_por_hora") {
      if (valSelectJob == "cama_adentro") {
        select_value = por_hora_cama_adentro_array[select_value_idx];
      } else if (valSelectJob == "retiro_mensual") {
        select_value = por_hora_retiro_array[select_value_idx];
      }
      if (jobTime < 24) {
        total = select_value * jobTime * constant;
        total = total.toFixed(2);
        div.textContent = "Pago por semana: $ ".concat(total);
        var text = div.textContent;
        $("#textDiv").show();
        $("#errorDiv").hide();
      } else {
        divE.textContent = "Desde 24 horas semanales, corresponde pago mensual.";
        var text = divE.textContent;
        $("#errorDiv").show();
        $("#textDiv").hide();
      }
    }
  });
});
