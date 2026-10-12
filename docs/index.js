const HORAS_MINIMAS_PAGO_MENSUAL = 24;
const SEMANAS_HORAS_DIVISOR = 48;
const ANTIGUEDAD_PORCENTAJE_POR_ANIO = 0.01;

// Campos que se muestran u ocultan según la modalidad de trabajo elegida
const JOB_FIELDS = [
  "label_categories",
  "job_time",
  "label_job_time",
  "button_calculate",
  "label_modalidad_de_pago",
  "modalidad_de_pago",
  "label_patagonia",
  "patagonia",
  "label_antiguedad",
  "antiguedad",
];
const CATEGORY_SELECTS = ["cama_adentro", "retiro_mensual"];
const RESULT_DIVS = [
  "basictextDiv",
  "antiguedadtextDiv",
  "patagoniatextDiv",
  "totaltextDiv",
  "noRemunerativatextDiv",
  "errorDiv",
];

// Todo lo que cambia entre pago mensual y pago por hora
const PAYMENT_MODES = {
  pago_mensual: {
    rateKeys: { cama_adentro: "MENSUAL_CAMA_ADENTRO", retiro_mensual: "MENSUAL_RETIRO" },
    isValidHours: (hours) => hours >= HORAS_MINIMAS_PAGO_MENSUAL,
    errorMessage: "Por menos de 24 horas semanales, corresponde pago por hora.",
    basic: (rate, hours) => (rate / SEMANAS_HORAS_DIVISOR) * hours,
    labels: { basic: "Pago básico por mes", total: "Pago total por mes" },
  },
  pago_por_hora: {
    rateKeys: { cama_adentro: "POR_HORA_CAMA_ADENTRO", retiro_mensual: "POR_HORA_RETIRO" },
    isValidHours: (hours) => hours < HORAS_MINIMAS_PAGO_MENSUAL,
    errorMessage: "Desde 24 horas semanales, corresponde pago mensual.",
    basic: (rate, hours) => rate * hours,
    labels: { basic: "Pago básico por semana", total: "Pago total por semana" },
  },
};

function hideResults() {
  RESULT_DIVS.forEach((id) => $("#" + id).hide());
}

function showResult(id, text) {
  $("#" + id).text(text).show();
}

function updateJobTypeFields(jobType) {
  const hasJob = CATEGORY_SELECTS.includes(jobType);
  JOB_FIELDS.forEach((id) => $("#" + id).toggle(hasJob));
  CATEGORY_SELECTS.forEach((id) => $("#" + id).toggle(id === jobType));
}

// Suma no remunerativa según horas trabajadas: <12, 12 a 15, >15
function getNoRemunerativo(monthData, hours) {
  if (hours < 12) return monthData.NO_REMUNERATIVO[0];
  if (hours <= 15) return monthData.NO_REMUNERATIVO[1];
  return monthData.NO_REMUNERATIVO[2];
}

function calculatePayment(mode, monthData, { jobType, category, hours, isPatagonia, antiguedadYears }) {
  const rate = monthData[mode.rateKeys[jobType]][category];
  const basic = mode.basic(rate, hours);
  const patagonia = basic * isPatagonia * monthData.PATAGONIA_PERCENTAGE;
  const antiguedad = basic * antiguedadYears * ANTIGUEDAD_PORCENTAJE_POR_ANIO;
  return { basic, patagonia, antiguedad, total: basic + antiguedad + patagonia };
}

function renderPayment(mode, payment, noRemunerativo) {
  const money = (n) => "$ " + n.toFixed(2);
  const { basic, patagonia, antiguedad, total } = payment;

  showResult("basictextDiv", `-${mode.labels.basic}: ${money(basic)}`);
  if (antiguedad > 0) showResult("antiguedadtextDiv", `-Extra antiguedad: ${money(antiguedad)}`);
  if (patagonia > 0) showResult("patagoniatextDiv", `-Adicional Patagonia: ${money(patagonia)}`);
  // El desglose solo se muestra si hay adicionales; sino alcanza con el total
  if (!(patagonia > 0 || antiguedad > 0)) $("#basictextDiv").hide();
  showResult("totaltextDiv", `${mode.labels.total}: ${money(total)}`);
  if (noRemunerativo > 0) {
    showResult("noRemunerativatextDiv", `Suma no remunerativa del mes: $ ${noRemunerativo}`);
  }
}

function onCalculate() {
  hideResults();

  const showError = (text) => showResult("errorDiv", text);

  const monthData = CONSTANTS[$("#select_month").val()];
  if (!monthData) return showError("Para calcular la remuneración debes elegir un mes.");

  const mode = PAYMENT_MODES[$("#modalidad_de_pago").val()];
  if (!mode) return showError("Para calcular la remuneración debes elegir el tipo de pago.");

  const jobType = $("#job_type").val();
  const category = $("#" + jobType).val();
  if (!CATEGORY_SELECTS.includes(jobType) || category === "0") {
    return showError("Para calcular la remuneración debes elegir una categoría.");
  }

  // Se valida el valor crudo: Number("blank") daría NaN
  if ($("#patagonia").val() === "blank") {
    return showError("Para calcular la remuneración debes indicar si es zona patagónica.");
  }

  // Number("") daría 0, por eso se rechaza el campo vacío
  const hours = Number($("#job_time").val());
  if ($("#job_time").val() === "" || !(hours > 0)) {
    return showError("Para calcular la remuneración debes ingresar las horas de trabajo por semana.");
  }

  if (!mode.isValidHours(hours)) return showError(mode.errorMessage);

  // Un campo vacío cuenta como 0 años
  const antiguedadYears = Number($("#antiguedad").val());
  if (!(antiguedadYears >= 0)) {
    return showError("Los años de antigüedad no pueden ser negativos.");
  }

  const payment = calculatePayment(mode, monthData, {
    jobType,
    category,
    hours,
    isPatagonia: Number($("#patagonia").val()),
    antiguedadYears,
  });
  renderPayment(mode, payment, getNoRemunerativo(monthData, hours));
}

$(document).ready(function () {
  $("#job_time").val(0);
  $("#antiguedad").val(0);

  $("#job_type").on("change", function () {
    updateJobTypeFields($(this).val());
  });
  $("select").on("change", hideResults);
  $("#button_calculate").on("click", onCalculate);
});
