// Retrieving stats from local storage
let redpills = localStorage.getItem("redpills");
redpills = redpills === null ? 0 : parseInt(redpills);

let bluepills = localStorage.getItem("bluepills");
bluepills = bluepills === null ? 0 : parseInt(bluepills);

const pillData = [
  { id: "bluepill", value: bluepills },
  { id: "redpill", value: redpills },
];

//Building svg with stats using d3
const svg = d3.select("svg");
const svgContainer = d3.select("#container");

const margin = 80;
const width = 1000 - 2 * margin;
const height = 600 - 2 * margin;

const chart = svg
  .append("g")
  .attr("transform", `translate(${margin}, ${margin})`)
  .attr("viewBox", `0 0 300 600`);

const xScale = d3
  .scaleBand()
  .range([0, width])
  .domain(pillData.map((s) => s.id))
  .padding(0.4);

const yScale = d3.scaleLinear().range([height, 0]).domain([0, 100]);

const makeYLines = () => d3.axisLeft().scale(yScale);

chart
  .append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom(xScale));

chart.append("g").call(d3.axisLeft(yScale));

chart
  .append("g")
  .attr("class", "grid")
  .call(makeYLines().tickSize(-width, 0, 0).tickFormat(""));

const barGroups = chart.selectAll().data(pillData).enter().append("g");

barGroups
  .append("rect")
  .attr("class", "bar")
  .attr("x", (g) => xScale(g.id))
  .attr("y", (g) => yScale(g.value))
  .attr("height", (g) => height - yScale(g.value))
  .attr("width", xScale.bandwidth())
  .on("mouseenter", function (actual, i) {
    d3.selectAll(".value").attr("opacity", 0);

    d3.select(this)
      .transition()
      .duration(300)
      .attr("opacity", 0.6)
      .attr("x", (a) => xScale(a.id) - 5)
      .attr("width", xScale.bandwidth() + 10);

    const y = yScale(actual.value);

    line = chart
      .append("line")
      .attr("id", "limit")
      .attr("x1", 0)
      .attr("y1", y)
      .attr("x2", width)
      .attr("y2", y);

    barGroups
      .append("text")
      .attr("class", "divergence")
      .attr("x", (a) => xScale(a.id) + xScale.bandwidth() / 2)
      .attr("y", (a) => yScale(a.value) + 30)
      .attr("fill", "white")
      .attr("text-anchor", "middle")
      .text((a, idx) => {
        const divergence = (a.value - actual.value).toFixed(1);

        let text = "";
        if (divergence > 0) text += "+";
        text += `${divergence}%`;

        return idx !== i ? text : "";
      });
  })
  .on("mouseleave", function () {
    d3.selectAll(".value").attr("opacity", 1);

    d3.select(this)
      .transition()
      .duration(300)
      .attr("opacity", 1)
      .attr("x", (a) => xScale(a.id))
      .attr("width", xScale.bandwidth());

    chart.selectAll("#limit").remove();
    chart.selectAll(".divergence").remove();
  });

barGroups
  .append("text")
  .attr("class", "value")
  .attr("x", (a) => xScale(a.id) + xScale.bandwidth() / 2)
  .attr("y", (a) => yScale(a.value) + 30)
  .attr("text-anchor", "middle")
  .text((a) => `${a.value}%`);

svg
  .append("text")
  .attr("class", "label")
  .attr("x", -(height / 2) - margin)
  .attr("y", margin / 2.4)
  .attr("transform", "rotate(-90)")
  .attr("text-anchor", "middle")
  .text("Choose meter (%)");

svg
  .append("text")
  .attr("class", "label")
  .attr("x", width / 2 + margin)
  .attr("y", height + margin * 1.7)
  .attr("text-anchor", "middle")
  .text("pills");

svg
  .append("text")
  .attr("class", "title")
  .attr("x", width / 2 + margin)
  .attr("y", 40)
  .attr("text-anchor", "middle")
  .text("Chosen pill");

// Responsivess of the navbar
$(document).ready(function () {
  $(".sidenav").sidenav();
});
