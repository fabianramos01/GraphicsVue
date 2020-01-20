<template>
    <div id="app">
        <v-row>
            <v-col cols="3">
                <DonutPieGraph v-bind:data="data"/>
            </v-col>
            <v-col cols="3">
                <BarLineGraph v-bind:data="dataBar"/>
            </v-col>
            <v-col cols="3">
                <RadialBarGraph v-bind:data="data"/>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import DonutPieGraph from "./components/DonutPieGraph";
    import BarLineGraph from "./components/BarLineGraph";
    import RadialBarGraph from "./components/RadialBarGraph";

    export default {
        name: 'app',
        components: {
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
                    type: 'bar'
                }
            }
        }
    }
</script>

<style>
</style>
