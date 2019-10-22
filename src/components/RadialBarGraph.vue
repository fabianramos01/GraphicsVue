<template>
    <apexchart type=radialBar height=350 :options="options" :series="series"/>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'

    export default {
        name: "RadialBarGraph",
        components: {
            apexchart: VueApexCharts
        },
        props: ['data'],
        data: function () {
            return {
                series: this.data.series,
                options: {
                    plotOptions: {
                        radialBar: {
                            dataLabels: {
                                name: {
                                    fontSize: '22px',
                                },
                                value: {
                                    fontSize: '16px',
                                },
                                total: {
                                    show: true,
                                    label: 'Total',
                                    formatter: function () {
                                        //const reducer = (accumulator, currentValue) => accumulator + currentValue;

                                        // return this.data.series.reduce(reducer)
                                        return 2
                                    }
                                }
                            }
                        }
                    },
                    labels: this.data.labels
                }
            }
        }
    }
</script>

<style scoped>

</style>