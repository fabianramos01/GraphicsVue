<template>
    <apexchart width="400" v-bind:type="data.type" :options="options" :series="series"></apexchart>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'

    export default {
        name: "DonutPieGraph",
        components: {
            apexchart: VueApexCharts
        },
        props: ['data'],
        data: function () {
            return {
                series: this.data.series,
                options: {
                    labels: this.data.labels
                    ,
                    theme: {
                        palette: 'palette10'
                    },
                    fill: {
                        type: 'gradient',
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>