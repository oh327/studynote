// 실습용 옵션

function func_options(chartListName) {
if (chartListName == "lineChart") {
return {
chart: { title: "24-hr Average Temperature", width: 1000, height: 500 },
xAxis: {
title: "Month",
},
yAxis: {
title: "Amount",
},
tooltip: {
formatter: (value) => `${value}°C`,
},
legend: {
align: "bottom",
},
};
}
if (chartListName == "areaChart") {
return {
chart: { title: "Average Temperature", width: 900, height: 400 },
xAxis: { pointOnColumn: false, title: { text: "Month" } },
yAxis: { title: "Temperature (Celsius)" },
};
}
if (chartListName == "lineAreaChart") {
return {
chart: { title: "Energy Usage", width: 900, height: 500 },
xAxis: {
title: "Month",
date: { format: "yy/MM" },
},
yAxis: {
title: "Energy (kWh)",
},
tooltip: {
formatter: (value) => `${value}kWh`,
},
};
}
if ((chartListName = "barChart")) {
return {
chart: { title: "Monthly Revenue", width: 900, height: 400 },
};
}
if (chartListName == "columnChart") {
return {
chart: { title: "Monthly Revenue", width: 900, height: 400 },
};
}
if (chartListName == "bulletChart") {
return {
chart: { title: "Monthly Revenue", width: 900, height: 500 },
};
}
if (chartListName == "boxPlotChart") {
return {
chart: { title: "Monthly Revenue", width: 900, height: 500 },
};
}
if (chartListName == "treemapChart") {
return {
chart: { title: "Used disk space", width: 900, height: 500 },
tooltip: { formatter: (value) => `${value}GB` },
};
}
if (chartListName == "heatmapChart") {
return {
chart: { title: "24-hr Average Temperature", width: 700, height: 400 },
xAxis: {
title: "Month",
},
yAxis: {
title: "City",
},
tooltip: {
formatter: (value) => `${value}°C`,
},
legend: {
align: "bottom",
},
};
}
if (chartListName == "scatterChart") {
return {
chart: { title: "Height vs Weight", width: 900, height: 600 },
xAxis: { title: "Height (cm)" },
yAxis: { title: "Weight (kg)" },
};
}
if (chartListName == "lineScatterChart") {
return {
chart: { title: "Efficiency vs Expenses", width: 900, height: 500 },
};
}
if (chartListName == "bubbleChart") {
return {
chart: { title: "Life Expectancy per GDP", width: 900, height: 500 },
yAxis: {
title: "Life Expectancy (years)",
},
xAxis: {
title: "GDP",
},
};
}
if (chartListName == "pieChart") {
return {
chart: { title: "Usage share of web browsers", width: 600, height: 400 },
};
}
if (chartListName == "nestedPieChart") {
return {
chart: { title: "Usage share of web browsers", width: 900, height: 600 },
series: {
browsers: {
radiusRange: {
inner: "20%",
outer: "50%",
},
},
versions: {
radiusRange: {
inner: "55%",
outer: "85%",
},
},
},
};
}
if (chartListName == "radarChart") {
return {
chart: { title: "Annual Incomes", width: 600, height: 600 },
};
}
if (chartListName == "radialBarChart") {
return {
chart: {
title: "Winter Olympic medals per existing country (TOP 5)",
width: 700,
height: 700,
},
};
}
if (chartListName == "gaugeChart") {
return {
chart: { title: "Speedometer", width: 550, height: 500 },
circularAxis: {
scale: {
min: 0,
max: 100,
},
title: { text: "km/h" },
},
plot: {
bands: [
{ range: [0, 20], color: "#55bf3b" },
{ range: [20, 50], color: "#dddf0d" },
{ range: [50, 110], color: "#df5353" },
],
},
};
}
}
