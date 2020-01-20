<template>
    <apexchart width="400" v-bind:type="data.type" :options="options" :series="series"/>
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
                            color: 'black',
                            height: 5,
                            width: '100%',
                            offsetX: 0,
                            offsetY: 0
                        },
                        title: {
                            text: 'Ok',
                            offsetX: 0,
                            offsetY: 0,
                            style: {
                                color: undefined,
                                fontSize: '12px',
                                fontFamily: 'Helvetica, Arial, sans-serif',
                                cssClass: 'apexcharts-xaxis-title',
                            },
                        },
                    },
                    grid: {
                        show: true,
                        borderColor: '#6D6D6D'
                    },
                    legend: {
                        show: true,
                        position: 'bottom',
                        showForSingleSeries: true,
                        fontSize: '14px',
                        fontFamily: 'Helvetica, Arial',
                        markers: {
                            width: 10,
                            height: 10,
                            radius: 12,
                        }
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            endingShape: 'flat',
                            columnWidth: '80%',
                            barHeight: '70%',
                            distributed: false,
                            colors: {
                                ranges: [{
                                    from: 0,
                                    to: 0,
                                    color: 'black'
                                }],
                                backgroundBarColors: [],
                                backgroundBarOpacity: 1,
                            },
                            dataLabels: {
                                position: 'top',
                                maxItems: 100,
                                hideOverflowingLabels: true,
                                orientation: 'horizontal'
                            }
                        }
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