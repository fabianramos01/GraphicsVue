<template>
    <apexchart width="400" v-bind:type="data.type" :options="options" :series="series"/>
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
                    labels: this.data.labels,
                    theme: {
                        palette: 'palette10'
                    },
                    fill: {
                        type: 'gradient',
                    },
                    legend: {
                        position: 'bottom'
                    },
                    plotOptions: {
                        pie: {
                            labels: {
                                show: true,
                                name: {
                                    show: true,
                                    fontSize: '22px',
                                    fontFamily: 'Rubik',
                                    color: '#dfsda',
                                    offsetY: -10
                                },
                                value: {
                                    show: true,
                                    fontSize: '16px',
                                    fontFamily: 'Helvetica, Arial, sans-serif',
                                    color: '#dfsda',
                                    offsetY: 16,
                                    formatter: function (val) {
                                        return val
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>