# El Ártico que respira al revés
### Dashboard · ABCFlux v2 · NASA ABoVE

---

Dashboard de visualización científica construido con **React + Vite + Recharts**, desplegado en GitHub Pages. Explora 40 años de mediciones de flujos de CO₂ y CH₄ en ecosistemas terrestres y acuáticos de la región ártico-boreal, basado en el dataset **ABCFlux v2** de NASA.

El objetivo es comunicar uno de los hallazgos más críticos del cambio climático ártico: la región está transitando de ser un sumidero neto de carbono a convertirse en una fuente, impulsado por el deshielo del permafrost y el incremento de la respiración ecosistémica.

Este dashboard fue desarrollado como parte de un Datathon (categoría Dashboard), con el objetivo de comunicar datos científicos de la NASA de forma accesible. La narrativa central está respaldada por los reportes técnicos anuales del programa de Ciencias Atmosféricas de la NASA (2017, 2019), que identifican las mediciones de perfil vertical de gases traza y la monitorización de CO₂ ártico como áreas de muy alta prioridad según el Decadal Survey 2017.

## Datos

| Fuente | ABCFlux v2: Arctic-Boreal CO₂ and CH₄ In-situ Flux and Environmental Data |
|---|---|
| DOI | [10.3334/ORNLDAAC/2448](https://doi.org/10.3334/ORNLDAAC/2448) |
| Repositorio | ORNL DAAC · NASA ABoVE |
| Cobertura temporal | 1984–2024 |
| Sitios terrestres | 337 sitios únicos · 19,069 registros |
| Sitios acuáticos | 712 sitios únicos · 10,184 registros |
| Países | Alaska (USA), Canadá, Rusia, Finlandia, Suecia, Noruega, Groenlandia, Islandia, Estonia, Mongolia, Escocia |
| Resolución temporal | Mensual |
| Versión del dataset | v2 (revisado abril 2026) |

### Variables principales utilizadas

| Variable | Descripción | Unidad |
|---|---|---|
| `nee` | Intercambio neto de ecosistema (NEE) | g C m⁻² mes⁻¹ |
| `gpp` | Producción primaria bruta (fotosíntesis) | g C m⁻² mes⁻¹ |
| `reco` | Respiración del ecosistema | g C m⁻² mes⁻¹ |
| `ch4_flux_total` | Flujo total de metano | g C m⁻² mes⁻¹ |
| `co2_flux` | Flujo acuático de CO₂ | g C m⁻² mes⁻¹ |
| `biome` | Bioma (Boreal, Tundra, Temperate) | — |
| `bawld_class` | Clase ecosistémica BAWLD | — |
| `permafrost_thaw` | Estado de deshielo del permafrost | Yes / No |
| `expert_flag_co2` | Bandera de calidad de datos | 0 = sin problemas |



Todas las gráficas de resumen utilizan únicamente registros con `expert_flag_co2 == 0` y medianas en lugar de medias, dado que el NEE presenta valores extremos (min: −621 g C m⁻² mes⁻¹, max: +370 g C m⁻² mes⁻¹).

---



## Secciones del dashboard

- Gráfica de área apilada que muestra el porcentaje anual de mediciones con emisión neta (NEE > 0) vs absorción neta (NEE < 0) entre 2000 y 2024. El hallazgo central: el porcentaje de sitios que emiten CO₂ pasó de ~46% en 2007 al 70.8% en 2024.

**KPI:** *"En 2024, 7 de cada 10 mediciones muestran emisión neta"*

- Heatmap de NEE mediana por bioma × mes (3 biomas × 12 meses) que revela el patrón estacional: verano = absorción (hasta −52 g C/m²/mes en templado), invierno = emisión. Panel secundario con GPP vs Reco anual, mostrando que la respiración supera la fotosíntesis en años recientes.

- Barras horizontales de NEE mediana por clase ecosistémica BAWLD. Los Permafrost Bogs muestran NEE de −5.0 g C (fuente neta), mientras los Boreal Forests aún actúan como sumidero (+5.9 g C).


- Los ecosistemas acuáticos árticos son consistentemente fuentes de CO₂. Serie temporal de CO₂ acuático mediano por año, diferenciando ecosistemas lénticos (lagos) y lóticos (ríos).

---

## Herramientas utilizadas

| Herramienta | Uso |
|---|---|
| React 18 + Vite | Framework y bundler |
| Recharts | Gráficas interactivas |
| Tailwind CSS | Estilos utilitarios |
| shadcn/ui | Componentes UI |
| GitHub Pages | Despliegue |
| Python + pandas | Procesamiento y limpieza de datos (EDA) |

---

## Procesamiento de datos

Los datos originales en formato CSV fueron procesados con Python antes de integrarse al dashboard:

```
Arctic_Boreal_CO2_Flux_V2_Terrestrial.csv  →  filtrado, medianas, agregación
Arctic_Boreal_CO2_Flux_V2_Aquatic.csv      →  filtrado, medianas por año y tipo
```

Pasos de limpieza aplicados:
- Reemplazo de valores faltantes (`-9999` → `NaN`)
- Filtrado por `expert_flag_co2 == 0`
- Filtrado temporal: 1999–2024 (periodo con mayor densidad de datos)
- Cálculo de medianas por año, bioma, mes y clase ecosistémica
- Exportación a JSON para consumo en React

---

## Datos usados: ABCFlux v2: Arctic-Boreal CO2 and CH4 In-situ Flux and Environmental Data

```
Leffler, A. J., Serrone, A., Bolek, A., Rocha, A. V., Korrensalo, A., Vähä, A., Tremblay, A., Barr, A., Salazar, A., Sabrekov, A. F., Rasanen, A., Mavrovic, A., Roy, A., Panov, A. V., Townsend-Small, A., Niyazova, A., Prokushkin, A., Jonsson, A., Lindroth, A., … Harazono, Y. (2026). <i>ABCFlux v2: Arctic-Boreal CO2 and CH4 In-situ Flux and Environmental Data</i> (Version 1). ORNL Distributed Active Archive Center. https://doi.org/10.3334/ORNLDAAC/2448 Date Accessed: 2026-05-01
```

---
## Instalación local

```bash
git clone https://github.com/AnahiMolina/dashboard.git
cd dashboard

npm install
npm run dev
npm run build
```

---

*NASA · ORNL DAAC · ABoVE · ABCFlux v2*
