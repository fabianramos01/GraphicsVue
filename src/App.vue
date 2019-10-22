<template>
    <div id="app">
        <!--        <CardGraphic/>-->
        <!--        <CardGraphic2/>-->
        <DonutPieGraph v-bind:data="data"/>
        <BarLineGraph v-bind:data="dataBar"/>
        <RadialBarGraph v-bind:data="data"/>
    </div>
</template>

<script>
    // import CardGraphic from "./components/CardGraphic";
    // import CardGraphic2 from "./components/CardGraphic2";
    import DonutPieGraph from "./components/DonutPieGraph";
    import BarLineGraph from "./components/BarLineGraph";
    import RadialBarGraph from "./components/RadialBarGraph";

    export default {
        name: 'app',
        components: {
            // CardGraphic: CardGraphic,
            // CardGraphic2: CardGraphic2
            DonutPieGraph: DonutPieGraph,
            BarLineGraph: BarLineGraph,
            RadialBarGraph: RadialBarGraph
        },
        data: function () {
            return {
                data: {
                    type: 'pie',
                    series: [44, 55, 41, 17, 15],
                    labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
                },
                dataBar: {
                    seriesX: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
                    seriesY: [30, 40, 45, 50, 49, 60, 70, 91],
                    name: "Ejemplo",
                    type: 'line'
                }
            }

        }

    }
</script>

<style>
</style>
