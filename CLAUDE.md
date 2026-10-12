# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static, dependency-free web calculator (Spanish UI) for the minimum wage of Argentine domestic workers, built for the blog presupuestofamiliar.com.ar and hosted on GitHub Pages from `docs/`. There is no build, lint, or test tooling: open `docs/index.html` in a browser to run it. jQuery is loaded from a CDN.

## Architecture

- `docs/constants.js` — `CONSTANTS`, one block per month (e.g. `OCTUBRE_2026`) holding wage tables, plus global rules (`HORAS_MINIMAS_PAGO_MENSUAL`, `SEMANAS_HORAS_DIVISOR`, `ANTIGUEDAD_PORCENTAJE_POR_ANIO`).
- `docs/index.js` — all logic. `PAYMENT_MODES` (`pago_mensual` / `pago_por_hora`) encapsulates everything that differs between modes (rate table key, hours validation, formula, labels). `onCalculate` → `calculatePayment` → `renderPayment`.
- `docs/index.html` — the form markup; the `<head>` loads jQuery, `constants.js`, then `index.js` (order matters, all globals).
- `docs/v_old/` — legacy version, not in use.
- `parse_file.ipynb` — scratch notebook for reading the yearly wage spreadsheet (pandas); not part of the site.

## Monthly data tables

Array indices are the category value from the `<select>` (index 0 is a placeholder, so categories start at 1). `MENSUAL_RETIRO`/`POR_HORA_RETIRO` have 4 categories, the `CAMA_ADENTRO` ones have 5. `NO_REMUNERATIVO` is `[<12h, 12–15h, >15h]` weekly hours. `PATAGONIA_PERCENTAGE` changed from 0.30 to 0.31 in April 2026.

## Adding a new month (the usual task)

1. Copy a block in `docs/constants.js` and update the values.
2. Add a matching `<option value="MES_AAAA">` to `#select_month` in `docs/index.html` (newest first). The option's `value` must equal the `CONSTANTS` key.

Intentional in `index.html`: the Enero–Junio 2025 labels all map to `ENERO_2025` because the values were identical for those months (no duplicate blocks in `constants.js`). The placeholders all use `value="blank"` (the Patagonia one is checked explicitly in `onCalculate`), and `onCalculate` shows an error if no month is selected.
