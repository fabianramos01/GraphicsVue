<template>
    <apexchart width="400" type="bar" :options="options" :series="series"></apexchart>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts';

    export default {
        name: "BarLineGraph",
        components: {
            apexchart: VueApexCharts
        },
        props: ['data'],
        data: function () {
            return {
                options: {
                    chart: {
                        id: 'vuechart'
                    },
                    xaxis: {
                        categories: this.data.seriesX,
                        axisBorder: {
                            show: true,
                            color: '#78909C',
                            height: 5,
                            width: '100%',
                            offsetX: 0,
                            offsetY: 0
                        }
                    },
                    theme: {
                        palette: 'palette4'
                    },
                    fill: {
                        type: 'gradient',
                    }
                },
                series: [{
                    name: this.data.name,
                    data: this.data.seriesY
                }]
            }
        }
    }
</script>

<style scoped>

</style>