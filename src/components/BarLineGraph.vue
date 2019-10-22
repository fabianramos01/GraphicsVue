<template>
    <apexchart width="400" v-bind:type="data.type" :options="options" :series="series"></apexchart>
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
                    // theme: {
                    //     palette: 'palette4'
                    // },
                    // chart: {
                    //     height: 380,
                    //     type: "line",
                    //     foreColor: '#6D6D6D'
                    // },
                    fill: {
                        type: "gradient",
                        gradient: {
                            shadeIntensity: 1,
                            opacityFrom: 0.7,
                            opacityTo: 0.9,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "#EB656F",
                                    opacity: 1
                                },
                                {
                                    offset: 20,
                                    color: "#FAD375",
                                    opacity: 1
                                },
                                {
                                    offset: 60,
                                    color: "#61DBC3",
                                    opacity: 1
                                },
                                {
                                    offset: 100,
                                    color: "#95DA74",
                                    opacity: 1
                                }
                            ]
                        }
                    },
                    grid: {
                        borderColor: '#6D6D6D'
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